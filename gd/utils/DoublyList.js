///<reference path="../typing.d.ts"/>
var GD;
(function (GD) {
    var DoublyList = (function () {
        function DoublyList() {
            this.length = 0;
            this.head = null;
            this.tail = null;
        }
        DoublyList.prototype.getTail = function () {
            return this.tail;
        };
        DoublyList.prototype.getHead = function () {
            return this.head;
        };
        DoublyList.prototype.getLength = function () {
            return this.length;
        };
        DoublyList.prototype.add = function (node) {
            if (this.length) {
                this.tail.setNext(node);
                node.setPrev(this.tail);
                this.tail = node;
            }
            else {
                this.head = node;
                this.tail = node;
            }
            this.length++;
        };
        DoublyList.prototype.remove = function (position) {
            if (!this.hasPosition(position)) {
                throw new Error("Node at position[" + position + "] is not exist.");
            }
            if (position == 0) {
                this.head = this.head.getNext();
                this.head.setPrev(null);
            }
            else if (position == this.length - 1) {
                this.tail = this.tail.getPrev();
                this.tail.setNext(null);
            }
            else {
                var node = this.getByPosition(position);
                var next = node.getNext();
                var prev = node.getPrev();
                prev.setNext(next);
                next.setPrev(prev);
            }
            this.length--;
        };
        DoublyList.prototype.getByPosition = function (position) {
            if (!this.hasPosition(position)) {
                throw new Error("Node at position[" + position + "] is not exist.");
            }
            var currentNode = this.head;
            var count = 0;
            while (count < position) {
                currentNode = currentNode.getNext();
                count++;
            }
            return currentNode;
        };
        DoublyList.prototype.hasPosition = function (position) {
            return !(this.length === 0 || position < 0 || position >= this.length);
        };
        return DoublyList;
    })();
    GD.DoublyList = DoublyList;
})(GD || (GD = {}));
//# sourceMappingURL=DoublyList.js.map