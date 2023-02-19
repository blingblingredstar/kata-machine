export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpLength = Math.floor(Math.sqrt(breaks.length));
    let i = 0;

    while (breaks[i] === false) {
        i += jumpLength;
    }

    for (let j = i - jumpLength + 1; j < i; j++) {
        if (breaks[j] === true) {
            return j;
        }
    }

    return -1;
}
