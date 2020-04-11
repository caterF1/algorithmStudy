let merge = (arr1, arr2) => {
    let result = [], i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;

        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++
    }
    while (j < arr2.length) {
        result.push(arr2[j])
        j++;
    }
    return result;
}

// let test1 = [1, 3, 5, 7, 15, 100, 300, 400],
//     test2 = [2, 8, 10, 200];
// console.log(merge(test1, test2));

let mergeSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }
    let cut = Math.floor(arr.length / 2);
    let firstHalf = mergeSort(arr.slice(0, cut));
    let secondHalf = mergeSort(arr.slice(cut));

    return merge(firstHalf, secondHalf);
}
let test3 = [1, 2, 5, 10, 3];
console.log(mergeSort(test3))
// let arrContainer = [];
// let breakArray = (arr) => {
//   if (arr.length < 2) {
//     console.log("=============")
//     arrContainer.push(arr);
//     console.log(arrContainer)
//     if(arrContainer.length >=2){
//         console.log("merge")
//         merge(arrContainer[0],arrContainer[1])
//     }
//     return arrContainer;
//   }
//   let temp = arr;
//   let cut = Math.floor(temp.length / 2);
//   let firstHalf = temp.slice(0, cut);
//   let secondHalf = arr.slice(cut)
//   breakArray(firstHalf);
//   breakArray(secondHalf);

//   return arrContainer;
// }




