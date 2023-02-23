const traverseInOrder = <T>(node: BinaryNode<T>, values: T[]) => {
    if (node.left !== null) {
        traverseInOrder(node.left, values);
    }
    values.push(node.value);
    if (node.right !== null) {
        traverseInOrder(node.right, values);
    }
};

export default function in_order_search(head: BinaryNode<number>): number[] {
    const values: number[] = [];
    traverseInOrder(head, values);
    return values;
}
