class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let tempNode = new Node(val);
        if (!(this.head)) {
            this.head = tempNode;
            this.tail = this.head
        } else {
            this.tail.next = tempNode;
            this.tail = tempNode;
        }
        this.length++;
        return this;
    }
    traverse() {
        let curr = this.head;
        while (curr) {
            console.log(curr.val);
            curr = curr.next;
        }
    }
    // popMyVersion() {
    //     if (!this.head) return undefined;
    //     let curr = this.head;
    //     let tempLength = this.length;
    //     console.log(tempLength)
    //     while (curr && tempLength > 1) {
    //         console.log(curr.val);
    //         if (tempLength == 2) {
    //             curr.next = null;
    //             this.tail = curr;
    //             this.length--
    //             console.log(this);
    //         }
    //         curr = curr.next;
    //         tempLength--;
    //     }
    //     return this;
    // }
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while( current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length --;
        if(this.length === 0 ) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        if(this.length == 0) return undefined;
        let current = this.head; 
        this.head = current.next;
        this.length --;
        if(this.length === 0 ) {
            this.tail = null;
        }
        return current; 
    }
    unshift(val){
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        if(index<0 || index > this.length) return null;
        let counter = 0;
        let current = this.head;
        while(current){
            if(counter == index){
                return current;
            }
            current = current.next;
            counter++;
        }
    }
    set(index, val){
        if(this.get(index)){
           this.get(index).val = val;
           return true;
        } 
        return false;
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index == this.length) !!this.push(val);
        if(index == 0) !!this.unshift(val);
        let newNode = new Node(val);
        let prev = this.get(index-1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;

        this.length++
        return true;
    }
    remove(index) {
        if(index < 0 || index >= this.length) return false;
        if(index == this.length-1) this.pop();
        if(index == 0) this.shift();
        let temp = this.get(index-1);
        let removedNode = temp.next;
        temp.next = temp.next.next;
        this.length --;
        return removedNode;
    }
    print() {
        let arr =[];
        var current = this.head;
        while(current) {
            arr.push(current.val);
            current = current.next
        }
        console.log(arr);
    }
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next;
        for(let i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}
let list = new SinglyLinkedList();
list.push("hello");
list.push("google");
list.push("!");
// list.push("end")
// list.pop();
// console.log(list.shift())
// console.log(list.unshift("first"));
// console.log(list.get(0))
list.print();
list.reverse();
list.print();
