///<reference path="../typing.d.ts"/>
var GD;
(function (GD) {
    var Scene = (function () {
        function Scene() {
            this.meshes = new GD.Collection();
        }
        Scene.prototype.add = function (mesh) {
            this.meshes.add(mesh);
        };
        Scene.prototype.getMeshes = function () {
            return this.meshes;
        };
        return Scene;
    })();
    GD.Scene = Scene;
})(GD || (GD = {}));
//# sourceMappingURL=Scene.js.map