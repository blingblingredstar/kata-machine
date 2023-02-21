interface Node<T> {
    value: T;
    prev: Node<T> | null;
}

export default class Stack<T> {
    public length: number = 0;

    #top: Node<T> | null = null;

    constructor() {}

    push(item: T): void {
        this.length++;
        if (this.#top === null) {
            this.#top = { value: item, prev: null };
            return;
        }
        this.#top = { value: item, prev: this.#top };
    }
    pop(): T | undefined {
        if (this.#top === null) {
            return undefined;
        }
        this.length--;
        const top = this.#top;
        this.#top = top.prev;
        top.prev = null;
        return top.value;
    }
    peek(): T | undefined {
        return this.#top?.value;
    }
}
