interface Node<T> {
    value: T;
    prev: Node<T> | null;
    next: Node<T> | null;
}

export default class DoublyLinkedList<T> {
    public length: number;
    #head: Node<T> | null;
    #tail: Node<T> | null;

    constructor() {
        this.length = 0;
        this.#head = null;
        this.#tail = null;
    }

    #findNode(idx: number) {
        let current = this.#head;
        for (let i = 0; i < idx && current !== null; i++) {
            current = current.next;
        }
        return current;
    }

    #findNodeByValue(value: T) {
        let current = this.#head;
        for (let i = 0; i < this.length && current !== null; i++) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return current;
    }

    #removeHead(): T | undefined {
        const head = this.#head;
        if (head === null) {
            return undefined;
        }

        this.length--;
        if (this.#head === this.#tail || head.next === null) {
            this.#head = null;
            this.#tail = null;
            return head.value;
        }

        this.#head = head.next;
        head.next.prev = this.#head;
        head.prev = null;
        head.next = null;
        return head.value;
    }

    #removeTail(): T | undefined {
        const tail = this.#tail;
        if (tail === null || tail.prev === null) {
            return this.#removeHead();
        }
        this.length--;
        tail.prev.next = null;
        this.#tail = tail.prev;
        tail.prev = null;
        return tail.value;
    }

    #removeNode(node: Node<T> | null) {
        if (node === null) return undefined;
        if (node.prev === null || node === this.#head) {
            return this.#removeHead();
        }
        if (node.next === null || node === this.#tail) {
            return this.#removeTail();
        }
        this.length--;
        node.prev.next = node.next;
        node.next.prev = node.prev;
        node.prev = null;
        node.next = null;
        return node.value;
    }

    prepend(item: T): void {
        this.length++;
        if (this.#head === null) {
            this.#head = {
                value: item,
                prev: null,
                next: null,
            };
            this.#tail = this.#head;
            return;
        }
        const node: Node<T> = {
            value: item,
            prev: null,
            next: this.#head,
        };

        this.#head.prev = node;
        this.#head = node;
    }
    insertAt(item: T, idx: number): void {
        if (this.#head === null) {
            this.prepend(item);
            return;
        }
        this.length++;
        const prev = this.#findNode(idx - 1);
        if (!prev) {
            this.#head.next = {
                value: item,
                prev: this.#head,
                next: null,
            };
            return;
        }
        prev.next = {
            value: item,
            prev,
            next: null,
        };
        return;
    }
    append(item: T): void {
        if (this.#tail === null) {
            this.prepend(item);
            return;
        }
        this.length++;
        const node: Node<T> = {
            value: item,
            prev: this.#tail,
            next: null,
        };
        this.#tail.next = node;
        this.#tail = node;
        return;
    }
    remove(item: T): T | undefined {
        const node = this.#findNodeByValue(item);
        return this.#removeNode(node);
    }
    get(idx: number): T | undefined {
        return this.#findNode(idx)?.value;
    }
    removeAt(idx: number): T | undefined {
        const node = this.#findNode(idx);
        console.log(node, idx);
        return this.#removeNode(node);
    }
}
