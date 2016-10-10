///<reference path="../typing.d.ts"/>

namespace GD {
    export abstract class Material {
        protected style: any;

        public constructor(style: any) {
            this.style = style;
        }

        public getStyle(): any {
            return this.style;
        }

        public setStyle(style: any) {
            this.style = style;
        }
    }
}
