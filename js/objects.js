/**
* Summary of file: Contains all functions needed to create and draw objects
*/

/*
* Description: Creates and colors a circle
*
* @param {number} xOffset
* @param {number} yOffset
* @param {number} radius
* @param {number} sideNum
* @param {array} color: holds r, g, b, a values
*/
function filledCircle(xOffset, yOffset, radius, sideNum, color) {
    var circleCoords = createCircleCoords(xOffset, yOffset, radius, sideNum);
    filledShape(circleCoords, color, gl.TRIANGLE_FAN);
}

/*
* Description: Creates a shape with an outline, but is not filled in
*
* @param {array} vertexArr: x and y coords of start of the bezier curve.
* @param {array} color: holds r, g, b, a values
* @param {object} drawMode: ex. gl.TRIANGLE_FAN
*/
function linedShape(vertexArr, color, drawMode) {
    filledShape(vertexArr, color, drawMode);
}

/*
* Description: A function that can generate any shape
*
* @param {array} vertexArr: x and y coords of start of the bezier curve.
* @param {array} color: holds r, g, b, a values
* @param {object} drawMode: ex. gl.TRIANGLE_FAN
*/
function filledShape(vertexArr, color, drawMode) {

    if(drawMode == undefined){
      drawMode = "gl.TRIANGLE_FAN";
    }

    //geometry buffer setup
    var shapeVBO = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, shapeVBO);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexArr), gl.STATIC_DRAW);

    gl.uniformMatrix3fv(transformUniformLocation, false, transform.getMat3());

    gl.bindBuffer(gl.ARRAY_BUFFER, shapeVBO);
    gl.vertexAttribPointer(vertexAttributeLocation, 2, gl.FLOAT, false, 0, 0);

    //color buffer setup
    var newColor = color;

    if(color.length === 4) {
      newColor = colorMakerHelper(vertexArr.length/2, color);

    }

    colorVBO = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorVBO);
    var colorCoords = new Float32Array(newColor);
    gl.bufferData(gl.ARRAY_BUFFER, colorCoords, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, colorVBO);
    gl.vertexAttribPointer(colorAttributeLocation, 4, gl.FLOAT, false, 0, 0);

    gl.drawArrays(eval(drawMode), 0, vertexArr.length/2);
}

/*
* Description: Using the provided curve_utils, function produces a shape defined
* by the bezier curves
*
* @param {array} startPt: x and y coords of start of the bezier curve.
* @param {array} endPt:  x and y coords of end of the bezier curve.
* @param {array} curvedPts: p1, p2
* @param {array} color: holds r, g, b, a values
* @param {number} scale: amount to scale the curved object
* @param {bool} drawGuide: shows the control points
*/

function curvedStripes(startPt, endPt, curvePts, color, scale, drawGuide, drawMode) {



  var control_polygon = [0, 0,
                         startPt[X],   startPt[Y], //p0
                        curvePts[0][X], curvePts[0][Y], //p1
                       curvePts[1][X], curvePts[1][Y], //p2
                       endPt[X],   endPt[Y]  //p3
                        ] ;

  var curve_pts = getPointsOnBezierCurve(control_polygon, 2, 20);

  pushTransform();

    transform.scale(scale);
    if (drawMode !== undefined) {
      filledShape(curve_pts, color, drawMode);
    } else {
      filledShape(curve_pts, color);
    }

    if(drawGuide){
      linedShape(control_polygon.slice(2,control_polygon.length), [1,0,0,1], "gl.LINE_LOOP");
    }

  popTransform();

}

/*
* Description: Returns an array for the r,g,b,a values of a color for all vertices
*
* @param {number} sideNum: the number of sides of a shape (or num of vertices)
* @param {array} color: r, g, b, a values of a color
*/

function colorMakerHelper(sideNum, color) {
    var colorArrayToReturn = [];
    for(var i = 0; i < sideNum; i++) {
        colorArrayToReturn.push(color[0]);
        colorArrayToReturn.push(color[1]);
        colorArrayToReturn.push(color[2]);
        colorArrayToReturn.push(color[3]);
    }

    return colorArrayToReturn;

}

/*
* Description: Helper function to generate the coordinates of a circle
*
* @param {array} xOffset
* @param {array} yOffset
* @param {number} radius: desired radius.
* @param {number} sideNum: the number of "sides" for a circle.
*/
function createCircleCoords(xOffset, yOffset, radius, sideNum) {

  var circleCoords = [];
  for (var i = 0; i < (sideNum); i++) {

      var angle = ((2*Math.PI)/sideNum) * i;
      var cosAng = Math.cos(angle);
      var sinAng = Math.sin(angle);

      circleCoords.push(xOffset + (radius * cosAng));
      circleCoords.push(yOffset + (radius * sinAng));
  }

  var circleCoordsO = new Float32Array(circleCoords);


  return circleCoordsO;

}

/*
* Description: Helper function to convert polar coordinates to cartesian
*
* @param {number} pPoint: a polar coordinate with a radius and theta
*/
function polarToCart(pPoint) {
    //point = [r, degrees]
    var r = pPoint[0];
    var degreess = pPoint[1]
    return [r*Math.cos(radians(degreess)), r*Math.sin(radians(degreess))];
}

/*
* Description: Helper function to convert cartesian coordinates to polar
*
* @param {array} cPoint: a cartesian coordinate with an x and y
*/
function cartToPolar(cPoint){
    //point= [x, y]
    var nx = cPoint[0];
    var ny = cPoint[1];

    return [Math.sqrt(nx*nx + ny*ny), Math.atan2(ny, nx)*(180.0/Math.PI)];
}


/*
* Description: Helper function to convert degrees to radians
*
* @param {number} degrees
*/
function radians(degrees) {
  return degrees * Math.PI / 180.0;

}

/*
* Description: Helper function to convert radians to degrees
*
* @param {number} radians
*/
function degrees( radians ) {
  return radians * 180 / Math.PI;
}
