/**
 *  Description. Create a 2D affine transform object representing the transform from (x,y)
 *  to ( a*x + c*y + e, b*x + d*y + e ).  If exactly one parameter is passed
 *  and it is of type AffineTransform2D, then a copy is made of the paramter.
 *  Otherwise, parameters should be numeric.  Missing parameter values are
 *  taken from the identity transform.  If no parameters are passed, the
 *  result is the identity transform.
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 * @param {number} e
 * @param {number} f
 */
function AffineTransform2D(a, b, c, d, e, f) {
    if (arguments.length == 1 && (a instanceof AffineTransform2D)){
        this.a = a.a;
        this.b = a.b;
        this.c = a.c;
        this.d = a.d;
        this.e = a.e;
        this.f = a.f;
    }
    else {
        this.a = (a === undefined)? 1 : a;
        this.b = (b === undefined)? 0 : b;
        this.c = (c === undefined)? 0 : c;
        this.d = (d === undefined)? 1 : d;
        this.e = (e === undefined)? 0 : e;
        this.f = (f === undefined)? 0 : f;
    }
}

/**
 *  Description. Returns an array of 9 numbers representing this transform as a 3-by-3 matrix,
 *  in column-major order.
 */
AffineTransform2D.prototype.getMat3 = function() {
    return [
        this.a, this.b, 0,
        this.c, this.d, 0,
        this.e, this.f, 1
    ];
}

/**
 * Description. Multiply this transform on the right by a rotation transform.  Angle is given in radians.
 * Replaces this transform with the modified transform, and returns the modified transform.
 * @params {number} radians
 */
AffineTransform2D.prototype.rotate = function(radians) {
    var sin = Math.sin(radians);
    var cos = Math.cos(radians);
    var temp = this.a*cos + this.c*sin;
    this.c = this.a*(-sin) + this.c*cos;
    this.a = temp;
    temp = this.b*cos + this.d*sin;
    this.d = this.b*(-sin) + this.d*cos;
    this.b = temp;
    return this;
}

/**
 * Description. Multiply this transform on the right by a translation transform.
 * Replaces this transform with the modified transform, and returns the modified transform.
 *
 * @param {number} dx Amount to offset the x.
 * @param {number} dy Amount to offset the y.
 */
AffineTransform2D.prototype.translate = function(dx, dy) {
    this.e += this.a*dx + this.c*dy;
    this.f += this.b*dx + this.d*dy;
    return this;
}

/**
 * Description. Multiply this transform on the right by a scaling transform. If only one parameter is
 * passed, does a uniform scaling.
 * Replaces this transform with the modified transform, and returns the modified transform.
 *
 * @param {number} sx Amount to scale the x
 * @param {number} sy Amount to scale the y
 */
AffineTransform2D.prototype.scale = function(sx,sy) {
    if (sy === undefined) {
        sy = sx;
    }
    this.a *= sx;
    this.b *= sx;
    this.c *= sy;
    this.d *= sy;
    return this;
}

/**
* Description. Function shifts the x value by a certain factor
*
* @param {number} shear Amount to shift the x
*/
AffineTransform2D.prototype.xshear = function( /* Number */ shear) {
   this.a += this.a*shear;
   return this;
}
