///<reference path="../typing.d.ts"/>

namespace GD {
    export class CircleGeometry extends Geometry {
        private radius: number;
        private vertexesCount: number;

        public constructor(position: Point2, radius: number, vertexesCount: number) {
            super(position);
            this.vertexesCount = vertexesCount;
            this.radius = radius;
            this.init();
        }

        public getRadius(): number {
            return this.radius;
        }

        private init() {
            let angleByVertex = 360 / this.vertexesCount;

            for (let currentAngle = 0; currentAngle <= 360; currentAngle += angleByVertex) {
                let y = this.radius * Math.sin(MathUtils.degToRad(currentAngle));
                let x = this.radius * Math.cos(MathUtils.degToRad(currentAngle));
                let point = new Point2(this.position.getX() + x, this.position.getY() + y);
                this.vertexes.add(point);
            }
        }
    }
}
