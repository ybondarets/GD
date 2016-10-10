///<reference path="../typing.d.ts"/>

namespace GD {
    export class Renderer {
        private canvas: HTMLCanvasElement;
        private context: CanvasRenderingContext2D;
        private clearColor: string;

        public constructor(canvas: HTMLCanvasElement) {
            this.canvas = canvas;
            this.context = canvas.getContext("2d");
            this.clearColor = "black";
        }

        public setClearColor(color: string) {
            this.clearColor = color;
        }

        public render(scene: Scene, camera: Camera) {
            this.clear();
            scene.getMeshes().each(this.renderMesh.bind(this, camera));
        }

        private renderMesh(camera: Camera, mesh: Mesh) {
            let material = mesh.getMaterial();
            let geometry = mesh.getGeometry();
            let context = this.context;

            context.fillStyle = material.getStyle();
            context.beginPath();
            geometry.getVertexes().each(function(point: Point2, index: number) {
                let realPoint = this.applyCameraPosition(point, camera);
                if (index === 0) {
                    context.moveTo(realPoint.getX(), realPoint.getY());
                } else {
                    context.lineTo(realPoint.getX(), realPoint.getY());
                }
            }.bind(this));
            context.closePath();
            context.fill();
        }

        private applyCameraPosition(point: Point2, camera: Camera): Point2 {
            return new Point2(this.applyCameraX(point, camera), this.applyCameraY(point, camera));
        }

        private applyCameraX(point: Point2, camera: Camera): number {
            return (point.getX() + camera.getPosition().getX()) + this.canvas.width / 2;
        }

        private applyCameraY(point: Point2, camera: Camera) {
            return -(point.getY() + camera.getPosition().getY()) + this.canvas.height / 2;
        }


        private clear() {
            this.context.fillStyle = this.clearColor;
            this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
            this.context.fill();
        }
    }
}
