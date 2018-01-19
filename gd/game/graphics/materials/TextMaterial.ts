namespace Game {
    export class TextMaterial extends GD.ColorMaterial {
        private text: string;
        private style: TextStyle;

        public constructor(color: GD.Color, text = "") {
            super(color);
            this.text = text;
            this.style = new Game.TextStyle();
            this.style.color = color;
        }

        public getText(): string {
            return this.text;
        }

        public getStyle(): TextStyle {
            return this.style;
        }
    }
}

