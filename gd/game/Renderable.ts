namespace Game {
    export interface Renderable {
        getScene(): GD.Scene;
        getCamera(): GD.Camera;
    }
}