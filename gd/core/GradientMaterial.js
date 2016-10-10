///<reference path="../typing.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GD;
(function (GD) {
    var GradientMaterial = (function (_super) {
        __extends(GradientMaterial, _super);
        function GradientMaterial(gradient) {
            _super.call(this, gradient);
        }
        return GradientMaterial;
    })(GD.Material);
    GD.GradientMaterial = GradientMaterial;
})(GD || (GD = {}));
//# sourceMappingURL=GradientMaterial.js.map