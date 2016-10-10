///<reference path="../typing.d.ts"/>

namespace GD {
    export class Scene {
        private meshes: Collection<Mesh>;

        public constructor() {
            this.meshes = new Collection<Mesh>();
        }

        public add(mesh: Mesh) {
            this.meshes.add(mesh);
        }

        public getMeshes(): Collection<Mesh> {
            return this.meshes;
        }
    }
}
