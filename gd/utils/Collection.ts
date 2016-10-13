///<reference path="../typing.d.ts"/>

namespace GD {
    export class Collection<ItemType> implements CollectionInterface {
        private values: DoublyList;

        public constructor(data?: Array<ItemType>) {
            if (data) {
                this.reset(data);
            }

            this.values = new DoublyList();
        }

        public length(): number {
            return this.values.getLength();
        }

        public reset(data: Array<ItemType>) {
            for (let i = 0; i < data.length; i++) {
                if (data.indexOf(data[i]) !== -1) {
                    this.add(data[i]);
                }
            }
        }

        public add(data: ItemType) {
            let node = new Node(data);
            this.values.add(node);
        }

        public first(): ItemType {
            return this.values.getHead().getData();
        }

        public last(): ItemType {
            return this.values.getTail().getData();
        }

        public each(callback: (data: ItemType, position?: number) => any) {
            let node = this.values.getHead();
            let position = 0;
            do {
                callback(node.getData(), position);
                position++;
            } while (node = node.getNext());
        }

        public filter(callback: (data: ItemType) => boolean): Collection<ItemType> {
            let result = this.create();

            this.each(function(item: ItemType) {
                if (callback(item)) {
                    result.add(item);
                }
            });

            return result;
        }

        private create(): Collection<ItemType> {
            return new Collection<ItemType>();
        }

        public offsetGet(position: number): ItemType {
            return this.values.offsetGet(position).getData();
        }

        public offsetExists(position: number): boolean {
            return this.values.offsetExists(position);
        }

        public offsetUnset(position: number) {
            this.values.offsetUnset(position);
        }

        public toArray(): Array<ItemType> {
            let result = [];

            this.each(function(item: ItemType) {
                result.push(item);
            });

            return result;
        }

        public toList(): DoublyList {
            return this.values;
        }
    }
}
