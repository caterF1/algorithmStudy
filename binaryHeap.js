class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }
   bubbleUpMyTry() {
        let index = this.values.length -1;
        let parentIndex = Math.floor((index-1)/2);
        while(this.values[parentIndex] < this.values[index]){
            [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]];
            index = parentIndex;
            parentIndex =  Math.floor((index-1)/2);
        }
    }
    bubbleUp() {
        let idx = this.values.length -1;
        const element = this.values[idx];
        while(idx>0){
            let parentIdx =  Math.floor((idx-1)/2);
            let parent = this.values[parentIdx]; 
            if(element <= parent) break;
            this.values[parent] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    extractMax() {

       const max = this.values[0];
       const end = this.values.pop;
       if(this.values.length > 0 ){
        this.values[0] = end;
        this.sinkDown();
       }
 
       return max;
     }
     sinkDown() {
         let idx = 0;
         const length = this.values.length;
         const element = this.values[0];
     
         while(true) {
            let leftChildIdx = idx*2 +1;
            let rightChildIdx = idx*2 +2;
            let leftChild, rightChild;
            let swap = null;
            if(leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if(leftChild > element) {
                    swap = leftChildInx;
                }
            }
            if(rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if((swap === null && rightChild>element) || (swap !==null && rightChild > leftChild)){
                    swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.value[swap];
            this.values[swap] = element;
            idx = swap;
         } 

     }

}