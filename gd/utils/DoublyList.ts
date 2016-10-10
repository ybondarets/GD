///<reference path="../typing.d.ts"/>

namespace GD {
    export class DoublyList {

        private length: number;
        private head: Node;
        private tail: Node;

        public constructor() {
            this.length = 0;
            this.head = null;
            this.tail = null;
        }

        public getTail(): Node {
            return this.tail;
        }

        public getHead(): Node {
            return this.head;
        }

        public getLength(): number {
            return this.length;
        }

        public add(node: Node) {
            if (this.length) {
                this.tail.setNext(node);
                node.setPrev(this.tail);
                this.tail = node;
            } else {
                this.head = node;
                this.tail = node;
            }

            this.length++;
        }

        public remove(position: number) {
            if (!this.hasPosition(position)) {
                throw new Error("Node at position[" + position + "] is not exist.");
            }

            if (position == 0) {
                this.head = this.head.getNext();
                this.head.setPrev(null);
            } else if (position == this.length - 1) {
                this.tail = this.tail.getPrev();
                this.tail.setNext(null);
            } else {
                let node = this.getByPosition(position);
                let next = node.getNext();
                let prev = node.getPrev();

                prev.setNext(next);
                next.setPrev(prev);
            }

            this.length--;
        }

        public getByPosition(position: number): Node {
            if (!this.hasPosition(position)) {
                throw new Error("Node at position[" + position + "] is not exist.");
            }

            let currentNode = this.head;
            let count = 0;

            while (count < position) {
                currentNode = currentNode.getNext();
                count++;
            }

            return currentNode;
        }

        public hasPosition(position: number): boolean {
            return !(this.length === 0 || position < 0 || position >= this.length)
        }
    }
}