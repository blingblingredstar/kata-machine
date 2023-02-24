export default function compare(
    a: BinaryNode<number> | null,
    b: BinaryNode<number> | null,
): boolean {
    // Due to bread-first-search can't save the information of the level of the tree,
    // we need to use depth-first-search and the order is doesn't matter here
    if (a === null && b === null) return true;
    if (a === null || b === null) return false;
    if (a.value !== b.value) return false;
    return compare(a.left, b.left) && compare(a.right, b.right);
}
