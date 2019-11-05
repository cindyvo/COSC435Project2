/**
* Summary of file: This file is used for encapsulating all of
* the scenes and objects drawn on the canvas.
*/

/**
* Description. This is the color palette object that contains
* different colors as its properties
*/
var colorPalette = {
  apricot: [1,1,0.8,1],
  orange: [239.0/255.0,85.0/255.0,45.0/255.0,1],
  darkYellow: [197.0/255.0,156.0/255.0,53.0/255.0,1],
  maroon: [130.0/255.0,51.0/255.0,47.0/255.0,1],
  darkOrange: [204.0/255.0,81.0/255.0,41.0/255.0,1],
  blue: [64.0/255.0,82.0/255.0,157.0/255.0,1],
  red: [167.0/255.0,45.0/255.0,44.0/255.0,1],
  darkGreen: [27.0/255.0,102.0/255.0,69.0/255.0,1],
  darkBlue: [44.0/255.0,52.0/255.0,116.0/255.0,1],
  yellow:  [235.0/255.0,235.0/255.0,10.0/255.0,1],
  black: [0,0,0,1],
  green: [12.0/255.0,115.0/255.0,93.0/255.0,1],
  white: [1,1,1,1],
  darkApricot: [0.89,0.89,0.55,1],
}

//this is a boolean variable used to indicate whether or not the randomized
//checkbox was checked
var checkRandom = false;

/**
* Description. This determines if the randomize checkbox was checked.
* It draws the scene accordingly to whether or not the checkbox was checked.
*/
function doRandomCheckbox() {
  if ( document.getElementById("randomCheckBox").checked ) {
    checkRandom = true;
    drawScene();
  }
  else {
    checkRandom = false;
    drawScene();
  }
}

