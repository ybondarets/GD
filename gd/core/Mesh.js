///<reference path="../typing.d.ts"/>
var GD;
(function (GD) {
    var Mesh = (function () {
        function Mesh(geometry, material) {
            this.geometry = geometry;
            this.material = material;
        }
        Mesh.prototype.getGeometry = function () {
            return this.geometry;
        };
        Mesh.prototype.getMaterial = function () {
            return this.material;
        };
        return Mesh;
    })();
    GD.Mesh = Mesh;
})(GD || (GD = {}));
//# sourceMappingURL=Mesh.js.map