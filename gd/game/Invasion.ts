namespace Game {
    export class Invasion {
        private renderer: GD.Renderer;
        private active: Game.AbstractRenderable;
        private menu: Game.AbstractRenderable;

        public constructor(renderer: GD.Renderer) {
            this.renderer = renderer;
            this.active = null;
        }

        public init() {
            this.createRenderers();
            this.animate();
            this.createMenu();
            this.hideLoader();
            this.showMenu();
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
            this.menu = new Game.Menu();
        }

        public showMenu() {
            this.active = this.menu;
            console.log('Show menu');
        }

        public hideMenu() {
            this.active = null;
            console.log('Hide menu');
        }

        public showLoader() {
            console.log('Show loader');
        }

        public hideLoader() {
            console.log('Hide loader')
        }
    }
}
