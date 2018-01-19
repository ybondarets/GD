namespace Game {
    export class Invasion {
        private renderer: GD.Renderer;
        private active: Game.AbstractRenderable;
        private menu: Game.AbstractRenderable;
        private listener: Game.ClickListener;
        private level: number;
        private levels: Array<Game.GameLevel>;

        public constructor(renderer: GD.Renderer) {
            this.renderer = renderer;
            this.active = null;
            this.level = 0;
            this.levels = [];
        }

        public init() {
            this.createRenderers();
            this.createLevels();
            this.animate();
            this.createMenu();
            this.hideLoader();
            this.showMenu();
            this.addListeners();
        }

        private addListeners() {
            document.addEventListener('keydown', (e: KeyboardEvent) => {
                if (this.active !== this.menu) {
                    switch(e.keyCode) {
                        case 40:
                            //down
                            break;
                        case 38:
                            //up
                            break;
                        case 39:
                            //right
                            break;
                        case 37:
                            //left
                            break;
                    }
                }
            });
        }

        public setClickListener(listener: Game.ClickListener) {
            this.listener = listener;
        }

        private startGame() {
            console.log("Start game");
            let level = this.getLevel();
            level.shuffle();
            level.update();
            this.setActive(level);
        }

        private getLevel(): Game.GameLevel {
            return this.levels[this.level];
        }

        private createLevels() {
            this.levels = [];
            let levelsData = this.getLevelsData();
            for (let index in levelsData) {
                let data = levelsData[index];
                this.levels.push(this.generateLevel(data));
            }
        }

        private generateLevel(data: Object): Game.GameLevel {
            let result = new Game.GameLevel();

            let meshData = data["meshes"];

            for (let index in meshData) {
                result.data.push(this.generateMesh(result, meshData[index]));
            }

            return result;
        }

        private generateMesh(level: Game.GameLevel, data: Object) {
            let geometry = new GD.RectangleGeometry(new GD.Point2(data.x, data.y), data.width, data.height);
            let material = new Game.TextMaterial(new GD.Color(255, 255, 255), data.text);
            let mesh = new Game.ButtonMesh(geometry, material);
            level.getScene().add(mesh);

            return mesh;
        }



        private getLevelsData(): Array<Object> {
            return [{
                "meshes": [
                    {
                        "x": -300,
                        "y": 300,
                        "width": 300,
                        "height": 300,
                        "r": 100,
                        "g": 100,
                        "b": 100,
                        "text": 1
                    },
                    {
                        "x": 0,
                        "y": 300,
                        "width": 300,
                        "height": 300,
                        "r": 100,
                        "g": 0,
                        "b": 0,
                        "text": 2
                    },
                    {
                        "x": 300,
                        "y": 300,
                        "width": 300,
                        "height": 300,
                        "r": 100,
                        "g": 100,
                        "b": 0,
                        "text": 3
                    },


                    {
                        "x": -300,
                        "y": 0,
                        "width": 300,
                        "height": 300,
                        "r": 0,
                        "g": 100,
                        "b": 100,
                        "text": 4
                    },
                    {
                        "x": 0,
                        "y": 0,
                        "width": 300,
                        "height": 300,
                        "r": 100,
                        "g": 0,
                        "b": 100,
                        "text": 5
                    },
                    {
                        "x": 300,
                        "y": 0,
                        "width": 300,
                        "height": 300,
                        "r": 0,
                        "g": 100,
                        "b": 0,
                        "text": 6
                    },


                    {
                        "x": -300,
                        "y": -300,
                        "width": 300,
                        "height": 300,
                        "r": 100,
                        "g": 100,
                        "b": 100,
                        "text": 7
                    },
                    {
                        "x": 0,
                        "y": -300,
                        "width": 300,
                        "height": 300,
                        "r": 100,
                        "g": 0,
                        "b": 0,
                        "text": 8
                    },
                    {
                        "x": 300,
                        "y": -300,
                        "width": 300,
                        "height": 300,
                        "r": 100,
                        "g": 0,
                        "b": 0,
                        "text": "empty"
                    }
                ]
            }];
        }

        private createRenderers() {
            let buttonRenderer = new ButtonRenderer();
            buttonRenderer.setCanvas(this.renderer.getCanvas());
            this.renderer.addRenderer(buttonRenderer);
        }

        private animate() {
            this.render();

            requestAnimationFrame(() => {
                this.animate();
            });
        }

        private render() {
            if (this.active) {
                this.renderer.render(this.active.getScene(), this.active.getCamera());
            }
        }

        private createMenu() {
            this.menu = new Game.Menu(this.listener);
            this.menu.onPlay(() => {
                this.startGame();
            });
        }

        public showMenu() {
            this.setActive(this.menu);
            console.log('Show menu');
        }

        public hideMenu() {
            this.setActive(null);
            console.log('Hide menu');
        }

        public showLoader() {
            console.log('Show loader');
        }

        public hideLoader() {
            console.log('Hide loader')
        }

        private setActive(view: Game.AbstractRenderable) {
            this.active = view;
            if (view) {
                this.listener.setCamera(view.getCamera());
                this.listener.setScene(view.getScene());
            } else {
                this.listener.setCamera(null);
                this.listener.setScene(null);
            }
        }
    }
}
