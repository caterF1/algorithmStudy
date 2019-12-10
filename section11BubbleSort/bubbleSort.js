let bubbleSort = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (arr[j] > arr[j + 1]) swap(arr, j+1, j);
        }
    }
    return arr; 
}

let swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    return arr; 
}

let test1 = [22, 34, 1, 3, 89, 3, 65, 10];
console.log(bubbleSort(test1));
// console.log(swap(test1, 0,1));