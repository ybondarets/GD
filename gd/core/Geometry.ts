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

        public rotate(deg: number) {
            this.vertexes.each(this.rotateVertex.bind(this, deg));
        }

        private rotateVertex(deg: number, vertex: Point2) {
            let zeroX = vertex.getX() - this.position.getX();
            let zeroY = vertex.getY() - this.position.getY();

            let rad = MathUtils.degToRad(deg);

            let newX = zeroX * Math.cos(rad) - zeroY * Math.sin(rad);
            let newY = zeroX * Math.sin(rad) + zeroY * Math.cos(rad);

            vertex.setX(newX + this.position.getX());
            vertex.setY(newY + this.position.getY());
        }

        public getPosition(): Point2 {
            return this.position;
        }

        public hasPoint(point: Point2): boolean {
            let intersects = 0;

            let ray = new Ray(point, 0);

            this.vertexes.each((point: Point2, position) => {
                let next = this.vertexes.first();
                if (this.vertexes.offsetExists(position + 1)) {
                    next = this.vertexes.offsetGet(position + 1);
                }

                let segment = new Segment(point, next);

                if (this.isSegmentsCross(ray, segment)) {
                    intersects++;
                }
            });

            return (intersects & 1) !== 0;
        }

        public isSegmentsCross(ray: Ray, segment: Segment): Point2|boolean {
            let d = (segment.getSecondPoint().getY() - segment.getFirstPoint().getY())
                * (ray.getPointOnRay().getX() - ray.getPoint().getX())
                - (segment.getSecondPoint().getX() - segment.getFirstPoint().getX())
                * (ray.getPointOnRay().getY() - ray.getPoint().getY());

            if (d != 0) {
                let u0 = this.halfPlane(ray.getPoint(), segment.getFirstPoint(), segment.getSecondPoint()) / d;
                let u1 = this.halfPlane(ray.getPointOnRay(), ray.getPoint(), segment.getFirstPoint()) / d;
                if (u0 >= 0 && (u1 * u1 <= u1)) {
                    return new Point2(
                        ray.getPoint().getX() + u0 * (ray.getPointOnRay().getX() - ray.getPoint().getX()),
                        ray.getPoint().getY() + u0 * (ray.getPointOnRay().getY() - ray.getPoint().getY())
                    );
                }
            }

            return false;
        }

        private halfPlane(p, a1, a2): number {
            return (p.getX() - a1.getX()) * (p.getY() - a2.getY()) - (p.getY() - a1.getY()) * (p.getX() - a2.getX());
        }
    }
}
