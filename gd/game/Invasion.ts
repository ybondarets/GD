namespace Game {
    export class Invasion {
        private renderer: GD.Renderer;
        private active: Game.AbstractRenderable;
        private menu: Game.AbstractRenderable;
        private listener: Game.ClickListener;

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

        public setClickListener(listener: Game.ClickListener) {
            this.listener = listener;
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
