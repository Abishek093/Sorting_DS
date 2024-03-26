function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            // console.log(arr);
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

const arr = [-6, 20, 8, -2, 4];
console.log("Original Array:", arr);
console.log("Sorted Array:", insertionSort(arr)) 