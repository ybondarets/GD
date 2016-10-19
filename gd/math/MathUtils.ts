///<reference path="../typing.d.ts"/>

namespace GD {
    export class MathUtils {

        public static degToRad(deg) {
            return deg / 180 * Math.PI;
        }

        public static radToDeg(rad) {
            return rad / Math.PI * 180;
        }
    }
}
