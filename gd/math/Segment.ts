///<reference path="../typing.d.ts"/>

namespace GD {

    export class Segment {

        private point1: Point2;
        private point2: Point2;

        public constructor(point1: Point2, point2: Point2) {
            this.point1 = point1;
            this.point2 = point2;
        }

        public getFirstPoint(): Point2 {
            return this.point1;
        }

        public getSecondPoint(): Point2 {
            return this.point2;
        }
    }

}
