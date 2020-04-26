class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTrees {
    constructor() {
        this.root = null
    }
    insert(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while (true) {
                if (value === current.value) return undefined;
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
    find(value) {
        if (!this.root) return false;
        let current = this.root,
            found = false;
        while (!found && current) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }
    contains(value) {
        if (!this.root) return false;
        let current = this.root;
        while (!found && current) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right
            } else {
                return true
            }
        }
        return false;
    }
    //there is error in mu method
    BFSMyVersion() {
        let queue = [], visited = [];
        if (!this.root) return false;
        queue.push(this.root);
        while (queue) {
            let temp = queue.shift();
            visited.push(temp);
            if (temp.left) queue.push(temp.left);
            if (temp.right) queue.push(temp.right)
        }
        return visited;
    }
    BFS() {
        let data = [], queue = [], node = this.root;
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }
    DFSPreOrder() {
        let data = [], current = this.root;
        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }
    DFSPostOrder() {
        let data = [], current = this.root;
        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(current);
        return data;
    }
    DFSInOrder() {
        let data = [], current = this.root;
        function traverse(node) {
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }

}
