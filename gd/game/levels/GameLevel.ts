namespace Game {
    export class GameLevel extends Game.AbstractRenderable {
        public data: Array<GD.Mesh>;

        public constructor() {
            super();
            this.data = [];
        }

        public shuffle() {
            let j, x, i;
            for (i = this.data.length - 1; i >= 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = this.data[i];
                this.data[i] = this.data[j];
                this.data[j] = x;

                this.updatePosition(i, this.data[i]);
            }
        }

        public updatePosition(index: number, mesh: GD.Mesh) {
            let position = mesh.getGeometry().getPosition();
            let x = -300 + 300 * ((index % 3));
            let y = 300 - 300 * (Math.floor(index / 3));

            console.log(index, x, y);
            position.setX(x);
            position.setY(y);
        }

        public update() {
            this.getScene().getMeshes().reset(this.data);
        }
    }
}
