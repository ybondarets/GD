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
    }
}
