class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.pre = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.pre = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (this.length == 0) return undefined;

        let oldTail = this.tail;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = oldTail.pre;
            this.tail.next = null;
            oldTail.pre = null;
        }
        this.length--;
        return oldTail;
    }
    shift() {
        if (!this.head) return undefined;
        let oldHead = this.head;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.pre = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(val) {
        let newNode = new Node(val);
        if (this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.pre = newNode;
            this.head = newNode;
        }
        this.length++
        return this;
    }
    get(val) {
        if (val < 0 || val > this.length - 1) return null;
        let counter = 0;
        if (val <= this.length / 2) {
            let current = this.head;

            while (current) {
                if (val == counter) return current;
                current = current.next;
                counter++;
            }
        }
        if (val > this.length / 2) {
            let current = this.tail;
            while (current) {
                if ((this.length - 1 - val) == counter) return current;
                current = current.pre;
                counter++;
            }
        }
    }
    set(index, val) {
        let foundNode = this.get(index)
        if (foundNode != null) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index == 0) return !!this.unshift(val);
        if (index == this.length) return !!this.push(val);

        let newNode = new Node(val);
        let prevNode = this.get(index - 1);
        let nextNode = this.prevNode.next;

        prevNode.next = newNode;
        newNode.next = nextNode;
        newNode.pre = prevNode;
        nextNode.pre = newNode;
        this.length++;
        return true;


    }
    remove(index) {
        if (index < 0 || index > this.length) return undefined;
        if (index == 0) return this.shift(val);
        if (index == this.length - 1) return this.pop(val);

        let removedNode = this.get(index);
        let prevNode = removedNode.pre;
        let nextNode = removeNode.next;
        prevNode.next = nextNode;
        nextNode.pre = prevNode;
        this.length--;
        removeNode.pre = null;
        removeNode.next = null;
        return removedNode;

    }
    reverse() {
        let curr = this.head;
        let temp;
        while(curr != null) {
            temp = curr.prev;
            curr.prev = curr.next;
            curr.next = temp;
            curr = curr.prev;
        }
        this.head = this.tail;
        this.tail = curr
        return this;
    }
}

let list = new DoublyLinkedList();
list.push(1);
list.push(5);
list.push(9);
// console.log(list.pop());
// console.log(list.shift());
// console.log(list.unshift(0));
// console.log(list.get(3))
console.log(list.reverse())

