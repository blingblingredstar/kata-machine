const traverse = <T>(node: BinaryNode<T>, values: T[]) => {
    values.push(node.value);
    if (node.left !== null) {
        traverse(node.left, values);
    }
    if (node.right !== null) {
        traverse(node.right, values);
    }
};
export default function pre_order_search(head: BinaryNode<number>): number[] {
    const values: number[] = [];
    traverse(head, values);
    return values;
}
