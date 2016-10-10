///<reference path="../typing.d.ts"/>
var GD;
(function (GD) {
    var Ray = (function () {
        function Ray(point, angle) {
            this.point = point;
            this.angle = angle;
            this.pointDistance = 100;
            this.definePointOnRay();
        }
        Ray.prototype.getPointOnRay = function () {
            return this.pointOnRay;
        };
        Ray.prototype.definePointOnRay = function () {
            var x = this.point.getX() + this.pointDistance;
            var y = this.point.getY() + this.getCathetus(x, this.angle);
            this.pointOnRay = new GD.Point2(x, y);
        };
        Ray.prototype.getCathetus = function (side, angle) {
            return this.pointDistance + Math.tan(GD.MathUtils.degToRad(angle));
        };
        Ray.prototype.getPoint = function () {
            return this.point;
        };
        Ray.prototype.getAngle = function () {
            return this.angle;
        };
        return Ray;
    })();
    GD.Ray = Ray;
})(GD || (GD = {}));
//# sourceMappingURL=Ray.js.map