/**
* Description. This function draws the scene of the canvas
*/
function drawScene() {

  //general variables for holding coordinates that make up the curve
  var startPoint;
  var endPoint;
  var p1;
  var p2;

  pushTransform();

    pushTransform();
    transform.scale(4.0);
    transform.rotate(radians(-135));
     filledCircle(0,0, 0.5, 4, [0,0,0,1, 0,0,0,1, 0,1,0,0.8, 0,1,0,0.7]);
     popTransform();

     drawLightBall([0,0], 1.5, [0.4,1.5], [[0.8,1,0.2,1], [0,0.4,0.15,1], [0,0.4,0.15,1]]);
     drawLightBall([0,0], 1.5, [0.4,-1.5], [[0.8,1,0.2,0.54], [0,0.4,0.15,0.1], [0,0.4,0.15,0.1]]);

    //TOP ROW

    //apricot ball with a dark purple stripe
    pushTransform();

        filledCircle(0, 0.42, 0.33*0.5, 32, colorMakerHelper(32, colorPalette.maroon));

        startPoint = polarToCart([0.5*0.33, 185]);
        endPoint = polarToCart([0.5*0.33, 35]);

        p1 = polarToCart([0.7*0.33, 137]);
        p2 = polarToCart([0.7*0.33, 82]);

        //this is the top half of the curve
        curvedStripes([startPoint[X], startPoint[Y]+0.42], [endPoint[X], endPoint[Y]+0.42],
                      [[p1[X], p1[Y]+0.42], [p2[X], p2[Y]+0.42]], colorPalette.darkApricot, 1, false);

        p1 = polarToCart([0.4*0.33, 250]);
        p2 = polarToCart([0.4*0.33, 350]);

      //this is the bottom half of the curve
      curvedStripes([startPoint[X], startPoint[Y]+0.42], [endPoint[X], endPoint[Y]+0.42],
                    [[p1[X], p1[Y]+0.42], [p2[X], p2[Y]+0.42]], colorPalette.darkApricot, 1, false);

      //this is for the lighting
      pushTransform();
        transform.translate(0,0.42);
        drawLightBall([0,0], 0.5 * 0.33, [-0.05,2.3], [[0.95,0.95,0.95,0.8], [0.8,0.8,0.3,0.3], [0.8,0.8,0.3,0.3]]);
      popTransform();

      //these will define the three white circles on every ball
      if(checkRandom) {
        var randomScale1 = (Math.random() * (0.08 - 0.06) + 0.08)
        filledCircle(0, 0.52, randomScale1*0.33, 50, [1,1,1,1]);

        pushTransform();
        var randomScale2 = (Math.random() * (0.73 - 0.7) + 0.7)
        transform.scale(randomScale2);
        transform.translate(0.05,0.26);
        filledCircle(0, 0.42, randomScale1*0.33, 50, [1,1,1,1]);
        popTransform();

        pushTransform();
        var randomScale3 = (Math.random() * (0.58 - 0.55) + 0.55)
        transform.scale(randomScale3);
        transform.translate(0.1,0.35);
        filledCircle(0, 0.42, randomScale1*0.33, 50, [1,1,1,1]);
        popTransform();

      popTransform();

      } else {
        filledCircle(0, 0.52, 0.08*0.33, 50, [1,1,1,1]);

        pushTransform();
        transform.scale(0.7);
        transform.translate(0.05,0.26);
        filledCircle(0, 0.42, 0.08*0.33, 50, [1,1,1,1]);
        popTransform();

        pushTransform();
        transform.scale(0.55);
        transform.translate(0.1,0.35);
        filledCircle(0, 0.42, 0.08*0.33, 50, [1,1,1,1]);
        popTransform();

      popTransform();

      }


    //SECOND ROW

    //maroon red ball
    pushTransform();

        filledCircle(-0.15, 0.23, 0.5 *0.36, 32, colorMakerHelper(32, [140.0/255.0,45.0/255.0,56.0/255.0,1]));

        //these defines the shading for each ball
        pushTransform();
          transform.translate(-0.15,0.23);
          drawLightBall([0,0], 0.5 * 0.36, [-0.05,2], [[1,.5,.5,0.5], [0.8,0,0,0.6], [0.8,0,0,0.6]]);
        popTransform();

        //these will define the three white circles on every ball
        if (checkRandom) {
          var randomScale1 = (Math.random() * (0.08 - 0.06) + 0.08)
          filledCircle(-0.15, 0.33, 0.08*0.36, 50, [1,1,1,1]);

          pushTransform();
          var randomScale2 = (Math.random() * (0.73 - 0.7) + 0.7)
          transform.scale(0.7);
          transform.translate(-0.02,0.18);
          filledCircle(-0.15, 0.23, randomScale1*0.36, 50, [1,1,1,1]);
          popTransform();

          pushTransform();
          var randomScale3 = (Math.random() * (0.58 - 0.55) + 0.55)
          transform.scale(0.5);
          transform.translate(-0.05,0.26);
          filledCircle(-0.15, 0.23, randomScale1*0.36, 50, [1,1,1,1]);
          popTransform();

        } else {
          filledCircle(-0.15, 0.33, 0.08*0.36, 50, [1,1,1,1]);

          pushTransform();
          transform.scale(0.7);
          transform.translate(-0.02,0.18);
          filledCircle(-0.15, 0.23, 0.08*0.36, 50, [1,1,1,1]);
          popTransform();

          pushTransform();
          transform.scale(0.5);
          transform.translate(-0.05,0.26);
          filledCircle(-0.15, 0.23, 0.08*0.36, 50, [1,1,1,1]);
          popTransform();

        }

    popTransform();

    //light blue ball
    pushTransform();
        filledCircle(0.2, 0.28, 0.5 * 0.36, 32, colorMakerHelper(32, colorPalette.blue));

        //the next set of curved stripes define the circle on the ball

        startPoint = polarToCart([0.5*0.36, 110]);
        endPoint = polarToCart([0.5*0.36, 60]);

        p1 = polarToCart([0.51*0.36, 86]);
        p2 = polarToCart([0.51*0.36, 73]);

        //this is the top half of the curve
        curvedStripes([startPoint[X]+0.2, startPoint[Y]+0.28], [endPoint[X]+0.2, endPoint[Y]+0.28],
                      [[p1[X]+0.2, p1[Y]+0.28], [p2[X]+0.2, p2[Y]+0.28]], colorPalette.apricot, 1, false);

        p1 = polarToCart([0.42*0.36, 150]);
        p2 = polarToCart([0.35*0.36, 25]);

        //this is the bottom half of the curve
        curvedStripes([startPoint[X]+0.2, startPoint[Y]+0.28], [endPoint[X]+0.2, endPoint[Y]+0.28],
                      [[p1[X]+0.2, p1[Y]+0.28], [p2[X]+0.2, p2[Y]+0.28]], colorPalette.apricot, 1, false);


        //the next set of objects represent the number on the circle
        startPoint = polarToCart([0.45*0.36, 105]);
        endPoint = polarToCart([0.45*0.36, 65]);

        p1 = polarToCart([0.452*0.36, 85]);
        p2 = polarToCart([0.452*0.36, 75]);


        curvedStripes([startPoint[X]+0.2, startPoint[Y]+0.28], [endPoint[X]+0.2, endPoint[Y]+0.28],
                      [[p1[X]+0.2, p1[Y]+0.28], [p2[X]+0.2, p2[Y]+0.28]], colorPalette.black, 1, false);

        //these defines the shading for each ball
        pushTransform();
          transform.translate(0.2,0.28);
          drawLightBall([0,0], 0.5 * 0.36, [-0.05,2], [[1,1,1,0.1], [200.0/255.0,200.0/255.0,0.0/255.0,0.2], [200.0/255.0,200.0/255.0,0.0/255.0,0.2]]);
        popTransform();

        //these will define the three white circles on every ball
        if(checkRandom) {

          var randomScale1 = (Math.random() * (0.08 - 0.06) + 0.08);

          filledCircle(0.19, 0.38, randomScale1*0.36, 50, [1,1,1,1]);

          pushTransform();
          var randomScale2 = (Math.random() * (0.73 - 0.70) + 0.7);
          transform.scale(randomScale2);
          transform.translate(0.135,0.095);
          filledCircle(0.19, 0.38, randomScale1*0.36, 50, [1,1,1,1]);
          popTransform();

          pushTransform();
          var randomScale3 = (Math.random() * (0.57 - 0.55) + 0.55);
          transform.scale(randomScale3);
          transform.translate(0.23,0.13);
          filledCircle(0.19, 0.38, randomScale1*0.36, 50, [1,1,1,1]);
          popTransform();

        } else {

          filledCircle(0.19, 0.38, 0.08*0.36, 50, [1,1,1,1]);

          pushTransform();
          transform.scale(0.7);
          transform.translate(0.135,0.095);
          filledCircle(0.19, 0.38, 0.08*0.36, 50, [1,1,1,1]);
          popTransform();

          pushTransform();
          transform.scale(0.55);
          transform.translate(0.23,0.13);
          filledCircle(0.19, 0.38, 0.08*0.36, 50, [1,1,1,1]);
          popTransform();

        }


    popTransform();

    //THIRD  ROW

    //apricot ball with purpleish stripe
    pushTransform();

        filledCircle(-0.35, 0.05, 0.5 * 0.39, 32, colorMakerHelper(32, colorPalette.maroon));

        startPoint = polarToCart([0.5*0.39, 110]);
        endPoint = polarToCart([0.5*0.39, 355]);

        p1 = polarToCart([0.62*0.39, 80]);
        p2 = polarToCart([0.625*0.39, 30]);

        //this is the top half of the curve
        curvedStripes([startPoint[X]-0.35, startPoint[Y]+0.05], [endPoint[X]-0.35, endPoint[Y]+0.05],
                      [[p1[X]-0.35, p1[Y]+0.05], [p2[X]-0.35, p2[Y]+0.05]], colorPalette.apricot, 1, false);

        p1 = polarToCart([0.20*0.39, 135]);
        p2 = polarToCart([0.4*0.39, 280]);

        //this is the bottom half of the curve
        curvedStripes([startPoint[X]-0.35, startPoint[Y]+0.05], [endPoint[X]-0.35, endPoint[Y]+0.05],
                      [[p1[X]-0.35, p1[Y]+0.05], [p2[X]-0.35, p2[Y]+0.05]], colorPalette.apricot, 1, false);

        filledCircle(-0.39, -0.03, 0.18 * 0.39, 32, colorMakerHelper(32, colorPalette.apricot));

        //this is for drawing the number 2
        linedShape([polarToCart([0.1*0.39, 250])[0] -0.35, polarToCart([0.1*0.39, 250])[1] + 0.05,polarToCart([0.23 * 0.39,277])[0] - 0.35, polarToCart([0.23 * 0.39,277])[1] +0.05], colorPalette.black, "gl.LINE_LOOP");
        linedShape([polarToCart([0.20*0.39, 235])[0] -0.35, polarToCart([0.20*0.39, 235])[1] + 0.05,polarToCart([0.23 * 0.39,277])[0] - 0.35, polarToCart([0.23 * 0.39,277])[1] +0.05], colorPalette.black, "gl.LINE_LOOP");

        startPoint = polarToCart([0.3*0.39, 250]);
        endPoint = polarToCart([0.2*0.39, 235]);

        p1 = polarToCart([0.28*0.39, 237]);
        p2 = polarToCart([0.28*0.39, 234]);

        //this is the top half of the curve
        curvedStripes([startPoint[X]-0.35, startPoint[Y]+0.05], [endPoint[X]-0.35, endPoint[Y]+0.05],
                      [[p1[X]-0.35, p1[Y]+0.05], [p2[X]-0.35, p2[Y]+0.05]], colorPalette.black, 1, false);

        //these define the shading for each ball
        pushTransform();
          transform.translate(-0.35,0.05);
          drawLightBall([0,0], 0.5 * 0.39, [-0.1,2], [[1,1,1,0.4], [0.8,0.8,0.8,0.1], [0.8,0.8,0.8,0.1]]);
        popTransform();

        //these will define the three white circles on every ball
        if(checkRandom) {
          var randomScale1 = (Math.random() * (0.08 - 0.06) + 0.08);

          filledCircle(-0.39, 0.15, randomScale1*0.39, 50, [1,1,1,1]);

          pushTransform();
          var randomScale2 = (Math.random() * (0.73 - 0.7) + 0.7);
          transform.scale(randomScale2);
          transform.translate(-0.13,-0.03);
          filledCircle(-0.39, 0.17, randomScale1*0.39, 50, [1,1,1,1]);
          popTransform();

          pushTransform();
          var randomScale3 = (Math.random() * (0.57 - 0.55) + 0.55);
          transform.scale(randomScale3);
          transform.translate(-0.26,-0.07);
          filledCircle(-0.39, 0.17, randomScale1*0.39, 50, [1,1,1,1]);
          popTransform();


        } else {

          filledCircle(-0.39, 0.15, 0.08*0.39, 50, [1,1,1,1]);

          pushTransform();
          transform.scale(0.7);
          transform.translate(-0.13,-0.03);
          filledCircle(-0.39, 0.17, 0.08*0.39, 50, [1,1,1,1]);
          popTransform();

          pushTransform();
          transform.scale(0.55);
          transform.translate(-0.26,-0.07);
          filledCircle(-0.39, 0.17, 0.08*0.39, 50, [1,1,1,1]);
          popTransform();

        }


    popTransform();

    //apricot ball with orange stripe
    pushTransform();

        filledCircle(0.05, 0.10, 0.5 * 0.39, 32, colorMakerHelper(32, colorPalette.orange));
        startPoint = polarToCart([0.5*0.39, 130]);
        endPoint = polarToCart([0.5*0.39, 10]);

        p1 = polarToCart([0.65*0.39, 90]);
        p2 = polarToCart([0.63*0.39, 40]);

        //this is the top half of the curve
        curvedStripes([startPoint[X]+0.05, startPoint[Y]+0.10], [endPoint[X]+0.05, endPoint[Y]+0.10],
                      [[p1[X]+0.05, p1[Y]+0.10], [p2[X]+0.05, p2[Y]+0.10]], colorPalette.apricot, 1, false);

        //these define the shading for each ball
        pushTransform();
          transform.translate(0.05,0.10);
          drawLightBall([0,0], 0.5 * 0.39, [-0.7,2], [[1,1,1,0.5], [0.8,0.8,0.1,0.3], [0.8,0.8,0.1,0.3]]);
        popTransform();

        //these will define the three white circles on every ball
        if(checkRandom) {
          var randomScale1 = (Math.random() * (0.08 - 0.06) + 0.08);

          filledCircle(0.05, 0.19, randomScale1*0.39, 50, [1,1,1,1]);

          pushTransform();
          var randomScale2 = (Math.random() * (0.73 - 0.7) + 0.7);
          transform.scale(randomScale2);
          transform.translate(0.08,0.005);
          filledCircle(0.05, 0.19, randomScale1*0.39, 50, [1,1,1,1]);
          popTransform();

          pushTransform();
          var randomScale3 = (Math.random() * (0.57 - 0.55) + 0.55);
          transform.scale(randomScale3);
          transform.translate(0.13,-0.03);
          filledCircle(0.05, 0.19, 0.08*0.39, 50, [1,1,1,1]);
          popTransform();

        } else {

          filledCircle(0.05, 0.19, 0.08*0.39, 50, [1,1,1,1]);

          pushTransform();
          transform.scale(0.7);
          transform.translate(0.08,0.005);
          filledCircle(0.05, 0.19, 0.08*0.39, 50, [1,1,1,1]);
          popTransform();

          pushTransform();
          transform.scale(0.55);
          transform.translate(0.13,-0.03);
          filledCircle(0.05, 0.19, 0.08*0.39, 50, [1,1,1,1]);
          popTransform();

        }


    popTransform();

    //red ball
    pushTransform();

        filledCircle(0.43, 0.15, 0.5 * 0.39, 32, colorMakerHelper(32, colorPalette.red));

        startPoint = polarToCart([0.5*0.39, 85]);
        endPoint = polarToCart([0.5*0.39, 40]);

        p1 = polarToCart([0.52*0.39, 70]);
        p2 = polarToCart([0.52*0.39, 50]);

        //this is the top half of the curve
        curvedStripes([startPoint[X]+0.43, startPoint[Y]+0.15], [endPoint[X]+0.43, endPoint[Y]+0.15],
                      [[p1[X]+0.43, p1[Y]+0.15], [p2[X]+0.43, p2[Y]+0.15]], colorPalette.apricot, 1, false);

        p1 = polarToCart([0.35*0.39, 80]);
        p2 = polarToCart([0.35*0.39, 45]);

        //this is the top half of the curve
        curvedStripes([startPoint[X]+0.43, startPoint[Y]+0.15], [endPoint[X]+0.43, endPoint[Y]+0.15],
                      [[p1[X]+0.43, p1[Y]+0.15], [p2[X]+0.43, p2[Y]+0.15]], colorPalette.apricot, 1, false);


        //this is for drawing the number

        startPoint = polarToCart([0.4*0.39, 62]);
        endPoint = polarToCart([0.5*0.39, 62]);

        p1 = polarToCart([0.42*0.39, 54]);
        p2 = polarToCart([0.47*0.39, 45]);

        //this is the top half of the curve
        curvedStripes([startPoint[X]+0.43, startPoint[Y]+0.15], [endPoint[X]+0.43, endPoint[Y]+0.15],
                      [[p1[X]+0.43, p1[Y]+0.15], [p2[X]+0.43, p2[Y]+0.15]], colorPalette.black, 1, false, "gl.LINE_LOOP");

        linedShape([polarToCart([0.4*0.39, 62])[0] + 0.43,polarToCart([0.4*0.39, 62])[1] +0.15, polarToCart([0.5*0.39, 62])[0]+ 0.43, polarToCart([0.5*0.39, 62])[1] + 0.15], colorPalette.apricot, "gl.LINE_LOOP")

        //these define the shading for each ball
        pushTransform();
          transform.translate(0.43,0.15);
          drawLightBall([0,0], 0.5 * 0.39, [-0.3,2], [[1,1,1,0.4], [1,0.3,0,0.3], [1,0.3,0,0.3]]);
        popTransform();

        //these will define the three white circles on every ball

        if(checkRandom) {
          var randomScale1 = (Math.random() * (0.08 - 0.06) + 0.08);

          filledCircle(0.44, 0.26, randomScale1*0.39, 50, [1,1,1,1]);

          pushTransform();
          var randomScale2 = (Math.random() * (0.73 - 0.7) + 0.7);
          transform.scale(randomScale2);
          transform.translate(0.21,0.02);
          filledCircle(0.44, 0.26, randomScale1*0.39, 50, [1,1,1,1]);
          popTransform();

          pushTransform();
          var randomScale3 = (Math.random() * (0.6 - 0.55) + 0.55);
          transform.scale(randomScale3);
          transform.translate(0.47,0.03);
          filledCircle(0.44, 0.26, randomScale1*0.39, 50, [1,1,1,1]);
          popTransform();


        } else {

          filledCircle(0.44, 0.26, 0.08*0.39, 50, [1,1,1,1]);

          pushTransform();
          transform.scale(0.75);
          transform.translate(0.21,0.02);
          filledCircle(0.44, 0.26, 0.08*0.39, 50, [1,1,1,1]);
          popTransform();

          pushTransform();
          transform.scale(0.55);
          transform.translate(0.47,0.03);
          filledCircle(0.44, 0.26, 0.08*0.39, 50, [1,1,1,1]);
          popTransform();

        }



    popTransform();

    //FOURTH ROW

    //dark green ball
    pushTransform();

        filledCircle(-0.55, -0.2, 0.5 * 0.42, 32, colorMakerHelper(32, colorPalette.darkGreen));

        startPoint = polarToCart([0.2*0.42, 350]);
        endPoint = polarToCart([0.4*0.42, 0]);

        p1 = polarToCart([0.15*0.42, 30]);
        p2 = polarToCart([0.45*0.42, 35]);

        //this is the left most curve
        curvedStripes([startPoint[X]-0.55, startPoint[Y]-0.2], [endPoint[X]-0.53, endPoint[Y]-0.2],
                      [[p1[X]-0.55, p1[Y]-0.18], [p2[X]-0.53, p2[Y]-0.18]], colorPalette.apricot, 1, false);

        //drawing the number on the ball

        startPoint = polarToCart([0.3*0.42, 0]);
        endPoint = polarToCart([0.33*0.42, 10]);

        p1 = polarToCart([0.312*0.42, 3]);
        p2 = polarToCart([0.324*0.42, 6]);

        //this is the left most curve
        curvedStripes([startPoint[X]-0.55, startPoint[Y]-0.2], [endPoint[X]-0.53, endPoint[Y]-0.2],
                      [[p1[X]-0.55, p1[Y]-0.18], [p2[X]-0.53, p2[Y]-0.18]], colorPalette.black, 1, false, "gl.LINE_LOOP");


        p1 = polarToCart([0.30*0.42, 3]);
        p2 = polarToCart([0.31*0.42, 6]);

        //this is the left most curve
        curvedStripes([startPoint[X]-0.55, startPoint[Y]-0.2], [endPoint[X]-0.53, endPoint[Y]-0.2],
                      [[p1[X]-0.55, p1[Y]-0.18], [p2[X]-0.53, p2[Y]-0.18]], colorPalette.black, 1, false, "gl.LINE_LOOP");

        //these define the shading for each ball
        pushTransform();
          transform.translate(-0.55,-0.2);
          drawLightBall([0,0], 0.5 * 0.42, [-0.3,1.7], [[1,1,1,0.3], [0,0.5,0,0.3], [0,0.5,0,0.3]]);
        popTransform();

        //these will define the three white circles on every ball
        if(checkRandom) {
          var randomScale1 = (Math.random() * (0.08 - 0.06) + 0.08);

          filledCircle(-0.55, -0.1, randomScale1*0.42, 50, [1,1,1,1]);

          pushTransform();
          var randomScale2 = (Math.random() * (0.73 - 0.7) + 0.7);
          transform.scale(randomScale2);
          transform.translate(-0.13,-0.12);
          filledCircle(-0.55, -0.1,randomScale1*0.42, 50, [1,1,1,1]);
          popTransform();

          pushTransform();
          var randomScale3 = (Math.random() * (0.57 - 0.55) + 0.55);
          transform.scale(randomScale3);
          transform.translate(-0.4,-0.3);
          filledCircle(-0.55, -0.1, randomScale1*0.42, 50, [1,1,1,1]);
          popTransform();

        } else {

          filledCircle(-0.55, -0.1, 0.08*0.42, 50, [1,1,1,1]);

          pushTransform();
          transform.scale(0.75);
          transform.translate(-0.13,-0.12);
          filledCircle(-0.55, -0.1, 0.08*0.42, 50, [1,1,1,1]);
          popTransform();

          pushTransform();
          transform.scale(0.55);
          transform.translate(-0.4,-0.3);
          filledCircle(-0.55, -0.1, 0.08*0.42, 50, [1,1,1,1]);
          popTransform();

        }


    popTransform();

    //dark blue stripe ball
    pushTransform();

        filledCircle(-0.14, -0.15, 0.5 * 0.42, 32, colorMakerHelper(32, colorPalette.darkBlue));


         startPoint = polarToCart([0.5*0.42, 135]);
         endPoint = polarToCart([0.5*0.42, 215]);

         p1 = polarToCart([0.6*0.42, 160]);
         p2 = polarToCart([0.6*0.42, 185]);

         //this is the left most curve
         curvedStripes([startPoint[X]-0.14, startPoint[Y]-0.15], [endPoint[X]-0.14, endPoint[Y]-0.15],
                       [[p1[X]-0.14, p1[Y]-0.15], [p2[X]-0.14, p2[Y]-0.15]], [1,1,0.8,1], 1, false);


        startPoint = polarToCart([0.5*0.42, 135]);
        endPoint = polarToCart([0.5*0.42, 215]);

        p1 = polarToCart([0.25*0.42, 120]);
        p2 = polarToCart([0.5*0.42, 270]);

        //this is the right counterpart to the leftmost curve
         curvedStripes([startPoint[X]-0.14, startPoint[Y]-0.15], [endPoint[X]-0.14, endPoint[Y]-0.15],
                       [[p1[X]-0.14, p1[Y]-0.15], [p2[X]-0.14, p2[Y]-0.15]], [1,1,0.8,1], 1, false);

       startPoint = polarToCart([0.5*0.42, 80]);
       endPoint = polarToCart([0.5*0.42, 315]);

       p1 = polarToCart([0.7*0.42, 40]);
       p2 = polarToCart([0.66*0.42, 340]);

       //this is the right most curve
        curvedStripes([startPoint[X]-0.14, startPoint[Y]-0.15], [endPoint[X]-0.14, endPoint[Y]-0.15],
                      [[p1[X]-0.14, p1[Y]-0.15], [p2[X]-0.14, p2[Y]-0.15]], [1,1,0.8,1], 1, false);


        p1 = polarToCart([0.5*0.42, 30]);
        p2 = polarToCart([0.4*0.42, 355]);

        //this is the only blue curve to cut out the apricot color
         curvedStripes([startPoint[X]-0.14, startPoint[Y]-0.15], [endPoint[X]-0.14, endPoint[Y]-0.15],
                       [[p1[X]-0.14, p1[Y]-0.15], [p2[X]-0.14, p2[Y]-0.15]], [44.0/255.0,52.0/255.0,116.0/255.0,1], 1, false);

        //drawing the circle within the blue stripe
        startPoint = polarToCart([0.5*0.42, 110]);
        endPoint = polarToCart([0.4*0.42, 70]);

        p1 = polarToCart([0.52*0.42, 90]);
        p2 = polarToCart([0.52*0.42, 70]);

        curvedStripes([startPoint[X]-0.14, startPoint[Y]-0.15], [endPoint[X]-0.14, endPoint[Y]-0.15],
                     [[p1[X]-0.14, p1[Y]-0.15], [p2[X]-0.14, p2[Y]-0.15]], colorPalette.apricot, 1, false);

         p1 = polarToCart([0.5*0.42, 135]);
         p2 = polarToCart([0.2*0.42, 160]);

       curvedStripes([startPoint[X]-0.14, startPoint[Y]-0.15], [endPoint[X]-0.14, endPoint[Y]-0.15],
                    [[p1[X]-0.14, p1[Y]-0.15], [p2[X]-0.14, p2[Y]-0.15]], colorPalette.apricot, 1, false);

      //drawing the number 10s
      startPoint = polarToCart([0.42*0.42, 120]);
      endPoint = polarToCart([0.48*0.42, 90]);

      p1 = polarToCart([0.455*0.42, 110]);
      p2 = polarToCart([0.465*0.42, 100]);

      curvedStripes([startPoint[X]-0.14, startPoint[Y]-0.15], [endPoint[X]-0.14, endPoint[Y]-0.15],
                   [[p1[X]-0.14, p1[Y]-0.15], [p2[X]-0.14, p2[Y]-0.15]], colorPalette.black, 1, false);

      pushTransform();
      transform.rotate(radians(350)/10);
      transform.xshear(0.4);
      transform.scale(0.55);

      transform.translate(-0.045,0.275);
      linedShape(createCircleCoords(-0.14,-0.15, 0.15 *0.42, 20), colorPalette.black, "gl.LINE_LOOP");
      popTransform();

      pushTransform();
      transform.rotate(radians(350)/10);
      transform.xshear(0.4);
      transform.scale(0.54);

      transform.translate(-0.045,0.275);
      linedShape(createCircleCoords(-0.14,-0.15, 0.15 *0.42, 20), colorPalette.black, "gl.LINE_LOOP");
      popTransform();

      //these define the shading for each ball
      pushTransform();
        transform.translate(-0.145,-0.15);
        drawLightBall([0,0], 0.515 * 0.42, [-0.3,1.7], [[1,1,1,0.4], [0.9,0.9,0.7,0.3], [0.9,0.9,0.7,0.3]]);
      popTransform();

      //these will define the three white circles on every ball
      if(checkRandom) {
        var randomScale1 = (Math.random() * (0.08 - 0.06) + 0.06);
        filledCircle(-0.14, -0.03, randomScale1*0.42, 50, [1,1,1,1]);

        pushTransform();
        var randomScale2 = (Math.random() * (0.73 - 0.7) + 0.7);

        transform.scale(randomScale2);
        transform.translate(0,-0.09);
        filledCircle(-0.14, -0.03, randomScale1*0.42, 50, [1,1,1,1]);
        popTransform();

        pushTransform();
        var randomScale3 = (Math.random() * (0.57 - 0.55) + 0.55);
        transform.scale(randomScale3);
        transform.translate(-0.03,-0.235);
        filledCircle(-0.14, -0.03, randomScale1*0.42, 50, [1,1,1,1]);
        popTransform();

      } else {
        filledCircle(-0.14, -0.03, 0.08*0.42, 50, [1,1,1,1]);

        pushTransform();
        transform.scale(0.7);
        transform.translate(0,-0.09);
        filledCircle(-0.14, -0.03, 0.08*0.42, 50, [1,1,1,1]);
        popTransform();

        pushTransform();
        transform.scale(0.55);
        transform.translate(-0.03,-0.235);
        filledCircle(-0.14, -0.03, 0.08*0.42, 50, [1,1,1,1]);
        popTransform();

      }




    popTransform();

    //orange ball
    pushTransform();
        filledCircle(0.26, -0.10, 0.5 *0.42, 32, colorMakerHelper(32, [228.0/255.0,143.0/255.0,51.0/255.0,1]));

        //these define the shading for each ball
        pushTransform();
          transform.translate(0.26,-0.10);
          drawLightBall([0,0], 0.5 * 0.42, [-0.3,1.7], [[1,1,1,0.3], [228.0/255.0,143.0/255.0,31.0/255.0,0.7], [228.0/255.0,143.0/255.0,31.0/255.0,0.7]]);
        popTransform();

        //these will define the three white circles on every ball
        if(checkRandom) {
          var randomScale1 = (Math.random() * (0.08 - 0.06) + 0.06);

          filledCircle(0.28, 0, randomScale1*0.42, 50, [1,1,1,1]);

          pushTransform();
          var randomScale2 = (Math.random() * (0.73 - 0.7) + 0.7);
          transform.scale(randomScale2);
          transform.translate(0.15,-0.07);
          filledCircle(0.28, 0, randomScale1*0.42, 50, [1,1,1,1]);
          popTransform();

          pushTransform();
          var randomScale3 = (Math.random() * (0.57 - 0.55) + 0.55);
          transform.scale(randomScale3);
          transform.translate(0.33,-0.2);
          filledCircle(0.28, 0, randomScale1*0.42, 50, [1,1,1,1]);

        } else {

          filledCircle(0.28, 0, 0.08*0.42, 50, [1,1,1,1]);

          pushTransform();
          transform.scale(0.75);
          transform.translate(0.15,-0.07);
          filledCircle(0.28, 0, 0.08*0.42, 50, [1,1,1,1]);
          popTransform();

          pushTransform();
          transform.scale(0.55);
          transform.translate(0.33,-0.2);
          filledCircle(0.28, 0, 0.08*0.42, 50, [1,1,1,1]);

        }

    popTransform();

    //apricot ball with yellow stripe
    pushTransform();

        filledCircle(0.67, -0.05, 0.5 * 0.42, 32, colorMakerHelper(32, colorPalette.darkYellow));

        startPoint = polarToCart([0.5*0.42, 180]);
        endPoint = polarToCart([0.5*0.42, 50]);

        p1 = polarToCart([0.67*0.42, 135]);
        p2 = polarToCart([0.67*0.42, 90]);

        //this is the top half of the curve
         curvedStripes([startPoint[X]+0.67, startPoint[Y]-0.05], [endPoint[X]+0.67, endPoint[Y]-0.05],
                       [[p1[X]+0.67, p1[Y]-0.05], [p2[X]+0.67, p2[Y]-0.05]], colorPalette.apricot, 1, false);

         p1 = polarToCart([0.33*0.42, 210]);
         p2 = polarToCart([0.33*0.42, 340]);

       //this is the bottom half of the curve
        curvedStripes([startPoint[X]+0.67, startPoint[Y]-0.05], [endPoint[X]+0.67, endPoint[Y]-0.05],
                      [[p1[X]+0.67, p1[Y]-0.05], [p2[X]+0.67, p2[Y]-0.05]], colorPalette.apricot, 1, false);

        //these define the shading for each ball
        pushTransform();
          transform.translate(0.67,-0.05);
          drawLightBall([0,0], 0.5 * 0.42, [-0.3,1], [[1,1,1,0.4], [1,1,1,0.1], [1,1,1,0.1]]);
        popTransform();

      //these will define the three white circles on every ball
      if(checkRandom) {
        var randomScale1 = (Math.random() * (0.08 - 0.06) + 0.06);

        filledCircle(0.64,0.07, randomScale1*0.42, 50, [1,1,1,1]);

        pushTransform();
        var randomScale2 = (Math.random() * (0.73 - 0.7) + 0.73);

        transform.scale(randomScale2);
        transform.translate(0.28,-0.03);
        filledCircle(0.64,0.07, randomScale1*0.42, 50, [1,1,1,1]);
        popTransform();

        pushTransform();
        var randomScale3 = (Math.random() * (0.57 - 0.55) + 0.55);
        transform.scale(randomScale3);
        transform.translate(0.65,-0.1);
        filledCircle(0.64,0.07, randomScale1*0.42, 50, [1,1,1,1]);

        popTransform();

      } else {

        filledCircle(0.64,0.07, 0.08*0.42, 50, [1,1,1,1]);

        pushTransform();
        transform.scale(0.75);
        transform.translate(0.28,-0.03);
        filledCircle(0.64,0.07, 0.08*0.42, 50, [1,1,1,1]);
        popTransform();

        pushTransform();
        transform.scale(0.55);
        transform.translate(0.65,-0.1);
        filledCircle(0.64,0.07, 0.08*0.42, 50, [1,1,1,1]);

        popTransform();

      }

    popTransform();


//BOTTOM ROW

    //black ball bottom row
    pushTransform();

      newShadow(-0.5, -0.63, 0.38);

        filledCircle(-0.8, -0.45, 0.5 * 0.45, 32, colorMakerHelper(32, colorPalette.black));


        startPoint = polarToCart([0.5*0.45, 155]);
        endPoint = polarToCart([0.5*0.45, 100]);

        p1 = polarToCart([0.52*0.45, 140]);
        p2 = polarToCart([0.52*0.45, 115]);

        //this is the left part of the curve
        curvedStripes([startPoint[X]-0.8, startPoint[Y]-0.45], [endPoint[X]-0.8, endPoint[Y]-0.45],
                      [[p1[X]-0.8, p1[Y]-0.45], [p2[X]-0.8, p2[Y]-0.45]], colorPalette.apricot, 1, false);

        p1 = polarToCart([0.2*0.45, 180]);
        p2 = polarToCart([0.25*0.45, 70]);

        //this is the right part of the curve
        curvedStripes([startPoint[X]-0.8, startPoint[Y]-0.45], [endPoint[X]-0.8, endPoint[Y]-0.45],
                      [[p1[X]-0.8, p1[Y]-0.45], [p2[X]-0.8, p2[Y]-0.45]], colorPalette.apricot, 1, false);


        //these two lines make the bottom part of the 8
        //two lined shapes are used here to make it look darker
        linedShape(createCircleCoords(-0.9,-0.317, 0.1 *0.32, 50), colorPalette.black, "gl.LINE_LOOP");
        linedShape(createCircleCoords(-0.9,-0.317, 0.1 *0.28, 50), colorPalette.black, "gl.LINE_LOOP");


        //this defines the top part of the 8
        //two curved shapes are used here to make it look darker
        startPoint = polarToCart([0.5*0.45, 132]);
        endPoint = polarToCart([0.5*0.45, 120]);

        p1 = polarToCart([0.415*0.45, 128]);
        p2 = polarToCart([0.415*0.45, 124]);

        curvedStripes([startPoint[X]-0.8, startPoint[Y]-0.45], [endPoint[X]-0.8, endPoint[Y]-0.45],
                      [[p1[X]-0.8, p1[Y]-0.45], [p2[X]-0.8, p2[Y]-0.45]], colorPalette.black, 1, false, "gl.LINE_LOOP");

        startPoint = polarToCart([0.5*0.45, 132]);
        endPoint = polarToCart([0.5*0.45, 120]);

        p1 = polarToCart([0.43*0.45, 128]);
        p2 = polarToCart([0.43*0.45, 124]);

        curvedStripes([startPoint[X]-0.8, startPoint[Y]-0.45], [endPoint[X]-0.8, endPoint[Y]-0.45],
                      [[p1[X]-0.8, p1[Y]-0.45], [p2[X]-0.8, p2[Y]-0.45]], colorPalette.black, 1, false, "gl.LINE_LOOP");

      //these define the shading for each ball
      pushTransform();
        transform.translate(-0.8,-0.45);
        drawLightBall([0,0], 0.5 * 0.45, [0.5,0.5], [[1,1,1,0.35], [1,1,1,0.1], [1,1,1,0.1]]);
      popTransform();

      //these will define the three white circles on every ball
      if(checkRandom) {
        var randomScale1 = (Math.random() * (0.08 - 0.06) + 0.06);
        filledCircle(-0.82,-0.35, randomScale1*0.45, 50, [1,1,1,1]);

        pushTransform();
        var randomScale2 = (Math.random() * (0.73 - 0.7) + 0.7);
        transform.scale(randomScale2);
        transform.translate(-0.28,-0.24);
        filledCircle(-0.82,-0.35, randomScale1*0.45, 50, [1,1,1,1]);
        popTransform();

        pushTransform();
        var randomScale3 = (Math.random() * (0.57 - 0.55) + 0.55);
        transform.scale(randomScale3);
        transform.translate(-0.55,-0.52);
        filledCircle(-0.82,-0.35, randomScale1*0.45, 50, [1,1,1,1]);
        popTransform();

      } else {

        filledCircle(-0.82,-0.35, 0.08*0.45, 50, [1,1,1,1]);

        pushTransform();
        transform.scale(0.7);
        transform.translate(-0.28,-0.24);
        filledCircle(-0.82,-0.35, 0.08*0.45, 50, [1,1,1,1]);
        popTransform();

        pushTransform();
        var randomScale3 = (Math.random() * (0.57 - 0.55) + 0.55);
        transform.scale(0.55);
        transform.translate(-0.55,-0.52);
        filledCircle(-0.82,-0.35, 0.08*0.45, 50, [1,1,1,1]);
        popTransform();

      }


    popTransform();


    //apricot ball with green stripe
    pushTransform();

          newShadow(-0.25, -0.6, 0.38);
          filledCircle(-0.35, -0.40, 0.5*0.45, 32, colorMakerHelper(32, colorPalette.green));

          startPoint = polarToCart([0.5*0.45, 180]);
          endPoint = polarToCart([0.5*0.45, 70]);

          //this defines the left apricot part
          p1 = polarToCart([0.6*0.45, 145]);
          p2 = polarToCart([0.6*0.45, 105]);
          curvedStripes([startPoint[X]-0.35, startPoint[Y]-0.40], [endPoint[X]-0.35, endPoint[Y]-0.40],
                        [[p1[X]-0.35, p1[Y]-0.40], [p2[X]-0.35, p2[Y]-0.40]], colorPalette.apricot, 1, false);

          //this is the green curve drawn over the apricot part to make it look curved
          p1 = polarToCart([0.47*0.45, 145]);
          p2 = polarToCart([0.5*0.45, 100]);
          curvedStripes([startPoint[X]-0.35, startPoint[Y]-0.40], [endPoint[X]-0.35, endPoint[Y]-0.40],
                        [[p1[X]-0.35, p1[Y]-0.40], [p2[X]-0.35, p2[Y]-0.40]], colorPalette.green, 1, false);


          //this defines the top most part of the apricot curve at the bottom
          startPoint = polarToCart([0.5*0.45, 245]);
          endPoint = polarToCart([0.5*0.45, 20]);
          p1 = polarToCart([0.1*0.45, 155]);
          p2 = polarToCart([0.4*0.45, 40]);

          curvedStripes([startPoint[X]-0.35, startPoint[Y]-0.40], [endPoint[X]-0.35, endPoint[Y]-0.40],
                        [[p1[X]-0.35, p1[Y]-0.40], [p2[X]-0.35, p2[Y]-0.40]], colorPalette.apricot, 1, false);


          //this defines the bottom most part of the apricot curve at the bottom
          p1 = polarToCart([0.65*0.45, 312-20]);
          p2 = polarToCart([0.65*0.45, 312+20]);

          curvedStripes([startPoint[X]-0.35, startPoint[Y]-0.40], [endPoint[X]-0.35, endPoint[Y]-0.40],
                        [[p1[X]-0.35, p1[Y]-0.40], [p2[X]-0.35, p2[Y]-0.40]], colorPalette.apricot, 1, false);


          //this is the curve that simulates a shadow at the bottom
          p1 = polarToCart([0.6*0.45, 312-20]);
          p2 = polarToCart([0.6*0.45, 312+20]);
          startPoint = polarToCart([0.5*0.45, 260]);
          endPoint = polarToCart([0.5*0.45, 340]);

          curvedStripes([startPoint[X]-0.35, startPoint[Y]-0.40], [endPoint[X]-0.35, endPoint[Y]-0.40],
                        [[p1[X]-0.35, p1[Y]-0.40], [p2[X]-0.35, p2[Y]-0.40]], [0,0,0,0.1], 1, false);



          //these points are used to define the circle at the very bottom left
          startPoint = polarToCart([0.5*0.45, 190]);
          endPoint = polarToCart([0.5*0.45, 230]);

          p1 = polarToCart([0.51*0.45, 200]);
          p2 = polarToCart([0.51*0.45, 220]);

          //this is the bottom most part of the curve
          curvedStripes([startPoint[X]-0.35, startPoint[Y]-0.4], [endPoint[X]-0.35, endPoint[Y]-0.4],
                        [[p1[X]-0.35, p1[Y]-0.4], [p2[X]-0.35, p2[Y]-0.4]], colorPalette.apricot, 1, false);

          p1 = polarToCart([0.43*0.45, 190]);
          p2 = polarToCart([0.43*0.45, 240]);

          //this is the top most part of the curve
          curvedStripes([startPoint[X]-0.35, startPoint[Y]-0.4], [endPoint[X]-0.35, endPoint[Y]-0.4],
                        [[p1[X]-0.35, p1[Y]-0.4], [p2[X]-0.35, p2[Y]-0.4]], colorPalette.apricot, 1, false);


          //these points are used to define the number on the circle

          startPoint = polarToCart([0.5*0.45, 200]);
          endPoint = polarToCart([0.5*0.45, 220]);

          p1 = polarToCart([0.45*0.45, 207]);
          p2 = polarToCart([0.45*0.45, 214]);

          curvedStripes([startPoint[X]-0.35, startPoint[Y]-0.4], [endPoint[X]-0.35, endPoint[Y]-0.4],
                        [[p1[X]-0.35, p1[Y]-0.4], [p2[X]-0.35, p2[Y]-0.4]], colorPalette.black, 1, false, "gl.LINE_LOOP");

          p1 = polarToCart([0.46*0.45, 207]);
          p2 = polarToCart([0.46*0.45, 214]);

          curvedStripes([startPoint[X]-0.35, startPoint[Y]-0.4], [endPoint[X]-0.35, endPoint[Y]-0.4],
                        [[p1[X]-0.35, p1[Y]-0.4], [p2[X]-0.35, p2[Y]-0.4]], colorPalette.black, 1, false, "gl.LINE_LOOP");

        //these are the three white circles on each ball
        if(checkRandom) {
          var randomScale1 = (Math.random() * (0.08 - 0.06) + 0.06);

          filledCircle(-0.35,-0.27, randomScale1*0.45, 50, [1,1,1,1]);

          pushTransform();
          var randomScale2 = (Math.random() * (0.73 - 0.7) + 0.7);
          transform.scale(0.75);
          transform.translate(-0.07,-0.17);
          filledCircle(-0.35,-0.27, randomScale1*0.45, 50, [1,1,1,1]);
          popTransform();

          pushTransform();
          var randomScale3 = (Math.random() * (0.73 - 0.7) + 0755);

          transform.scale(randomScale3);
          transform.translate(-0.05,-0.25);
          filledCircle(-0.35,-0.27, randomScale1*0.45, 50, [1,1,1,1]);
          popTransform();


        } else {

          filledCircle(-0.35,-0.27, 0.07*0.45, 50, [1,1,1,1]);

          pushTransform();
          transform.scale(0.75);
          transform.translate(-0.07,-0.17);
          filledCircle(-0.35,-0.27, 0.07*0.45, 50, [1,1,1,1]);
          popTransform();

          pushTransform();
          transform.scale(0.72);
          transform.translate(-0.05,-0.25);
          filledCircle(-0.35,-0.27, 0.07*0.45, 50, [1,1,1,1]);
          popTransform();

        }


        //this is used for the lighting
        pushTransform();
          transform.translate(-0.35,-0.4);
          drawLightBall([0,0], 0.225, [-0.05,2.0], [[1,1,1,0.3], [0.5,0.5,0.5,0.2], [0.5,0.5,0.5,0.2]]);
        popTransform();

    popTransform();


    //brown-red ball bottom row
    pushTransform();

        newShadow(0.46, -0.445, 0.4);

        filledCircle(0.90, -0.25, 0.5 * 0.45, 32, colorMakerHelper(32, [97.0/255.0,40.0/255.0,43.0/255.0,1]));

        startPoint = polarToCart([0.5*0.45, 260]);
        endPoint = polarToCart([0.5*0.45, 300]);

        p1 = polarToCart([0.51*0.45, 270]);
        p2 = polarToCart([0.51*0.45, 285]);

        //this is the left part of the "curve"
        curvedStripes([startPoint[X] + 0.9, startPoint[Y]-0.25], [endPoint[X] + 0.9, endPoint[Y]-0.25],
                      [[p1[X]+0.9, p1[Y]-0.25], [p2[X]+0.9, p2[Y]-0.25]], colorPalette.apricot, 1, false);

        p1 = polarToCart([0.45*0.45, 265]);
        p2 = polarToCart([0.4*0.45, 290]);

        //this is the right part of the "curve"
        curvedStripes([startPoint[X] + 0.9, startPoint[Y]-0.25], [endPoint[X] + 0.9, endPoint[Y]-0.25],
                      [[p1[X]+0.9, p1[Y]-0.25], [p2[X]+0.9, p2[Y]-0.25]], colorPalette.apricot, 1, false);

        //this is used to define the number at the bottom
        startPoint = polarToCart([0.5*0.45, 275]);
        endPoint = polarToCart([0.5*0.45, 285]);

        p1 = polarToCart([0.49*0.45, 278]);
        p2 = polarToCart([0.49*0.45, 281]);

        //this is the left part of the "curve"
        curvedStripes([startPoint[X] + 0.9, startPoint[Y]-0.25], [endPoint[X] + 0.9, endPoint[Y]-0.25],
                      [[p1[X]+0.9, p1[Y]-0.25], [p2[X]+0.9, p2[Y]-0.25]], colorPalette.black, 1, false, "gl.LINE_LOOP");

        //these define the shading for each ball
        pushTransform();
          transform.translate(0.9,-0.25);
          drawLightBall([0,0], 0.5 * 0.45, [0.2,1.3], [[1,1,1,0.35], [97.0/255.0,40.0/255.0,43.0/255.0,0.2], [97.0/255.0,40.0/255.0,43.0/255.0,0.2]]);
        popTransform();

        //these will define the three white circles on every ball

        if(checkRandom) {
          var randomScale1 = (Math.random() * (0.08 - 0.06) + 0.06);

          filledCircle(0.89,-0.15, randomScale1*0.45, 50, [1,1,1,1]);

          pushTransform();
          var randomScale2 = (Math.random() * (0.76 - 0.73) + 0.73);
          transform.scale(randomScale2);
          transform.translate(0.35,-0.142);
          filledCircle(0.89,-0.15, randomScale1*0.45, 50, [1,1,1,1]);
          popTransform();

          pushTransform();
          var randomScale3 = (Math.random() * (0.61 - 0.59) + 0.59);
          transform.scale(randomScale3);
          transform.translate(0.70,-0.32);
          filledCircle(0.89,-0.15, randomScale1*0.45, 50, [1,1,1,1]);
          popTransform();


        } else {

          filledCircle(0.89,-0.15, 0.08*0.45, 50, [1,1,1,1]);

          pushTransform();
          transform.scale(0.75);
          transform.translate(0.35,-0.142);
          filledCircle(0.89,-0.15, 0.08*0.45, 50, [1,1,1,1]);
          popTransform();

          pushTransform();
          transform.scale(0.6);
          transform.translate(0.70,-0.32);
          filledCircle(0.89,-0.15, 0.08*0.45, 50, [1,1,1,1]);
          popTransform();

        }


    popTransform();

    //apricot ball, with regular orange stripe
    pushTransform();

    newShadow(0.22, -0.52, 0.38);

        filledCircle(0.5, -0.3, 0.5 * 0.45, 32, colorMakerHelper(32, colorPalette.orange));
        startPoint = polarToCart([0.5*0.45, 180]);
        endPoint = polarToCart([0.5*0.45, 80]);


        p1 = polarToCart([0.59*0.45, 150]);
        p2 = polarToCart([0.59*0.45, 110]);

        //this is the left part of the "curve"
        curvedStripes([startPoint[X] + 0.5, startPoint[Y]-0.3], [endPoint[X] + 0.5, endPoint[Y]-0.3],
                      [[p1[X]+0.5, p1[Y]-0.3], [p2[X]+0.5, p2[Y]-0.3]], colorPalette.apricot, 1, false);

        p1 = polarToCart([0.8*0.45, 245]);
        p2 = polarToCart([0.7*0.45, 20]);


        //this is the right part of the "curve"
        curvedStripes([startPoint[X] + 0.5, startPoint[Y]-0.3], [endPoint[X] + 0.5, endPoint[Y]-0.3],
                      [[p1[X]+0.5, p1[Y]-0.3], [p2[X]+0.5, p2[Y]-0.3]], colorPalette.apricot, 1, false);

    //this is the beginning of the circle inside drawing
      startPoint = polarToCart([0.5*0.45, 220]);
      endPoint = polarToCart([0.5*0.45, 260]);

      p1 = polarToCart([0.51*0.45, 230]);
      p2 = polarToCart([0.51*0.45, 250]);

      //this is the left part of the "curve" of the circle
      curvedStripes([startPoint[X] + 0.5, startPoint[Y]-0.3], [endPoint[X] + 0.5, endPoint[Y]-0.3],
                    [[p1[X]+0.5, p1[Y]-0.3], [p2[X]+0.5, p2[Y]-0.3]], colorPalette.apricot, 1, false);

      p1 = polarToCart([0.4*0.45, 230]);
      p2 = polarToCart([0.4*0.45, 245]);

      //this is the right part of the "curve" of the circle
      curvedStripes([startPoint[X] + 0.5, startPoint[Y]-0.3], [endPoint[X] + 0.5, endPoint[Y]-0.3],
                    [[p1[X]+0.5, p1[Y]-0.3], [p2[X]+0.5, p2[Y]-0.3]], colorPalette.apricot, 1, false);


      //this is used to define the number at the bottom
      startPoint = polarToCart([0.5*0.45, 230]);
      endPoint = polarToCart([0.5*0.45, 250]);

      p1 = polarToCart([0.45*0.45, 230]);
      p2 = polarToCart([0.45*0.45, 245]);


      curvedStripes([startPoint[X] + 0.5, startPoint[Y]-0.3], [endPoint[X] + 0.5, endPoint[Y]-0.3],
                    [[p1[X]+0.5, p1[Y]-0.3], [p2[X]+0.5, p2[Y]-0.3]], colorPalette.black, 1, false, "gl.LINE_LOOP");

     p1 = polarToCart([0.46*0.45, 230]);
     p2 = polarToCart([0.46*0.45, 245]);

      curvedStripes([startPoint[X] + 0.5, startPoint[Y]-0.3], [endPoint[X] + 0.5, endPoint[Y]-0.3],
                   [[p1[X]+0.5, p1[Y]-0.3], [p2[X]+0.5, p2[Y]-0.3]], colorPalette.black, 1, false, "gl.LINE_LOOP");

     //these define the shading for each ball
     pushTransform();
       transform.translate(0.5,-0.3);
       drawLightBall([0,0], 0.5 * 0.45, [0.2,1.3], [[1,1,1,0.2], [1,1,1,0.1], [1,1,1,0.1]]);
     popTransform();

     //these will define the three white circles on every ball
     if(checkRandom) {
       var randomScale1 = (Math.random() * (0.08 - 0.06) + 0.06);
       filledCircle(0.48,-0.17, randomScale1*0.45, 50, [1,1,1,1]);

       pushTransform();
       var randomScale2 = (Math.random() * (0.75 - 0.72) + 0.72);
       transform.scale(randomScale2);
       transform.translate(0.22,-0.12);
       filledCircle(0.48,-0.17, randomScale1*0.45, 50, [1,1,1,1]);
       popTransform();

       pushTransform();
       var randomScale3 = (Math.random() * (0.57 - 0.55) + 0.55);
       transform.scale(randomScale3);
       transform.translate(0.5,-0.35);
       filledCircle(0.48,-0.17, randomScale1*0.45, 50, [1,1,1,1]);
       popTransform();


     } else {
       filledCircle(0.48,-0.17, 0.08*0.45, 50, [1,1,1,1]);

       pushTransform();
       transform.scale(0.75);
       transform.translate(0.22,-0.12);
       filledCircle(0.48,-0.17, 0.08*0.45, 50, [1,1,1,1]);
       popTransform();

       pushTransform();
       transform.scale(0.55);
       transform.translate(0.5,-0.35);
       filledCircle(0.48,-0.17, 0.08*0.45, 50, [1,1,1,1]);
       popTransform();

     }


    popTransform();

    //mostly yellow ball
    pushTransform();

        newShadow(0, -0.54, 0.38);
        filledCircle(0.1, -0.35, 0.5 * 0.45, 32, colorMakerHelper(32,colorPalette.yellow));

        startPoint = polarToCart([0.5*0.45, 195]);
        endPoint = polarToCart([0.5*0.45, 150]);

        p1 = polarToCart([0.53*0.45, 180]);
        p2 = polarToCart([0.53*0.45, 165]);

        //this is the left part of the "curve"
        curvedStripes([startPoint[X] + 0.1, startPoint[Y]-0.35], [endPoint[X] + 0.1, endPoint[Y]-0.35],
                      [[p1[X]+0.1, p1[Y]-0.35], [p2[X]+0.1, p2[Y]-0.35]], colorPalette.apricot, 1, false);

        p1 = polarToCart([0.25*0.45, 220]);
        p2 = polarToCart([0.30*0.45, 120]);

        //this is the right part of the "curve"
        curvedStripes([startPoint[X] + 0.1, startPoint[Y]-0.35], [endPoint[X] + 0.1, endPoint[Y]-0.35],
                      [[p1[X]+0.1, p1[Y]-0.35], [p2[X]+0.1, p2[Y]-0.35]], colorPalette.apricot, 1, false);

        //this is for drawing the number one
        startPoint = polarToCart([0.43*0.45, 150]);
        endPoint = polarToCart([0.51*0.45, 180]);

        p1 = polarToCart([0.47*0.45, 165]);
        p2 = polarToCart([0.49*0.45, 175]);

        curvedStripes([startPoint[X] + 0.1, startPoint[Y]-0.35], [endPoint[X] + 0.1, endPoint[Y]-0.35],
                      [[p1[X]+0.1, p1[Y]-0.35], [p2[X]+0.1, p2[Y]-0.35]], colorPalette.black, 1, false, "gl.LINE_LOOP");

        //these define the shading for each ball
        pushTransform();
          transform.translate(0.1,-0.35);
          drawLightBall([0,0], 0.5 * 0.45, [0.2,1.3], [[1,1,1,1], [0.7,0.7,0.7,0.1], [0.7,0.7,0.7,0.1]]);
        popTransform();

        //these will define the three white circles on every ball
        if(checkRandom) {
          var randomScale1 = (Math.random() * (0.08 - 0.06) + 0.06);

          filledCircle(0.1,-0.25, randomScale1*0.45, 50, [1,1,1,1]);

          pushTransform();
          var randomScale2 = (Math.random() * (0.75 - 0.73) + 0.73);

          transform.scale(randomScale2);
          transform.translate(0.12,-0.15);
          filledCircle(0.1,-0.25, randomScale1*0.45, 50, [1,1,1,1]);
          popTransform();

          pushTransform();
          var randomScale3 = (Math.random() * (0.57 - 0.55) + 0.55);
          transform.scale(randomScale3);
          transform.translate(0.28,-0.40);
          filledCircle(0.1,-0.25, randomScale1*0.45, 50, [1,1,1,1]);
          popTransform();

        } else {
          filledCircle(0.1,-0.25, 0.08*0.45, 50, [1,1,1,1]);

          pushTransform();
          transform.scale(0.75);
          transform.translate(0.12,-0.15);
          filledCircle(0.1,-0.25, 0.08*0.45, 50, [1,1,1,1]);
          popTransform();

          pushTransform();
          transform.scale(0.55);
          transform.translate(0.28,-0.40);
          filledCircle(0.1,-0.25, 0.08*0.45, 50, [1,1,1,1]);
          popTransform();

        }


    popTransform();


  popTransform();

}
