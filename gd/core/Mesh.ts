///<reference path="../typing.d.ts"/>

namespace GD {
    export class Mesh {
        private geometry: Geometry;
        private material: Material;

        public constructor(geometry: Geometry, material: Material) {
            this.geometry = geometry;
            this.material = material;
        }

        public getGeometry(): Geometry {
            return this.geometry;
        }

        public getMaterial(): Material {
            return this.material;
        }
    }
}
