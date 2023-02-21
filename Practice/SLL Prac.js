function double(arr){
    for(let i=0; i<arr.length; i++){
        arr[i]*=2
    }
    return arr
}
let arr=[1,2,3,4,5]
double(arr)
console.log(arr) //What gets console logged here?

class Node {
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    addFront(val) {
        // Creating a new node object with the value provided
        let new_node = new Node(val);
        // Checking to see if the current list does not have a head node (if the list is empty)
        // If the list is empty, place the new node as the head 
        if(!this.head) {
            this.head = new_node;
            return this;
        }
        // If the list is not empty, assign the head to be the next node to the new node (Blue Arrow in picture above)
        new_node.next = this.head;
        // Then finally assign the new_node to be the new head of the list (Red Arrow in picture above)
        this.head = new_node;
        return this;
    }
}

class SLLNode {
    constructor(val, nextNode = null) {
        this.data = val; //Hold data
        this.next = nextNode;//Points to next node in list
    }
}
// let node1 = new SLLNode(30);
// console.log(node1);
// let node2 = new SLLNode(55, node1);
// console.log(node2);

class SLL { // Singly Linked List
    constructor() {
        this.head = null; // Head pointing to first node
    }

    addFront(val) {
        let newNode = new SLLNode(val)
        // if(!this.head) Check for an existing head and add
            newNode.next = this.head;
            this.head = newNode;
            return this; //Allows for chaining
        }

        printValues() {
            let curNode = this.head //Start at beginning of list
        }
    }


let newSLL = new SLL();
newSLL.addFront(10);
// console.log(newSLL);
newSLL.addFront(5);
newSLL.addFront(74);
console.log(newSLL);