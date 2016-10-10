///<reference path="../typing.d.ts"/>

namespace GD {
    export class Node {
        private data:any;
        private next:Node;
        private prev:Node;

        public constructor(data:any) {
            this.data = data;
            this.next = null;
            this.prev = null;
        }

        public getNext(): Node {
            return this.next;
        }

        public getPrev(): Node {
            return this.prev;
        }

        public setNext(node: Node) {
            this.next = node;
        }

        public setPrev(node: Node) {
            this.prev = node;
        }

        public getData(): any {
            return this.data;
        }
    }
}