///<reference path="../typing.d.ts"/>
var GD;
(function (GD) {
    var Segment = (function () {
        function Segment(point1, point2) {
            this.point1 = point1;
            this.point2 = point2;
        }
        Segment.prototype.getFirstPoint = function () {
            return this.point1;
        };
        Segment.prototype.getSecondPoint = function () {
            return this.point2;
        };
        return Segment;
    })();
    GD.Segment = Segment;
})(GD || (GD = {}));
//# sourceMappingURL=Segment.js.map