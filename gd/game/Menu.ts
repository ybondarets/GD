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

        public constructor() {
            super();
            this.buttonXPosition = 0;
            this.buttonYPosition = 160;
            this.buttonHeight = 40;
            this.buttonWidth = 200;
            this.buttonMargin = 20;
            this.border = 5;
            this.build();
        }

        private build() {
            this.createBackGround();
            this.createMenuBackGround();
            this.addButton("Play");
            this.addButton("Alert");
            this.addButton("Hide");
            this.addButton("Hello");
            this.createCircle();
        }

        private createCircle() {
            let geometry = new GD.CircleGeometry(new GD.Point2(0, 0), 1, 4);
            let rectMaterial = new GD.ColorMaterial(new GD.Color(0, 0, 0));
            this.getScene().add(new GD.Mesh(geometry, rectMaterial));
        }

        private addButton(title: string) {
            let rectGeometry = new GD.RectangleGeometry(new GD.Point2(this.buttonXPosition, this.buttonYPosition), this.buttonWidth + this.border*2, this.buttonHeight + this.border*2);
            let rectMaterial = new GD.ColorMaterial(new GD.Color(125, 55, 15));
            let mesh = new GD.Mesh(rectGeometry, rectMaterial);
            this.getScene().add(mesh);

            let rectGeometry = new GD.RectangleGeometry(new GD.Point2(this.buttonXPosition, this.buttonYPosition), this.buttonWidth, this.buttonHeight);
            let rectMaterial = new GD.ColorMaterial(new GD.Color(0, 0, 0));
            let mesh = new GD.Mesh(rectGeometry, rectMaterial);
            this.getScene().add(mesh);

            let rectGeometry = new GD.RectangleGeometry(new GD.Point2(this.buttonXPosition, this.buttonYPosition), 0, 0);
            let rectMaterial = new Game.TextMaterial(new GD.Color(255, 255, 255), title);
            let mesh = new Game.ButtonMesh(rectGeometry, rectMaterial);
            this.getScene().add(mesh);

            this.buttonYPosition = this.buttonYPosition - this.buttonHeight - this.buttonMargin;
            console.log(mesh);
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
