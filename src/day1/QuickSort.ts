const qs = (arr: number[], low: number, high: number): void => {
    if (low >= high) return;

    const pivot = partition(arr, low, high);

    qs(arr, low, pivot - 1);
    qs(arr, pivot + 1, high);
};
const partition = (arr: number[], low: number, high: number): number => {
    const pivot = arr[high];

    let idx = low - 1;

    for (let i = low; i < high; i++) {
        if (arr[i] <= pivot) {
            idx++;
            [arr[i], arr[idx]] = [arr[idx], arr[i]];
        }
    }

    idx++;
    [arr[high], arr[idx]] = [arr[idx], arr[high]];

    return idx;
};

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
