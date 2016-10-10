///<reference path="../typing.d.ts"/>
var GD;
(function (GD) {
    var Point2 = (function () {
        function Point2(x, y) {
            this.x = x;
            this.y = y;
        }
        Point2.prototype.getX = function () {
            return this.x;
        };
        Point2.prototype.setX = function (x) {
            this.x = x;
        };
        Point2.prototype.getY = function () {
            return this.y;
        };
        Point2.prototype.setY = function (y) {
            this.y = y;
        };
        return Point2;
    })();
    GD.Point2 = Point2;
})(GD || (GD = {}));
//# sourceMappingURL=Point2.js.map