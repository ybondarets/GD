namespace Game {
    export enum RenderMode {
        FILL,
        STROKE
    }

    export class TextStyle {
        public fontName: string;
        public fontSize: number;
        public baseLine: string;
        public renderMode: RenderMode;
        public align: string;
        public color: GD.Color;

        public constructor() {
            this.fontSize = 20;
            this.fontName = "Comic Sans MS";
            this.align = "center";
            this.baseLine = "middle";
            this.renderMode = RenderMode.FILL;
        }
    }
}
