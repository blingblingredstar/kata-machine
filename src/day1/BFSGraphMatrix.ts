export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1);

    seen[source] = true;

    const queue = [source];

    do {
        const curr = queue.shift()!;
        if (curr === needle) {
            break;
        }
        const adjs = graph[curr];
        for (let i = 0; i < adjs.length; i++) {
            if (adjs[i] === 0) continue;
            if (seen[i] === true) continue;
            seen[i] = true;
            prev[i] = curr;
            queue.push(i);
        }
        seen[curr] = true;
    } while (queue.length);

    if (prev[needle] === -1) return null;

    let curr = needle;
    const out = [];

    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }

    return [source, ...out.reverse()];
}
