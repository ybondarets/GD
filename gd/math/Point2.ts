///<reference path="../typing.d.ts"/>

namespace GD {
    export class Point2 {
        private x: number;
        private y: number;

        public constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }

        public getX(): number {
            return this.x;
        }

        public setX(x: number) {
            this.x = x;
        }

        public getY(): number {
            return this.y;
        }

        public setY(y: number) {
            this.y = y;
        }
    }
}
