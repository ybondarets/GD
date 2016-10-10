///<reference path="../typing.d.ts"/>
var GD;
(function (GD) {
    var Node = (function () {
        function Node(data) {
            this.data = data;
            this.next = null;
            this.prev = null;
        }
        Node.prototype.getNext = function () {
            return this.next;
        };
        Node.prototype.getPrev = function () {
            return this.prev;
        };
        Node.prototype.setNext = function (node) {
            this.next = node;
        };
        Node.prototype.setPrev = function (node) {
            this.prev = node;
        };
        Node.prototype.getData = function () {
            return this.data;
        };
        return Node;
    })();
    GD.Node = Node;
})(GD || (GD = {}));
//# sourceMappingURL=Node.js.map