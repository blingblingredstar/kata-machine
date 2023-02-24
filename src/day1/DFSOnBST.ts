export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    if (!head) return false;
    if (head.value === needle) return true;
    if (head.right && head.value < needle) {
        return dfs(head.right, needle);
    }
    if (head.left && head.value >= needle) {
        return dfs(head.left, needle);
    }
    return false;
}
