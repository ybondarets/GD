///<reference path="../typing.d.ts"/>
var GD;
(function (GD) {
    var Camera = (function () {
        function Camera(position) {
            this.position = position || new GD.Point2(0, 0);
        }
        Camera.prototype.moveTo = function (position) {
            this.position = position;
        };
        Camera.prototype.getPosition = function () {
            return this.position;
        };
        return Camera;
    })();
    GD.Camera = Camera;
})(GD || (GD = {}));
//# sourceMappingURL=Camera.js.map