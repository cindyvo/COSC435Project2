
/**
*  Draws a filled square of size 1 centered at the origin. Uses the current color.
*/
function filledSquare(x, y, r, colorArr) {
  filledCircle(x, y, r, 4, colorArr);
   // gl.uniformMatrix3fv(transformUniformLocation, false, transform.getMat3());
   // gl.bindBuffer(gl.ARRAY_BUFFER, squareCoordsVBO);
   // gl.vertexAttribPointer(vertexAttributeLocation, 2, gl.FLOAT, false, 0, 0);
   //
   //
   // squareColorVBO = gl.createBuffer();
   // gl.bindBuffer(gl.ARRAY_BUFFER, squareColorVBO);
   // var squareColorCoords = new Float32Array(colorArr);
   // gl.bufferData(gl.ARRAY_BUFFER, squareColorCoords, gl.STATIC_DRAW);
   //
   // gl.bindBuffer(gl.ARRAY_BUFFER, squareColorVBO);
   // gl.vertexAttribPointer(colorAttributeLocation, 4, gl.FLOAT, false, 0, 0);
   //
   //
   // gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
}

/**
*  Draws a filled triangle of size 1 centered at the origin. Uses the current color.
*/
function filledTriangle() {
   gl.uniformMatrix3fv(transformUniformLocation, false, transform.getMat3());
   gl.bindBuffer(gl.ARRAY_BUFFER, triangleCoordsVBO);
   gl.vertexAttribPointer(vertexAttributeLocation, 2, gl.FLOAT, false, 0, 0);

   triColorVBO = gl.createBuffer();
   gl.bindBuffer(gl.ARRAY_BUFFER, triColorVBO);
   var triColorCoords = new Float32Array([0,1,0,0.5, 0,1,0,0.5, 0,1,0.2,0.5]);
   gl.bufferData(gl.ARRAY_BUFFER, triColorCoords, gl.STATIC_DRAW);

   gl.bindBuffer(gl.ARRAY_BUFFER, triColorVBO);
   gl.vertexAttribPointer(colorAttributeLocation, 4, gl.FLOAT, false, 0, 0);

   gl.drawArrays(gl.TRIANGLES, 0, 3);
}

function filledCircle(x, y, r, sideNum, colorArr) {
    var diskCoordsVBO = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, diskCoordsVBO);
    var circleCoords = createCircleCoords(x, y, r, sideNum);
    gl.bufferData(gl.ARRAY_BUFFER, circleCoords, gl.STATIC_DRAW);
    console.log(circleCoords);
    gl.uniformMatrix3fv(transformUniformLocation, false, transform.getMat3());
    gl.bindBuffer(gl.ARRAY_BUFFER, diskCoordsVBO);
    gl.vertexAttribPointer(vertexAttributeLocation, 2, gl.FLOAT, false, 0, 0);

    circleColorVBO = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, circleColorVBO);
    var circleColorCoords = new Float32Array(colorArr);
    gl.bufferData(gl.ARRAY_BUFFER, circleColorCoords, gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, circleColorVBO);
    gl.vertexAttribPointer(colorAttributeLocation, 4, gl.FLOAT, false, 0, 0);

    gl.drawArrays(gl.TRIANGLE_FAN, 0, sideNum);
}

function linedShape(vertexArr, color, drawMode) {
    filledShape(vertexArr, color, drawMode);
}
function filledShape(vertexArr, color, drawMode) {
    //later add drawing mode
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
    colorVBO = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorVBO);
    var colorCoords = new Float32Array(colorMakerHelper(vertexArr.length/2, color));
    gl.bufferData(gl.ARRAY_BUFFER, colorCoords, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, colorVBO);
    gl.vertexAttribPointer(colorAttributeLocation, 4, gl.FLOAT, false, 0, 0);

    console.log(vertexArr);
    console.log(colorMakerHelper(vertexArr.length/2, color));
    gl.drawArrays(eval(drawMode), 0, vertexArr.length/2);
}

function curvedStripes(startPt, endPt, curvePts, color, scale) {
  console.log("CURVED STRIPES" +color);
  var control_polygon = [0, 0,  // center for drawing needed from triangle fan
                                  // try other number 200 instead of 300 to get it
                         startPt[X],   startPt[Y], //p0
                        curvePts[0][X], curvePts[0][Y], //p1
                       curvePts[1][X], curvePts[1][Y], //p2
                       endPt[X],   endPt[Y]  //p3
                        ] ;

  var curve_pts = getPointsOnBezierCurve(control_polygon, 2, 20);

  pushTransform();
    transform.scale(scale);
    filledShape(curve_pts, color);
    //draw the red grid to help guide, omit the 0,0
    linedShape(control_polygon.slice(2,control_polygon.length), [1,0,0,1], "gl.LINE_LOOP");
  popTransform();

}

function colorMakerHelper(sideNum, colorArr) {
    var colorArrayToReturn = [];
    console.log("colorMakerHelper: "+ colorArr);
    for(var i = 0; i < sideNum; i++) {
        colorArrayToReturn.push(colorArr[0]);
        colorArrayToReturn.push(colorArr[1]);
        colorArrayToReturn.push(colorArr[2]);
        colorArrayToReturn.push(colorArr[3]);
    }

    return colorArrayToReturn;

}

function createCircleCoords(cx, cy, r, sideNum) {

  var circleCoords = [];
  for (var i = 0; i < (sideNum); i++) {

      var angle = ((2*Math.PI)/sideNum) * i;
      var g = 0.00005;
      var cosP = Math.cos(angle);
      var sinP = Math.sin(angle);
      //
      // if(cosP < g && cosP > -g){
      //   cosP = 0;
      // }
      // if(sinP < g && sinP > -g){
      //   sinP = 0;
      // }
      circleCoords.push(cx + (r * cosP));
      circleCoords.push(cy + (r * sinP));
  }

  var circleCoordsO = new Float32Array(circleCoords);


  return circleCoordsO;

}

function polarToCart(pPoint) {
    //point = [r, degrees]
    var r = pPoint[0];
    var degreess = pPoint[1]
    return [r*Math.cos(radians(degreess)), r*Math.sin(radians(degreess))];
}

function cartToPolar(cPoint){
    //point= = [x, y]
    var nx = cPoint[0];
    var ny = cPoint[1];

    return [Math.sqrt(nx*nx + ny*ny), Math.atan2(ny, nx)*(180.0/Math.PI)];
}


//math helpers
function radians(degrees) {
  return degrees * Math.PI / 180.0;

}
