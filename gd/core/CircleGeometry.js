///<reference path="../typing.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GD;
(function (GD) {
    var CircleGeometry = (function (_super) {
        __extends(CircleGeometry, _super);
        function CircleGeometry(position, radius, vertexesCount) {
            _super.call(this, position);
            this.vertexesCount = vertexesCount;
            this.radius = radius;
            this.init();
        }
        CircleGeometry.prototype.getRadius = function () {
            return this.radius;
        };
        CircleGeometry.prototype.init = function () {
            var angleByVertex = 360 / this.vertexesCount;
            for (var currentAngle = 0; currentAngle <= 360; currentAngle += angleByVertex) {
                var y = this.radius * Math.sin(GD.MathUtils.degToRad(currentAngle));
                var x = this.radius * Math.cos(GD.MathUtils.degToRad(currentAngle));
                var point = new GD.Point2(this.position.getX() + x, this.position.getY() + y);
                this.vertexes.add(point);
            }
        };
        return CircleGeometry;
    })(GD.Geometry);
    GD.CircleGeometry = CircleGeometry;
})(GD || (GD = {}));
//# sourceMappingURL=CircleGeometry.js.map