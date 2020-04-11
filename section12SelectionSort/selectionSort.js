let selectionSort = (arr) => {
    let idx = 0;
    for (let i = 0; i < arr.length-1; i++) {
    		
        let idx = i; 
        for(let j = i; j < arr.length-1; j++) {
            if (arr[idx] > arr[j+1]) idx = j+1; 
        }
        if(idx !== i){
            let smaller = arr[idx];
            arr[idx] = arr[i];
            arr[i] = smaller;
        }
        

    }
     return arr
}

let test = [ 5, 10, 2, 9, 1];
console.log(selectionSort(test));