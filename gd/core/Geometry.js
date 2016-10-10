///<reference path="../typing.d.ts"/>
var GD;
(function (GD) {
    var Geometry = (function () {
        function Geometry(position) {
            this.position = position;
            this.vertexes = new GD.Collection();
        }
        Geometry.prototype.getVertexes = function () {
            return this.vertexes;
        };
        Geometry.prototype.setPosition = function (position) {
            this.vertexes.each(function (vertex) {
                vertex.setX(vertex.getX() - this.position.getX() + position.getX());
                vertex.setY(vertex.getY() - this.position.getY() + position.getY());
            }.bind(this));
            this.position = position;
        };
        Geometry.prototype.getPosition = function () {
            return this.position;
        };
        Geometry.prototype.hasPoint = function (point) {
            var intersects = 0;
            var ray = new GD.Ray(point, 0);
            this.vertexes.each(function (point) {
                var next = this.vertexes.next(point);
                if (!next) {
                    next = this.vertexes.first();
                }
                var segment = new GD.Segment(point, next);
                if (this.isSegmentsCross(ray, segment)) {
                    intersects++;
                }
            }.bind(this));
            return (intersects & 1) !== 0;
        };
        Geometry.prototype.isSegmentsCross = function (ray, segment) {
            var d = (segment.getSecondPoint().getY() - segment.getFirstPoint().getY())
                * (ray.getPointOnRay().getX() - ray.getPoint().getX())
                - (segment.getSecondPoint().getX() - segment.getFirstPoint().getX())
                    * (ray.getPointOnRay().getY() - ray.getPoint().getY());
            if (d != 0) {
                var u0 = this.halfplane(ray.getPoint(), segment.getFirstPoint(), segment.getSecondPoint()) / d;
                var u1 = this.halfplane(ray.getPointOnRay(), ray.getPoint(), segment.getFirstPoint()) / d;
                if (u0 >= 0 && (u1 * u1 <= u1)) {
                    return {
                        x: ray.getPoint().getX() + u0 * (ray.getPointOnRay().getX() - ray.getPoint().getX()),
                        y: ray.getPoint().getY() + u0 * (ray.getPointOnRay().getY() - ray.getPoint().getY())
                    };
                }
            }
            return false;
        };
        Geometry.prototype.halfplane = function (p, a1, a2) {
            return (p.getX() - a1.getX()) * (p.getY() - a2.getY()) - (p.getY() - a1.getY()) * (p.getX() - a2.getX());
        };
        return Geometry;
    })();
    GD.Geometry = Geometry;
})(GD || (GD = {}));
//# sourceMappingURL=Geometry.js.map