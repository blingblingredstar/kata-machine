export default class MinHeap<T extends number> {
    public length: number;
    #data: T[];

    constructor() {
        this.length = 0;
        this.#data = [];
    }

    #parent(index: number): number {
        return Math.floor((index - 1) / 2);
    }

    #leftChild(index: number): number {
        return index * 2 + 1;
    }

    #rightChild(index: number): number {
        return index * 2 + 2;
    }

    #heapifyUp(index: number): void {
        let currentIndex = index;
        while (currentIndex > 0) {
            const parentIndex = this.#parent(currentIndex);
            const parentValue = this.#data[parentIndex];
            const current = this.#data[currentIndex];
            if (current < parentValue) {
                this.#data[parentIndex] = current;
                this.#data[currentIndex] = parentValue;
                currentIndex = parentIndex;
            } else {
                break;
            }
        }
    }

    #heapifyDown(index: number): void {
        let currentIndex = index;
        while (currentIndex < this.length) {
            const leftIndex = this.#leftChild(currentIndex);
            const rightIndex = this.#rightChild(currentIndex);

            if (leftIndex >= this.length) break;

            const leftValue = this.#data[leftIndex];
            const rightValue = this.#data[rightIndex];
            const currentValue = this.#data[currentIndex];
            const minValue = Math.min(leftValue, rightValue, currentValue);
            if (minValue === rightValue) {
                this.#data[rightIndex] = currentValue;
                this.#data[currentIndex] = rightValue;
                currentIndex = rightIndex;
            } else if (minValue === leftValue) {
                this.#data[leftIndex] = currentValue;
                this.#data[currentIndex] = leftValue;
                currentIndex = leftIndex;
            }
        }
    }

    insert(value: T): void {
        this.#data[this.length] = value;
        this.#heapifyUp(this.length);
        this.length++;
    }
    delete(): T {
        if (this.length === 0) {
            return -1 as T;
        }

        if (this.length === 1) {
            this.length--;
            return this.#data.pop()!;
        }

        this.length--;
        const first = this.#data[0];
        this.#data[0] = this.#data[this.length];
        this.#heapifyDown(0);
        return first;
    }
}
