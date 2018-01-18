namespace GD {
    export class BaseRenderer implements MeshRendererInterface {
        protected canvas: HTMLCanvasElement;

        public setCanvas(canvas: HTMLCanvasElement) {
            this.canvas = canvas;
        }

        public support(mesh: Mesh): boolean {
            return mesh.isBase();
        }

        public renderMesh(camera: Camera, mesh: Mesh, context: CanvasRenderingContext2D) {
            let material = mesh.getMaterial();
            let geometry = mesh.getGeometry();

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

        protected applyCameraPosition(point: Point2, camera: Camera): Point2 {
            return new Point2(this.applyCameraX(point, camera), this.applyCameraY(point, camera));
        }

        protected applyCameraX(point: Point2, camera: Camera): number {
            return (point.getX() + camera.getPosition().getX()) + this.canvas.width / 2;
        }

        protected applyCameraY(point: Point2, camera: Camera) {
            return -(point.getY() + camera.getPosition().getY()) + this.canvas.height / 2;
        }
    }
}
