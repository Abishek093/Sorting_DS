function bubbleSortString(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Example usage:
let strings = ["banana", "apple", "orange", "grape", "pineapple"];
console.log("Original array:", strings);
let sortedStrings = bubbleSortString(strings);
console.log("Sorted array:", sortedStrings);
