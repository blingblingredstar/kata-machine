import Queue from "./Queue";

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const queue = new Queue<typeof head | null | undefined>();

    queue.enqueue(head);

    while (queue.length > 0) {
        const node = queue.deque();
        if (!node) continue;
        if (node.value === needle) return true;
        queue.enqueue(node.left);
        queue.enqueue(node.right);
    }
    return false;
}
