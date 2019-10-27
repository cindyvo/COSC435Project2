/**
*  Draws a filled square of size 1 centered at the origin. Uses the current color.
*/
function filledSquare(colorArr) {
   gl.uniformMatrix3fv(transformUniformLocation, false, transform.getMat3());
   gl.bindBuffer(gl.ARRAY_BUFFER, squareCoordsVBO);
   gl.vertexAttribPointer(vertexAttributeLocation, 2, gl.FLOAT, false, 0, 0);


   squareColorVBO = gl.createBuffer();
   gl.bindBuffer(gl.ARRAY_BUFFER, squareColorVBO);
   var squareColorCoords = new Float32Array(colorArr);
   gl.bufferData(gl.ARRAY_BUFFER, squareColorCoords, gl.STATIC_DRAW);

   gl.bindBuffer(gl.ARRAY_BUFFER, squareColorVBO);
   gl.vertexAttribPointer(colorAttributeLocation, 4, gl.FLOAT, false, 0, 0);


   gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
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

function filledCircle(colorArr) {
    gl.uniformMatrix3fv(transformUniformLocation, false, transform.getMat3());
    gl.bindBuffer(gl.ARRAY_BUFFER, diskCoordsVBO);
    gl.vertexAttribPointer(vertexAttributeLocation, 2, gl.FLOAT, false, 0, 0);

    circleColorVBO = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, circleColorVBO);
    var circleColorCoords = new Float32Array(colorArr);
    gl.bufferData(gl.ARRAY_BUFFER, circleColorCoords, gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, circleColorVBO);
    gl.vertexAttribPointer(colorAttributeLocation, 4, gl.FLOAT, false, 0, 0);

    gl.drawArrays(gl.TRIANGLE_FAN, 0, 32);
}

function colorMakerHelper(colorArr) {
    var colorArrayToReturn = [];

    for(var i = 0; i < 32; i++) {
        colorArrayToReturn.push(colorArr[0]);
        colorArrayToReturn.push(colorArr[1]);
        colorArrayToReturn.push(colorArr[2]);
        colorArrayToReturn.push(colorArr[3]);
    }

    return colorArrayToReturn;

}



function drawScene() {

  pushTransform();

    pushTransform();
    transform.scale(2.0,2.0);
     filledSquare([0,0,0,1, 0,0,0,1, 0,1,0,0.8, 0,1,0,0.7]);
     popTransform();

    // pushTransform();
    //     transform.translate(0.5,0);
    //     //bl, br, tr, tl
    //     filledSquare([1,1,0,0.2, 0,1,0,1, 0,1,0,1, 1,1,0,0.2]);
    // popTransform();

    //TOP ROW

    //apricot-yellow ball
    pushTransform();
        transform.translate(0,0.42);
        transform.scale(0.33,0.33);
        filledCircle(colorMakerHelper([244.0/255.0,222.0/255.0,130.0/255.0,1]));
    popTransform();

    //FOURTH BOTTOM ROW

    //maroon red ball
    pushTransform();
        transform.translate(-0.15,0.23);
        transform.scale(0.36,0.36);
        filledCircle(colorMakerHelper([140.0/255.0,45.0/255.0,56.0/255.0,1]));
    popTransform();

    //light blue
    pushTransform();
        transform.translate(0.2,0.28);
        transform.scale(0.36,0.36);
        filledCircle(colorMakerHelper([64.0/255.0,82.0/255.0,157.0/255.0,1]));
    popTransform();

    //THIRD BOTTOM ROW

    //purple ball
    pushTransform();
        transform.translate(-0.35,0.05);
        transform.scale(0.39,0.39);
        filledCircle(colorMakerHelper([77.0/255.0,29.0/255.0,31.0/255.0,1]));
    popTransform();

    //dark orange ball
    pushTransform();
        transform.translate(0.05,0.10);
        transform.scale(0.39,0.39);
        filledCircle(colorMakerHelper([204.0/255.0,81.0/255.0,41.0/255.0,1]));
    popTransform();

    //redish ball
    pushTransform();
        transform.translate(0.43,0.15);
        transform.scale(0.39,0.39);
        filledCircle(colorMakerHelper([167.0/255.0,45.0/255.0,44.0/255.0,1]));
    popTransform();

    //SECOND BOTTOM ROW

    //dark gray ball
    pushTransform();
        transform.translate(-0.55,-0.20);
        transform.scale(0.42,0.42);
        filledCircle(colorMakerHelper([22.0/255.0,48.0/255.0,39.0/255.0,1]));
    popTransform();

    //dark blue ball
    pushTransform();
        transform.translate(-0.14,-0.15);
        transform.scale(0.42,0.42);
        filledCircle(colorMakerHelper([44.0/255.0,52.0/255.0,116.0/255.0,1]));
    popTransform();

    //orange ball
    pushTransform();
        transform.translate(0.26,-0.10);
        transform.scale(0.42,0.42);
        filledCircle(colorMakerHelper([228.0/255.0,143.0/255.0,51.0/255.0,1]));
    popTransform();

    //dark yellow ball
    pushTransform();
        transform.translate(0.67,-0.05);
        transform.scale(0.42,0.42);
        filledCircle(colorMakerHelper([197.0/255.0,156.0/255.0,53.0/255.0,1]));
    popTransform();

//BOTTOM ROW

    //black ball bottom row
    pushTransform();
        transform.translate(-0.8,-0.45);
        transform.scale(0.45,0.45);
        filledCircle(colorMakerHelper([0,0,0,1]));
    popTransform();


    //dark green ball
    pushTransform();
        transform.translate(-0.35,-0.40);
        transform.scale(0.45,0.45);
        filledCircle(colorMakerHelper([32.0/255.0,65.0/255.0,43.0/255.0,1]));
    popTransform();


    //brown-red ball bottom row
    pushTransform();
        transform.translate(0.90,-0.25);
        transform.scale(0.45,0.45);
        filledCircle(colorMakerHelper([97.0/255.0,40.0/255.0,43.0/255.0,1]));
    popTransform();

    //apricot ball
    pushTransform();
        transform.translate(0.5,-0.3);
        transform.scale(0.45,0.45);
        filledCircle(colorMakerHelper([225.0/255.0,221.0/255.0,183.0/255.0,1]));
    popTransform();

    //yellow ball
    pushTransform();
        transform.translate(0.1,-0.35);
        transform.scale(0.45,0.45);
        filledCircle(colorMakerHelper([232.0/255.0,198.0/255.0,65.0/255.0,1]));
    popTransform();



  popTransform();
}
