export default function bs_list(haystack: number[], needle: number): boolean {
    let start = 0;
    let end = haystack.length;

    do {
        const middle = Math.floor(start + (end - start) / 2);
        if (haystack[middle] === needle) {
            return true;
        } else if (haystack[middle] < needle) {
            start = middle + 1;
        } else {
            // haystack[middle] < needle
            end = middle;
        }
    } while (start < end);

    return false;
}
