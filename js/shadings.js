/**
* Summary of file: This file has functions used to define the shading of the balls.
* This includes making the shadows at the bottom row as well as adding light to the balls.
*/

/**
 *
 * Description. Produces a general shape, using the general set up buffers
 *
 * @param {array} color
 * @param {array} vertices
 */
function filledTriangle(color, vertices){
    var newColor = [];
    if(color.length == 4){
        newColor = uniformColorGen(color, 3);
    }
    else{
        newColor = color;
    }

    triangleCoordsVBO = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, triangleCoordsVBO);
    var triangleCoords = new Float32Array(vertices);
    gl.bufferData(gl.ARRAY_BUFFER, triangleCoords, gl.STATIC_DRAW);
    triangleColorVBO = gl.createBuffer()

    gl.uniformMatrix3fv(transformUniformLocation, false, transform.getMat3());
    //position
    gl.bindBuffer(gl.ARRAY_BUFFER, triangleCoordsVBO);
    gl.vertexAttribPointer(vertexAttributeLocation, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vertexAttributeLocation);

    gl.bindBuffer(gl.ARRAY_BUFFER, triangleColorVBO);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(newColor), gl.STATIC_DRAW);
    gl.vertexAttribPointer(colorAttributeLocation, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(colorAttributeLocation);

    gl.drawArrays(gl.TRIANGLES, 0, 3);
}
/**
 *
 * Description. Uses the unrotate to generate a set of coordinates that
 * will be used to create a shape fixed at a center
 *
 * @param {array} center the "current" center point
 * @param {array} newC the new center point
 * @param {array} color an array holding r,g,b,a values of a color
 * @param {number} sideNum the number of sides
 * @param {number} sideLength the length of the side
 */
function shape(center, newC, color, sideNum, sideLength){
    var sumOfIntAng = (sideNum-2)*180;
    var newColor = [];
    //generates new uniform colors if not specified
    if(color.length == 1){
        for(var i = 0; i < sideNum; i++){
            newColor.push(uniformColorGen(color[0], sideNum));
        }
    }
    else{
        newColor = color;
    }
    //aligns it so the bottom is flat
    pushTransform();
        transform.rotate(radians((-sumOfIntAng)/(2*sideNum)));
        //transform.scale(3/sideNum);
        for(var i = 0; i < sideNum; i++){
            //makes triangles and rotate
            pushTransform();
                transform.rotate(radians(360/sideNum)*i);
                var tempTriCoords = genTriangle(center, sideLength, [(360/sideNum), (180-(360/sideNum))/2,(180-(360/sideNum))/2]);
                tempTriCoords = fixCenter(tempTriCoords, newC, radians(360/sideNum)*i, sideNum);
                filledTriangle(newColor[i], tempTriCoords);
            popTransform();

        }
    popTransform();

}

/**
 *
 * Description. Generates the coordinates on a triangle
 *
 * @param {array} center the coordinates of the center point
 * @param {number} side how much to shift it by
 * @param {number} angle expressed in degrees
 */
function genTriangle(center, side, angles){
    triCoord = [center[0], center[1]];

    triCoord.push(center[0]+side);
    triCoord.push(center[1]);

    var b = (side * Math.sin(radians(angles[1])))/Math.sin(radians(angles[2]));
    var dy = b*Math.sin(radians(angles[0]));
    var dx = b*Math.cos(radians(angles[0]));

    triCoord.push(center[0]+dx);
    triCoord.push(center[1]+dy);



    return triCoord;
}

/**
 *
 * Description. Uses the unrotate to generate a set of coordinates that
 * will be used to create a shape fixed at a center
 *
 * @param {array} oldCoords the old set of coordinates
 * @param {number} newC the new center point
 * @param {number} angle expressed in radians
 * @param {number} sideNum the number of sides
 */
function fixCenter(oldCoords, newC, angle, sideNum){
    newCoords = []
    var unRotated = unrotate([newC[0], newC[1]], angle, sideNum);
    newCoords[0] = unRotated[0];
    newCoords[1] = unRotated[1];
    newCoords[2] = oldCoords[2];
    newCoords[3] = oldCoords[3];
    newCoords[4] = oldCoords[4];
    newCoords[5] = oldCoords[5];


    return newCoords;
}


