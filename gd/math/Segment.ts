///<reference path="../typing.d.ts"/>

namespace GD {

    export class Segment {
        private firstPoint: Point2;
        private secondPoint: Point2;

        public constructor(firstPoint: Point2, secondPoint: Point2) {
            this.firstPoint = firstPoint;
            this.secondPoint = secondPoint;
        }

        public getFirstPoint(): Point2 {
            return this.firstPoint;
        }

        public getSecondPoint(): Point2 {
            return this.secondPoint;
        }
    }
}
