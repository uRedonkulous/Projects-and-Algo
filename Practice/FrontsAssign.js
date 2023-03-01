// Fronts
// Use classes, attributes, and methods in the JavaScript language for all challenges. 
// Use only a single JavaScript file for this assignment. 
// All examples are done in order, starting with a new instance of the SLL class.

class SLLNode { //Singly Linked List class
    constructor(data, nextNode = null) {
        this.data = data; //Holds data
        this.next = null;//Points to next node in list
    }
}

class SLL { // Singly Linked List
    constructor() {
        this.head = null; // Head pointing to first node
    }
// Add Front
// Write a method that accepts a value and create a new node, 
// assign it to the list head, and return a pointer to the new head node.

    addFront(value) {
        let newNode = new SLLNode(value)
            newNode.next = this.head;
            this.head = newNode; //Points to new head
            return this;
        }

// Remove Front
// Write a method to remove the head node and return the new list head node. If the list is empty, return null.

    removeFront() { //Remove first number at head of SLL
        if(this.head == null) {
            return this;
        }
        let removeNode = this.head;
        this.head = removeNode.next;
        removeNode.next = null;
        return this;
    }

// Front
// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.

    front() { //Display number at front of SLL
        if (this.head == null) { //If list is empty
            return null;
        } else { 
            return this.head.value;
        }
    }

// Display
// Use classes, attributes, and methods in the JavaScript language for this challenge. Use only a single JavaScript file for this assignment, it may be the same from the Fronts assignment. All examples are done in order, starting with a new instance of the SLL class.

// Create display() that uses a while loop and a runner to return a string containing all list values. Build what you wish console.log(myList) did!

    display() {
        //Runner
        let runner = this.head;
        //Create an empty string
        let listStr = "";
        while (runner !== null) {
            listStr += runner.data;
            // Runs through code and appends a comma and space after data
            if (runner.next !== null) {
                listStr += ", ";
            }
            runner = runner.next;
        }
        // Return new string
        return listStr;
    }
}
    var SLL1 = new SLL(); //Create new empty SLL
    // SLL1.addFront(18);
    // SLL1.addFront(5);
    // // SLL1.addFront(73);
    // // console.log(SLL1.front());
    // // console.log(SLL1);
    SLL1.addFront(18) // => Node { data: 18, next: null }
     SLL1.addFront(5) // => Node { data: 5, next: Node { data: 18, next: null } }
     SLL1.addFront(73) // => Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }
    // // SLL1.removeFront(); // => Node { data: 5, next: Node { data: 18, next: null } }
    // // SLL1.removeFront(); // => Node { data: 18, next: null }
    console.log(SLL1);
    // SLL1.front() // => 18
    // // console.log(SLL1);
    // console.log(SLL1);
    // SLL1.removeFront() // => null
    // console.log(SLL1);
    // SLL1.front() // => null
    console.log(SLL1.display());

    // SLL1 = new SLL()
    // SLL1.addFront(76); //=> Node { data: 76, next: null }
    // console.log(SLL1.display());
    // SLL1.addFront(2);// => Node { data: 2, next: Node { data: 76, next: null } }
    // // SLL1.display() //=> "2, 76"
    // SLL1.addFront(11.41); //=> Node { data: 11.41, next: Node { data: 2, next: Node { data: 76, next: null } } }
    // console.log(SLL1.display()) //=> "11.41, 2, 76"



    // Examples:

// SLL1 = new SLL()

// // Examples:
// let SLL1 = new SLL();
// SLL1.addFront(5);
// SLL1.addFront(73);
// console.log(SLL1)
// SLL1.removeFront(); // => Node { data: 5, next: Node { data: 18, next: null } }
// SLL1.removeFront(); // => Node { data: 18, next: null }
// console.log(SLL1)

// Examples:

// SLL1.front() // => 18
// SLL1.removeFront() // => null
// SLL1.front() // => null

