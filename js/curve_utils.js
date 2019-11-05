/**
* Summary of the file: The code is based on
* https://webglfundamentals.org/webgl/lessons/webgl-3d-geometry-lathe.html
* This file is used to help determine the coordinates of the Bezier curves.
*/

//constant variables used for better readability
const X = 0;
const Y = 1;

/**
* Description. Determines a point on a bezier curve
*
* @param {array} points an array of coordinates
* @param {number} offset how much to offset the points
* @param {number} t a number used to add or subtract in this formula
*/

function getPointOnBezierCurve(points, offset, t) {

   var invT = (1 - t);
   var invT2 = invT * invT;
   var invT3 = invT * invT * invT;

   var p_x =  points[offset]   * invT3 +
          3 * points[offset+2] * invT2 * t +
          3 * points[offset+4] * invT  * t * t +
              points[offset+6]         * t * t * t;

   var p_y =  points[offset+1] * invT3 +
          3 * points[offset+3] * invT2 * t +
          3 * points[offset+5] * invT  * t * t +
              points[offset+7]         * t * t * t;

   return [p_x, p_y];
}

/**
* Description. Returns an array of coordinates defined on a bezier curve
*
* @param {array} points an array of coordinates
* @param {number} offset how much to offset the points
* @param {number} numPoints desired number of points
*/
function getPointsOnBezierCurve(points, offset, numPoints) {

   var curve_pts = [];

   for (var i = 0; i < numPoints; ++i) {
      var t = i / (numPoints - 1);
      var aPt = getPointOnBezierCurve(points, offset, t);

      curve_pts.push(aPt[X], aPt[Y]);
   }

   return curve_pts;
}
