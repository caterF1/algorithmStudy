let getDigitMyVersion = (num, place) => {
    return parseInt((num / Math.pow(10, place - 1)).toString().split("").slice(-1));
}
let digitCountMyVersion = (num) => {
    return num.toString().length;
}
let getDigit = (num, i) => {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
let digitCount = (num) => {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
let mostDigit = (nums) => {
    let maxDigit = 0;
    for (let num of nums) {
        maxDigit = Math.max(maxDigit, digitCount(num));
    }
    return maxDigit;
}
let radixSort = (nums) => {
    let maxDigitCount = mostDigit(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        // this method of creating array doesnt work 
        // let digitBuckets =  Array(10).fill([]);

        let digitBuckets = Array.from({ length: 10 }, () => []);
        console.log("empty array ============")
        console.log(digitBuckets);

        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        console.log(digitBuckets)
        // nums = [].concat(...digitBuckets);
        // console.log(nums)
    }
    return nums;
}
let test1 = 1;
let test2 = [12345, 1, 1222, 320, 23];
// console.log(getDigit(test1, 4));
// console.log(digitCount(test1))
// console.log(mostDigit(test2));
console.log(radixSort(test2));

let arrayFrom = Array.from({ length: 10 }, () => []);
let arrayFill = Array(10).fill([1,2]);

arrayFrom[1].push([1]);
arrayFill[1].push([1]);