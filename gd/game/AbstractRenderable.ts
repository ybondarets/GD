namespace Game {
    export class AbstractRenderable implements Game.Renderable {
        private camera: GD.Camera;
        private scene: GD.Scene;

        public constructor() {
            this.createScene();
            this.createCamera()
        }

        private createScene() {
            this.scene = new GD.Scene();
        }

        private createCamera() {
            this.camera = new GD.Camera();
        }

        public getScene(): GD.Scene {
            return this.scene;
        }

        getCamera(): GD.Camera {
            return this.camera;
        }
    }
}
