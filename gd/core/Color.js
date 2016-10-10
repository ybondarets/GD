///<reference path="../typing.d.ts"/>
var GD;
(function (GD) {
    var Color = (function () {
        function Color(r, g, b) {
            this.r = r;
            this.g = g;
            this.b = b;
            this.rDirection = Math.random() > 0.5 ? 1 : -1;
            this.gDirection = Math.random() > 0.5 ? 1 : -1;
            this.bDirection = Math.random() > 0.5 ? 1 : -1;
        }
        Color.prototype.getR = function () {
            return this.r;
        };
        Color.prototype.getG = function () {
            return this.g;
        };
        Color.prototype.getB = function () {
            return this.b;
        };
        Color.prototype.setR = function (value) {
            this.r = value;
        };
        Color.prototype.setG = function (value) {
            this.g = value;
        };
        Color.prototype.setB = function (value) {
            this.b = value;
        };
        Color.prototype.getHex = function () {
            return "#" + this.intToHex(this.r) + this.intToHex(this.g) + this.intToHex(this.b);
        };
        Color.prototype.intToHex = function (num) {
            return num.toString(16);
        };
        Color.prototype.getRgb = function () {
            return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
        };
        return Color;
    })();
    GD.Color = Color;
})(GD || (GD = {}));
//# sourceMappingURL=Color.js.map