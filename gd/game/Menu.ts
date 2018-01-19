namespace Game {
    const WIDTH = 900;
    const HEIGHT = 600;
    const MENU_WIDTH = 300;
    const MENU_HEIGHT = 400;

    export class Menu extends Game.AbstractRenderable {
        private buttonXPosition: number;
        private buttonYPosition: number;
        private buttonHeight: number;
        private buttonWidth: number;
        private buttonMargin: number;
        private border: number;
        private listener: Game.ClickListener;

        public constructor(listener: Game.ClickListener) {
            super();
            this.buttonXPosition = 0;
            this.buttonYPosition = 160;
            this.buttonHeight = 40;
            this.buttonWidth = 200;
            this.buttonMargin = 20;
            this.border = 5;
            this.listener = listener;
            this.build();
        }

        private build() {
            this.createBackGround();
            this.createMenuBackGround();
            let playButton = this.addButton("Play");
            let alertButton = this.addButton("Alert");
            let hideButton = this.addButton("Hide");
            let helloButton = this.addButton("Hello");
            // this.createCircle();

            this.listener.onClick(playButton, () => {
                console.log("PlayButton");
            });

            this.listener.onClick(alertButton, () => {
                console.log("alertButton");
                alert("Alert button.");
            });

            this.listener.onClick(hideButton, () => {
                console.log("hideButton");
            });

            this.listener.onClick(helloButton, () => {
                console.log("helloButton");
            });
        }

        private createCircle() {
            let geometry = new GD.CircleGeometry(new GD.Point2(0, 0), 10, 40);
            let rectMaterial = new GD.ColorMaterial(new GD.Color(255, 255, 255));
            this.getScene().add(new GD.Mesh(geometry, rectMaterial));
        }

        private addButton(title: string): GD.Mesh {
            let rectGeometry = new GD.RectangleGeometry(new GD.Point2(this.buttonXPosition, this.buttonYPosition), this.buttonWidth + this.border*2, this.buttonHeight + this.border*2);
            let rectMaterial = new GD.ColorMaterial(new GD.Color(125, 55, 15));
            let buttonMesh = new GD.Mesh(rectGeometry, rectMaterial);
            this.getScene().add(buttonMesh);

            let rectGeometry = new GD.RectangleGeometry(new GD.Point2(this.buttonXPosition, this.buttonYPosition), this.buttonWidth, this.buttonHeight);
            let rectMaterial = new GD.ColorMaterial(new GD.Color(0, 0, 0));
            let mesh = new GD.Mesh(rectGeometry, rectMaterial);
            this.getScene().add(mesh);

            let rectGeometry = new GD.RectangleGeometry(new GD.Point2(this.buttonXPosition, this.buttonYPosition), 0, 0);
            let rectMaterial = new Game.TextMaterial(new GD.Color(255, 255, 255), title);
            let mesh = new Game.ButtonMesh(rectGeometry, rectMaterial);
            this.getScene().add(mesh);

            this.buttonYPosition = this.buttonYPosition - this.buttonHeight - this.buttonMargin;

            return buttonMesh
        }

        private createBackGround() {
            let rectGeometry = new GD.RectangleGeometry(new GD.Point2(0, 0), WIDTH, HEIGHT);
            let rectMaterial = new GD.ColorMaterial(new GD.Color(100, 30, 0));

            this.getScene().add(new GD.Mesh(rectGeometry, rectMaterial));
        }

        private createMenuBackGround() {
            let rectGeometry = new GD.RectangleGeometry(new GD.Point2(0, 0), MENU_WIDTH, MENU_HEIGHT);
            let rectMaterial = new GD.ColorMaterial(new GD.Color(250, 235, 215));

            this.getScene().add(new GD.Mesh(rectGeometry, rectMaterial));
        }
    }
}
