///<reference path="../typing.d.ts"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GD;
(function (GD) {
    var RectangleGeometry = /** @class */ (function (_super) {
        __extends(RectangleGeometry, _super);
        function RectangleGeometry(position, width, height) {
            var _this = _super.call(this, position) || this;
            _this.width = width;
            _this.height = height;
            _this.init();
            return _this;
        }
        RectangleGeometry.prototype.getWidth = function () {
            return this.width;
        };
        RectangleGeometry.prototype.getHeight = function () {
            return this.height;
        };
        RectangleGeometry.prototype.init = function () {
            var halfWidth = this.width / 2;
            var halfHeight = this.height / 2;
            this.getVertexes().add(new GD.Point2(this.position.getX() - halfWidth, this.position.getY() - halfHeight));
            this.getVertexes().add(new GD.Point2(this.position.getX() + halfWidth, this.position.getY() - halfHeight));
            this.getVertexes().add(new GD.Point2(this.position.getX() + halfWidth, this.position.getY() + halfHeight));
            this.getVertexes().add(new GD.Point2(this.position.getX() - halfWidth, this.position.getY() + halfHeight));
        };
        return RectangleGeometry;
    }(GD.Geometry));
    GD.RectangleGeometry = RectangleGeometry;
})(GD || (GD = {}));
