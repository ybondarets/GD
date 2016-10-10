///<reference path="../typing.d.ts"/>
var GD;
(function (GD) {
    var Renderer = (function () {
        function Renderer(canvas) {
            this.canvas = canvas;
            this.context = canvas.getContext("2d");
            this.clearColor = "black";
        }
        Renderer.prototype.setClearColor = function (color) {
            this.clearColor = color;
        };
        Renderer.prototype.render = function (scene, camera) {
            this.clear();
            scene.getMeshes().each(this.renderMesh.bind(this, camera));
        };
        Renderer.prototype.renderMesh = function (camera, mesh) {
            var material = mesh.getMaterial();
            var geometry = mesh.getGeometry();
            var context = this.context;
            context.fillStyle = material.getStyle();
            context.beginPath();
            geometry.getVertexes().each(function (point, index) {
                var realPoint = this.applyCameraPosition(point, camera);
                if (index === 0) {
                    context.moveTo(realPoint.getX(), realPoint.getY());
                }
                else {
                    context.lineTo(realPoint.getX(), realPoint.getY());
                }
            }.bind(this));
            context.closePath();
            context.fill();
        };
        Renderer.prototype.applyCameraPosition = function (point, camera) {
            return new GD.Point2(this.applyCameraX(point, camera), this.applyCameraY(point, camera));
        };
        Renderer.prototype.applyCameraX = function (point, camera) {
            return (point.getX() + camera.getPosition().getX()) + this.canvas.width / 2;
        };
        Renderer.prototype.applyCameraY = function (point, camera) {
            return -(point.getY() + camera.getPosition().getY()) + this.canvas.height / 2;
        };
        Renderer.prototype.clear = function () {
            this.context.fillStyle = this.clearColor;
            this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
            this.context.fill();
        };
        return Renderer;
    })();
    GD.Renderer = Renderer;
})(GD || (GD = {}));
//# sourceMappingURL=Renderer.js.map