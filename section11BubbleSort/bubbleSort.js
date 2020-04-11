let bubbleSort = (arr) => {
    let noSwap = true; 
    for (let i = arr.length - 1; i >= 0; i--) {
        noSwap = true;
        for (let j = 0; j <= i - 1; j++) {
            if (arr[j] > arr[j + 1]) swap(arr, j+1, j);
            noSwap = false; 
        }
    }
    if(noSwap) break;
    return arr; 
}

let swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    return arr; 
}

let test1 = [22, 34, 1, 3, 89, 3, 65, 10];
console.log(bubbleSort(test1));

//time complexity:
//in general: O(n^2)
// if the arr is nearly sorted,
// O(n)