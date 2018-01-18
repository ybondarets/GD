///<reference path="../typing.d.ts"/>

namespace GD {
    export class Renderer {
        private canvas: HTMLCanvasElement;
        private context: CanvasRenderingContext2D;
        private clearColor: string;
        private rendererCollection: GD.Collection;

        public constructor(canvas: HTMLCanvasElement) {
            this.canvas = canvas;
            this.context = canvas.getContext("2d");
            this.clearColor = "black";
            this.rendererCollection = new GD.Collection();
            this.createBaseRenderer();
        }

        public getCanvas(): HTMLCanvasElement {
            return this.canvas;
        }

        private createBaseRenderer() {
            let renderer = new GD.BaseRenderer();
            renderer.setCanvas(this.canvas);
            this.addRenderer(renderer);
        }

        public addRenderer(renderer: MeshRendererInterface) {
            this.rendererCollection.add(renderer);
        }

        public setClearColor(color: string) {
            this.clearColor = color;
        }

        public render(scene: Scene, camera: Camera) {
            this.clear();
            scene.getMeshes().each(this.renderMesh.bind(this, camera));
        }

        public renderMesh(camera: Camera, mesh: Mesh) {
            this.rendererCollection.each((renderer: MeshRendererInterface) => {
                if (renderer.support(mesh)) {
                    renderer.renderMesh(camera, mesh, this.context);
                }
            });
        }

        private clear() {
            this.context.fillStyle = this.clearColor;
            this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
            this.context.fill();
        }
    }
}
