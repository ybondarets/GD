///<reference path="../typing.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GD;
(function (GD) {
    var ColorMaterial = (function (_super) {
        __extends(ColorMaterial, _super);
        function ColorMaterial(color) {
            _super.call(this, color);
        }
        ColorMaterial.prototype.getStyle = function () {
            return this.style.getHex();
        };
        ColorMaterial.prototype.getColor = function () {
            return this.style;
        };
        return ColorMaterial;
    })(GD.Material);
    GD.ColorMaterial = ColorMaterial;
})(GD || (GD = {}));
//# sourceMappingURL=ColorMaterial.js.map