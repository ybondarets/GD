namespace GD {
    export interface MeshRendererInterface {
        renderMesh(camera: Camera, mesh: Mesh, context: CanvasRenderingContext2D);
        support(mesh: Mesh): boolean;
    }
}
