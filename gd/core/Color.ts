///<reference path="../typing.d.ts"/>

namespace GD {
    export class Color {
        private r: number;
        private g: number;
        private b: number;

        public rDirection;
        public gDirection;
        public bDirection;

        public constructor(r: number, g: number, b: number) {
            this.r = r;
            this.g = g;
            this.b = b;
            this.rDirection = Math.random() > 0.5 ? 1 : -1;
            this.gDirection = Math.random() > 0.5 ? 1 : -1;
            this.bDirection = Math.random() > 0.5 ? 1 : -1;
        }

        public getR(): number {
            return this.r;
        }

        public getG(): number {
            return this.g;
        }

        public getB(): number {
            return this.b;
        }

        public setR(value: number) {
            this.r = value;
        }

        public setG(value: number) {
            this.g = value;
        }

        public setB(value: number) {
            this.b = value;
        }

        public getHex(): string {
            return "#" + this.intToHex(this.r) + this.intToHex(this.g) + this.intToHex(this.b);
        }

        public intToHex(num: number) {
            return num.toString(16);
        }

        public getRgb(): string {
            return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
        }
    }
}
