namespace Game {
    export class ButtonMesh extends GD.Mesh {
        public isBase(): boolean {
            return false;
        }

        public isButtonMesh(): boolean {
            return true;
        }

        public getMaterial(): Game.TextMaterial|GD.Material {
            return super.getMaterial();
        }
    }
}
