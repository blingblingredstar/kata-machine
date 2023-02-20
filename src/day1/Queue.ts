interface QueueNode<T> {
    value: T;
    next: QueueNode<T> | null;
}

export default class Queue<T> {
    public length: number = 0;

    constructor() {}

    #head: QueueNode<T> | null = null;
    #tail: QueueNode<T> | null = null;

    #createNode(value: T): QueueNode<T> {
        return {
            value,
            next: null,
        };
    }

    enqueue(item: T): void {
        const newTail = this.#createNode(item);
        this.length++;

        if (this.#tail === null) {
            this.#head = newTail;
            this.#tail = newTail;
            return;
        }

        if (this.#tail !== null) {
            this.#tail.next = newTail;
            this.#tail = newTail;
            return;
        }
    }

    deque(): T | undefined {
        if (this.#head) {
            const head = this.#head;
            this.#head = this.#head.next;
            this.length--;
            // rest head
            head.next = null;
            if (this.length === 0) {
                this.#tail = null;
            }
            return head.value;
        }
        return undefined;
    }

    peek(): T | undefined {
        return this.#head?.value;
    }
}
