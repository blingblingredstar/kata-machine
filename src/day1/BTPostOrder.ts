const traversePostOrder = <T>(
    node: BinaryNode<T>,
    action: (value: T) => void,
) => {
    if (node.left !== null) {
        traversePostOrder(node.left, action);
    }
    if (node.right !== null) {
        traversePostOrder(node.right, action);
    }
    action(node.value);
};

export default function post_order_search(head: BinaryNode<number>): number[] {
    const values: number[] = [];
    traversePostOrder(head, (value) => {
        values.push(value);
    });
    return values;
}
