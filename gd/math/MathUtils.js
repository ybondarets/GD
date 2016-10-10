///<reference path="../typing.d.ts"/>
var GD;
(function (GD) {
    var MathUtils = (function () {
        function MathUtils() {
        }
        MathUtils.degToRad = function (deg) {
            return deg / 180 * Math.PI;
        };
        MathUtils.radToDeg = function (rad) {
            return rad / Math.PI * 180;
        };
        return MathUtils;
    })();
    GD.MathUtils = MathUtils;
})(GD || (GD = {}));
//# sourceMappingURL=MathUtils.js.map