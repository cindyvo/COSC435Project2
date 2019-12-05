# COSC435Project2 - Cindy Vo

The painting that I recreated was Balls (2006) by Chen Wenbo. The art book reference was Chinese Art at the Crossroads: Between Past and Future, Between East and West - edited by Wu Hung.

At first glance, there was not anything that I particularly randomized; however, I added a feature that allows for the slight randomization of the size and positioning (not too much randomization because then the balls would be really out of place) of the three white circles on each ball.

What I did to recreate this picture was using first using basic shapes such as circles (for the balls) and a square (for the background). This was handled by my filledCircle function, which is similar to other filled shape functions that we had used in lab. Then I transformed and colored these balls accordingly. Then I drew the "stripes" by adding curves of the apricot color over the other colors. This is handled by my curvedStripes function. Then, I drew the numbers of each of the balls, and this is either drawn by using curves or drawn by defining the points and using gl.LINE_LOOP. Lastly, integrating Leo's code from his first presentation, I implemented the shading and lighting aspect of the feature, using newShadow and drawLightBall.

As for the set up of my code, index.html has the canvas and the painting rendering. The js folder has all of the javascript files that implements all of the drawing of the shapes. The images folder has all of the screenshots of the original painting, and two of my painterly renderings.

This project came with a lot of challenges and difficulties. What I am proud of this project was being able to overcome these challenges by breaking components of the painting down and working on things one by one. I was able to carefully plan where my balls were supposed to be as well as where the numbers, balls, and stripes. The creation of the stripes was my most favorite piece to work on because I was able to apply concepts we learned in class and in lab and use them to create clean curves and stripes.

Some things that I could improve on is the coloring of the balls to make it more accurate to the picture. It is hard to figure out the exact colors to make that happen. Additionally, I could improve on the positioning and drawing of the numbers on the balls. However, again, it is incredibly difficult to find the exact location and numbers, even using polar coordinates. Furthermore, some parts of the drawScene could be better abstracted, in that I could reduce redundancy in some parts of the code; however, because there were many variations between these parts, it was difficult to figure out how to do so.

Some of this code were inspired by previous code that we have been exposed to. The curve_utils code given to us in lab by Professor Fourquet was pivotal in creating these stripes and numbers. The AffineTransform2D.js code from previous labs also helped us a lot with the implementation of the transformations. The shading code that was inspired by Leo's presentation also helped with imitating the lighting in this picture. Also I was inspired by Allegra's color palette code and used that in my code base because I feel that it is an effective abstraction of using colors.

**Screenshot of original picture:**
![Original](/images/Balls_ChenWenbo_Original_Pic.PNG)


**Screenshot of painterly rendering:**
![Image](/images/Canvas_Rendering_1.PNG)
