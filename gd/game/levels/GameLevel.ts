namespace Game {
    export class GameLevel extends Game.AbstractRenderable {
        private data: Array<Object>;

        public constructor() {
            super();
            this.data = [
                1, 2, 3, 4, 5, 6, 7, 8, 9
            ];
        }

    }
}
