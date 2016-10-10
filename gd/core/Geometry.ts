///<reference path="../typing.d.ts"/>

namespace GD {
    export class Geometry {
        protected vertexes: Collection<Point2>;
        protected position: Point2;

        public constructor(position: Point2) {
            this.position = position;
            this.vertexes = new Collection<Point2>();
        }

        public getVertexes(): Collection<Point2> {
            return this.vertexes;
        }

        public setPosition(position: Point2) {
            this.vertexes.each(function(vertex: Point2) {
                vertex.setX(vertex.getX() - this.position.getX() + position.getX());
                vertex.setY(vertex.getY() - this.position.getY() + position.getY());
            }.bind(this));

            this.position = position;
        }

        public getPosition(): Point2 {
            return this.position;
        }

        public hasPoint(point: Point2): boolean {
            let intersects = 0;

            let ray = new Ray(point, 0);

            this.vertexes.each(function (point: Point2) {
                let next = this.vertexes.next(point);
                if (!next) {
                    next = this.vertexes.first();
                }

                let segment = new Segment(point, next);

                if (this.isSegmentsCross(ray, segment)) {
                    intersects++;
                }
            }.bind(this));

            return (intersects & 1) !== 0;
        }

        public isSegmentsCross(ray: Ray, segment: Segment): Object|boolean {
            let d = (segment.getSecondPoint().getY() - segment.getFirstPoint().getY())
                * (ray.getPointOnRay().getX() - ray.getPoint().getX())
                - (segment.getSecondPoint().getX() - segment.getFirstPoint().getX())
                * (ray.getPointOnRay().getY() - ray.getPoint().getY());

            if (d != 0) {
                var u0 = this.halfplane(ray.getPoint(), segment.getFirstPoint(), segment.getSecondPoint()) / d;
                var u1 = this.halfplane(ray.getPointOnRay(), ray.getPoint(), segment.getFirstPoint()) / d;
                if (u0 >= 0 && (u1 * u1 <= u1)) {
                    return {
                        x : ray.getPoint().getX() + u0 * (ray.getPointOnRay().getX() - ray.getPoint().getX()),
                        y : ray.getPoint().getY() + u0 * (ray.getPointOnRay().getY() - ray.getPoint().getY())
                    }
                }
            }
            return false;
        }

        private halfplane(p, a1, a2): number {
            return (p.getX() - a1.getX()) * (p.getY() - a2.getY()) - (p.getY() - a1.getY()) * (p.getX() - a2.getX());
        }

    }
}
