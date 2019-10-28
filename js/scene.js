



function drawScene() {

  pushTransform();

    pushTransform();
    transform.scale(4.0);
    transform.rotate(radians(-135));
     filledSquare(0,0, 0.5, [0,0,0,1, 0,0,0,1, 0,1,0,0.8, 0,1,0,0.7]);
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
        filledCircle(0, 0, 0.5, 32, colorMakerHelper(32, [244.0/255.0,222.0/255.0,130.0/255.0,1]));
    popTransform();

    //FOURTH BOTTOM ROW

    //maroon red ball
    pushTransform();
        transform.translate(-0.15,0.23);
        transform.scale(0.36,0.36);
        filledCircle(0, 0, 0.5, 32, colorMakerHelper(32, [140.0/255.0,45.0/255.0,56.0/255.0,1]));
    popTransform();

    //light blue
    pushTransform();
        transform.translate(0.2,0.28);
        transform.scale(0.36,0.36);
        filledCircle(0, 0, 0.5, 32, colorMakerHelper(32, [64.0/255.0,82.0/255.0,157.0/255.0,1]));
    popTransform();

    //THIRD BOTTOM ROW

    //purple ball
    pushTransform();
        transform.translate(-0.35,0.05);
        transform.scale(0.39,0.39);
        filledCircle(0, 0, 0.5, 32, colorMakerHelper(32, [77.0/255.0,29.0/255.0,31.0/255.0,1]));
    popTransform();

    //dark orange ball
    pushTransform();
        transform.translate(0.05,0.10);
        transform.scale(0.39,0.39);
        filledCircle(0, 0, 0.5, 32, colorMakerHelper(32, [204.0/255.0,81.0/255.0,41.0/255.0,1]));
    popTransform();

    //redish ball
    pushTransform();
        transform.translate(0.43,0.15);
        transform.scale(0.39,0.39);
        filledCircle(0, 0, 0.5, 32, colorMakerHelper(32, [167.0/255.0,45.0/255.0,44.0/255.0,1]));
    popTransform();

    //SECOND BOTTOM ROW

    //dark gray ball
    pushTransform();
        transform.translate(-0.55,-0.20);
        transform.scale(0.42,0.42);
        filledCircle(0, 0, 0.5, 32, colorMakerHelper(32, [22.0/255.0,48.0/255.0,39.0/255.0,1]));
    popTransform();

    //dark blue ball
    pushTransform();
        transform.translate(-0.14,-0.15);
        transform.scale(0.42,0.42);
        filledCircle(0, 0, 0.5, 32, colorMakerHelper(32, [44.0/255.0,52.0/255.0,116.0/255.0,1]));
    popTransform();

    //orange ball
    pushTransform();
        transform.translate(0.26,-0.10);
        transform.scale(0.42,0.42);
        filledCircle(0, 0, 0.5, 32, colorMakerHelper(32, [228.0/255.0,143.0/255.0,51.0/255.0,1]));
    popTransform();

    //dark yellow ball
    pushTransform();
        transform.translate(0.67,-0.05);
        transform.scale(0.42,0.42);
        filledCircle(0, 0, 0.5, 32, colorMakerHelper(32, [197.0/255.0,156.0/255.0,53.0/255.0,1]));
    popTransform();

//BOTTOM ROW

    //black ball bottom row
    pushTransform();
        transform.translate(-0.8,-0.45);
        transform.scale(0.45,0.45);
        filledCircle(0, 0, 0.5, 32, colorMakerHelper(32, [0,0,0,1]));
    popTransform();


    //dark green ball
    pushTransform();
        //transform.translate(-0.35,-0.40);
        pushTransform();
          //transform.scale(0.45,0.45);

          //TAKE NOTE CINDY, FOR PRECISE MATH I UNDID THE TRANSLATE,
          //THEN DID THE SCALE IN THE RADIUS, R = 0.5, SCALE = 0.45
          filledCircle(-0.35, -0.40, 0.5*0.45, 32, colorMakerHelper(32, [32.0/255.0,65.0/255.0,43.0/255.0,1]));
          //since I can now make it at the center of the circle, you can use
          //cartesian coordinates to get the start point of the circles
          //[r, theta]
          //creates two polar coordinates at the circles radius, converts them
          //to polar, then subtracts the original circles center so that
          //they line up with the circle, aka translate the point
          var startPoint = polarToCart([0.5*0.45, 180]);
          var endPoint = polarToCart([0.5*0.45, 70]);
          //180+70   /2  = 125. 125+-20 = 145 and 105, makes a circular curve
          var p1 = polarToCart([0.6*0.45, 145]);
          var p2 = polarToCart([0.6*0.45, 105]);
          curvedStripes([startPoint[X]-0.35, startPoint[Y]-0.40], [endPoint[X]-0.35, endPoint[Y]-0.40],
                        [[p1[X]-0.35, p1[Y]-0.40], [p2[X]-0.35, p2[Y]-0.40]], [1,1,0.8,1], 1, true);

          //start and endpoints are the same, but the curve changes to be shallow,
          //hence p1 and p2 have a shorter radius
          //also this is the GREEN PIECE THAT I"M PUTTING OVER THE WHITE ONE
          p1 = polarToCart([0.47*0.45, 145]);
          p2 = polarToCart([0.5*0.45, 100]);
          curvedStripes([startPoint[X]-0.35, startPoint[Y]-0.40], [endPoint[X]-0.35, endPoint[Y]-0.40],
                        [[p1[X]-0.35, p1[Y]-0.40], [p2[X]-0.35, p2[Y]-0.40]], [32.0/255.0,65.0/255.0,43.0/255.0,1], 1, false);
        popTransform();

    popTransform();


    //brown-red ball bottom row
    pushTransform();
        transform.translate(0.90,-0.25);
        transform.scale(0.45,0.45);
        filledCircle(0, 0, 0.5, 32, colorMakerHelper(32, [97.0/255.0,40.0/255.0,43.0/255.0,1]));
    popTransform();

    //apricot ball
    pushTransform();
        transform.translate(0.5,-0.3);
        transform.scale(0.45,0.45);
        filledCircle(0, 0, 0.5, 32, colorMakerHelper(32, [225.0/255.0,221.0/255.0,183.0/255.0,1]));
    popTransform();

    //yellow ball
    pushTransform();
        transform.translate(0.1,-0.35);
        transform.scale(0.45,0.45);
        filledCircle(0, 0, 0.5, 32, colorMakerHelper(32, [232.0/255.0,198.0/255.0,65.0/255.0,1]));
    popTransform();





  popTransform();
}