/**
 *
 * Description. Returns the coordinates before it was rotated.
 * This is used so that we can find the center of rotation
 *
 * @param {array} oldPoint coordinates of the old point
 * @param {number} rotataionAngle angle expressed in  in radians
 * @param {number} sideNum the number of sides
 */
function unrotate(oldPoint, rotationAngle, sideNum){
    var sumOfIntAng = (sideNum-2)*180;
    var nP = [oldPoint[0], oldPoint[1]];
    var nPP = cartToPolar(nP);
    var nC = polarToCart([nPP[0], nPP[1]-degrees(rotationAngle)-((-sumOfIntAng)/(2*sideNum))]);
    return nC;
}

/**
 *
 * Description. Given a shorter length color array, return a longer array with the same color values
 *
 * @param {array} color an array of r,g,b,a values of a color
 * @param {number} scale amount to scale the ball by
 */
function uniformColorGen(color, sides){
    var colorArr = [];
    for(var i = 0; i < sides; i++){
        colorArr.push(color[0]);
        colorArr.push(color[1]);
        colorArr.push(color[2]);
        colorArr.push(color[3]);
    }
    return colorArr;
}

/**
 *
 * Description. Stores and group together different colors
 *
 * @param {array} colors an array of colors (not just r,g,b,a values)
 */
function concatColor(colors){
    var outColor = [];
    for(var i = 0; i < colors.length; i++){
        var tempCol = colors[i];
        for(var j = 0; j < tempCol.length; j++){
            outColor.push(tempCol[j]);
        }
    }
    return outColor;
}

/**
 *
 * Description. Determines the position of the light/shine
 *
 * @param {array} lightPos the center of the circle in vertices
 * @param {array} circleCenter amount to scale the ball by
 */
function shinePos(lightPos, circleCenter){
    var lx = lightPos[0];
    var ly = lightPos[1];
    var cx = circleCenter[0];
    var cy = circleCenter[1];

    //subtract circle center from lightsource to get lightsource adjusted to 0
    //convert to polar and shorten radius by theoretical Z axis.
    // Convert back to cartesian centered around 0, then add circleCenter
    //back to get the official light center and return it
    var shineP = cartToPolar([lx-cx,ly-cy]);

    var shineC = polarToCart([shineP[0]/3, shineP[1]]);

    shineC[0]+=cx;
    shineC[1]+=cy;

    return shineC;

}

//These are hard-coded variables
var defSideLen = 1;
var sideNumber = 50;

/**
 *
 * Description. Draws two shadows in the form of ovals
 *
 * @param {number} center the center of the circle in vertices
 * @param {number} scale amount to scale the ball by
 * @param {number} lightposition where the light position
 * @param {array} colors an array with r, g, b, a values for colors
 */
function drawLightBall(center, scale, lightposition, colors){

    //determining the position of the light
    var newCenter = shinePos(lightposition, center);

    pushTransform();

        transform.scale(scale);
        //making and combining new colours
        angleColors = [];
        for(var i = 0; i < sideNumber; i++){
            angleColors.push(concatColor([colors[0],colors[1],colors[2]]));
        }

        pushTransform();
            //drawing the shape of the ball with the colors defined above
            shape(center, newCenter, angleColors, sideNumber, defSideLen);
        popTransform();

    popTransform();

}

/**
 *
 * Description. Draws two shadows in the form of ovals
 *
 * @param {number} xOffset
 * @param {number} yOffset
 * @param {number} radius
 */
function newShadow(xOffset, yOffset, radius){

  pushTransform();
  transform.xshear(0.8);
    filledCircle(xOffset, yOffset, 0.2*radius, 32, colorMakerHelper(32, [0.2,0,0.5,0.6]));
  popTransform();

  pushTransform();
  transform.xshear(1);
    filledCircle(xOffset+0.1, yOffset, 0.25*radius, 32, colorMakerHelper(32, [0.2,0.2,0.2,0.35]));
  popTransform();

}
