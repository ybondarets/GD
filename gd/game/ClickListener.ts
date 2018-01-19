namespace Game {
    export class ClickListener {
        private canvas;
        private camera;
        private scene;
        private listeners: Array<any>;

        public constructor(canvas: HTMLCanvasElement) {
            this.canvas = canvas;
            this.listeners = [];
            this.addClickListener();
        }

        public setCamera(camera: GD.Camera) {
            this.camera = camera;
        }

        public setScene(scene: GD.Scene) {
            this.scene = scene;
        }

        public onClick(mesh: GD.Mesh, callback: (e: Object) => any) {
            this.listeners.push({
                mesh: mesh,
                callback: callback
            });
        }

        private addClickListener() {
            this.canvas.addEventListener("click", (e: MouseEvent) => {
                let offesetTot = this.canvas.offsetTop;
                let offesetLeft = this.canvas.offsetLeft;

                let point = new GD.Point2(e.clientX - offesetLeft, e.clientY - offesetTot);
                if (this.camera && this.scene) {
                    let scenePoint = this.applyCameraPosition(point, this.camera);
                    let meshes = this.scene.getMeshes();
                    let clicked = [];
                    meshes.each((mesh: GD.Mesh) => {
                        if (mesh.getGeometry().hasPoint(scenePoint)) {
                           clicked.push(mesh);
                        }
                    });
// debugger;
                    this.applyCallbacks(clicked);
                }
            });
        }

        private applyCallbacks(meshes: Array<GD.Mesh>): void {
            for (let meshIndex in meshes) {
                let mesh = meshes[meshIndex];
                for (let callbackIndex in this.listeners) {
                    if (this.listeners[callbackIndex].mesh === mesh) {
                        this.listeners[callbackIndex].callback();
                    }
                }
            }
        }

        public applyCameraPosition(point: GD.Point2, camera: GD.Camera): GD.Point2 {
            return new GD.Point2(this.applyCameraX(point, camera), this.applyCameraY(point, camera));
        }

        protected applyCameraX(point: GD.Point2, camera: GD.Camera): number {
            return (point.getX() + camera.getPosition().getX()) - this.canvas.width / 2;
        }

        protected applyCameraY(point: GD.Point2, camera: GD.Camera) {
            return - ((point.getY() + camera.getPosition().getY()) - this.canvas.height / 2);
        }
    }
}