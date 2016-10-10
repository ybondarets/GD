///<reference path="../typing.d.ts"/>

namespace GD {

    export class Ray {
        private point: Point2;
        private angle: number;
        private pointOnRay: Point2;
        private pointDistance: number;

        public constructor(point: Point2, angle: number) {
            this.point = point;
            this.angle = angle;
            this.pointDistance = 100;
            this.definePointOnRay();
        }

        public getPointOnRay(): Point2 {
            return this.pointOnRay;
        }

        private definePointOnRay() {
            let x = this.point.getX() + this.pointDistance;
            let y = this.point.getY() + this.getCathetus(x, this.angle);

            this.pointOnRay = new Point2(x, y);
        }

        private getCathetus(side: number, angle: number) {
            return this.pointDistance + Math.tan(MathUtils.degToRad(angle));
        }

        public getPoint(): Point2 {
            return this.point;
        }

        public getAngle(): number {
            return this.angle;
        }
    }
}
