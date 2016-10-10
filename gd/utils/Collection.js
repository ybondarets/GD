///<reference path="../typing.d.ts"/>
var GD;
(function (GD) {
    var Collection = (function () {
        function Collection(data) {
            if (data) {
                this.reset(data);
            }
            this.values = new GD.DoublyList();
        }
        Collection.prototype.length = function () {
            return this.values.getLength();
        };
        Collection.prototype.reset = function (data) {
            for (var i = 0; i < data.length; i++) {
                if (data.hasOwnProperty(i)) {
                    this.add(data[i]);
                }
            }
        };
        Collection.prototype.add = function (data) {
            var node = new GD.Node(data);
            this.values.add(node);
        };
        Collection.prototype.first = function () {
            return this.values.getHead().getData();
        };
        Collection.prototype.last = function () {
            return this.values.getTail().getData();
        };
        Collection.prototype.each = function (callback) {
            var node = this.values.getHead();
            var position = 0;
            do {
                callback(node.getData(), position);
                position++;
            } while (node = node.getNext());
        };
        Collection.prototype.filter = function (callback) {
            var result = this.create();
            this.each(function (item) {
                if (callback(item)) {
                    result.add(item);
                }
            });
            return result;
        };
        Collection.prototype.create = function () {
            return new Collection();
        };
        Collection.prototype.getByPosition = function (position) {
            return this.values.getByPosition(position).getData();
        };
        Collection.prototype.hasAtPosition = function (position) {
            return this.values.hasPosition(position);
        };
        Collection.prototype.remove = function (position) {
            this.values.remove(position);
        };
        Collection.prototype.toArray = function () {
            var result = [];
            this.each(function (item) {
                result.push(item);
            });
            return result;
        };
        Collection.prototype.getList = function () {
            return this.values;
        };
        return Collection;
    })();
    GD.Collection = Collection;
})(GD || (GD = {}));
//# sourceMappingURL=Collection.js.map