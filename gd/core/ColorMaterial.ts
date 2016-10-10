///<reference path="../typing.d.ts"/>

namespace GD {
    export class ColorMaterial extends Material {
        public constructor(color: Color) {
            super(color);
        }

        public getStyle(): string {
            return this.style.getHex();
        }

        public getColor(): Color {
            return this.style;
        }
    }
}
