///<reference path="../typing.d.ts"/>

namespace GD {
    export class RectangleGeometry extends Geometry {
        private width: number;
        private height: number;

        public constructor(position: Point2, width: number, height: number) {
            super(position);
            this.width = width;
            this.height = height;
            this.init();
        }

        public getWidth(): number {
            return this.width;
        }

        public getHeight(): number {
            return this.height;
        }

        private init() {
            let halfWidth = this.width / 2;
            let halfHeight = this.height / 2;

            this.getVertexes().add(new Point2(this.position.getX() - halfWidth, this.position.getY() - halfHeight));
            this.getVertexes().add(new Point2(this.position.getX() + halfWidth, this.position.getY() - halfHeight));
            this.getVertexes().add(new Point2(this.position.getX() + halfWidth, this.position.getY() + halfHeight));
            this.getVertexes().add(new Point2(this.position.getX() - halfWidth, this.position.getY() + halfHeight));
        }
    }
}
