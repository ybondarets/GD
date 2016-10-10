///<reference path="../typing.d.ts"/>

namespace GD {
    export class Camera {
        private position: Point2;

        public constructor(position?: Point2) {
            this.position = position || new Point2(0, 0);
        }

        public moveTo(position: Point2) {
            this.position = position;
        }

        public getPosition(): Point2 {
            return this.position;
        }
    }
}
