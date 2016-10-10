///<reference path="../typing.d.ts"/>
var GD;
(function (GD) {
    var Material = (function () {
        function Material(style) {
            this.style = style;
        }
        Material.prototype.getStyle = function () {
            return this.style;
        };
        Material.prototype.setStyle = function (style) {
            this.style = style;
        };
        return Material;
    })();
    GD.Material = Material;
})(GD || (GD = {}));
//# sourceMappingURL=Material.js.map