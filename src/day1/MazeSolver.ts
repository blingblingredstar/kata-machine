// const maze = [
//     "xxxxxxxxxx x",
//     "x        x x",
//     "x        x x",
//     "x xxxxxxxx x",
//     "x          x",
//     "x xxxxxxxxxx",
// ];

const walk = ({
    maze,
    wall,
    current,
    end,
    seen,
    path,
    directions,
}: {
    maze: string[];
    wall: string;
    current: Point;
    end: Point;
    seen: boolean[][];
    path: Point[];
    directions: [number, number][];
}) => {
    // If next step is already seen
    if (seen[current.y][current.x] === true) {
        return false;
    }
    // If next step is out of maze
    if (
        current.x < 0 ||
        current.x >= maze[current.y].length ||
        current.y < 0 ||
        current.y >= maze.length
    ) {
        return false;
    }
    // If next step is wall
    if (maze[current.y][current.x] === wall) {
        return false;
    }
    // If next step is end
    if (current.x === end.x && current.y === end.y) {
        path.push(end);
        return true;
    }

    // pre operation
    seen[current.y][current.x] = true;
    path.push(current);
    // recurse
    for (const direction of directions) {
        const [x, y] = direction;
        if (
            walk({
                maze,
                wall,
                current: {
                    x: current.x + x,
                    y: current.y + y,
                },
                end,
                seen,
                path,
                directions,
            })
        ) {
            return true;
        }
    }
    // post operation
    path.pop();
    return false;
};

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen: boolean[][] = new Array(maze.length)
        .fill(null)
        .map((_column) => new Array(maze[0].length).fill(false));
    const path: Point[] = [];
    const directions: [number, number][] = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];

    walk({
        maze,
        wall,
        current: start,
        end,
        seen,
        path,
        directions,
    });

    return path;
}
