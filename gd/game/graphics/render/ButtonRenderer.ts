namespace Game {
    export class ButtonRenderer extends GD.BaseRenderer {
        public support(mesh: Game.ButtonMesh) {
            return !mesh.isBase() && mesh.isButtonMesh();
        }

        public renderMesh(camera: GD.Camera, mesh: Game.ButtonMesh, context: CanvasRenderingContext2D) {
            let material = mesh.getMaterial(); // Game.TextMaterial
            let geometry = mesh.getGeometry();

            let style = material.getStyle();

            context.font = style.fontSize + "px " + style.fontName;
            context.textAlign = style.align;
            context.textBaseline = style.baseLine;
            let position = this.applyCameraPosition(geometry.getPosition(), camera);
            if (style.renderMode == Game.RenderMode.FILL) {
                context.fillStyle = style.color.getHex();
                context.fillText(material.getText(), position.getX(), position.getY());
            } else {
                context.strokeStyle = style.color.getHex();
                context.strokeText(material.getText(), position.getX(), position.getY());
            }
        }
    }
}
