let pivotHelper = (arr, start = 0, end = arr.length + 1) => {
    let pivot = start;
    for (let i = start + 1; i < arr.length; i++) {
        if (arr[start] > arr[i]) {
            pivot++;
            [arr[pivot], arr[i]] = [arr[i], arr[pivot]]
        }
    }
    [arr[start], arr[pivot]] = [arr[pivot], arr[start]];
    console.log(arr);
    return pivot;
}

// let test1 = [4, 8, 2, 1, 5, 7, 6, 3];
// console.log(pivotHelper(test1));

let quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (left< right){
        let pivotIndex = pivotHelper(arr, left, right);
        quickSort(arr, left, pivotIndex);
        quickSort(arr, pivotIndex+1, right);
    }
   
    return arr; 

}

let test2 = [4, 6, 9, 1, 2, 5, 3]
console.log(quickSort(test2))