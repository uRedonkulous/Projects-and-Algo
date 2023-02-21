//Loop through Arrays
for(var i=x;i< arr.length; i>= index, i++){
    arr[i] = arr[i+x]
}


// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!

// Examples:

// pushFront([5,7,2,3], 8) => [8,5,7,2,3]
// pushFront([99], 7) => [7,99]

//Create function
function pushFront(arr, val) {
    //Loop through array 
    for(let i = arr.length; i >= 0; i--){
        arr[i] = arr[i-1]
    }
    arr[0] = val
    return arr
}
console.log(pushFront([99],7))

// Pop Front
// Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!

// Examples:

// popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
// popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function

function popFront(arr) {
    // save first numb in array
    let temp = arr[0]
    // shift array to left
    for(var i=0;i< arr.length; i++){
        arr[i] = arr[i+1]
    }
    // delete last numb in array
    arr.length = arr.length-1
    // log array
    console.log(arr)
    // log saved numb that was removed
    return temp
}
console.log(popFront([4,5,7,9]))

// Insert At
// Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!

// Examples:

// insertAt([100,200,5], 2, 311) => [100,200,311,5]
// insertAt([9,33,7], 1, 42) => [9,42,33,7]

function insertAt(arr, index, val){
    // Look through Array
    for(let i = arr.length; i >= index; i--){
        arr[i] = arr[i-1]
    }
    // change index to given value
    arr[index] = val
    // log new array
    return arr
}
console.log(insertAt([9,33,7], 1, 42))

// BONUS: Remove At
// Given an array and an index into array, remove and return the array value at that index. Prove the value is removed from the array by printing it. Think of popFront(arr) as equivalent to removeAt(arr,0).

// Examples:

// removeAt([1000,3,204,77], 1) => 3 returned, with [1000,204,77] printed in the function
// removeAt([8,20,55,44,98], 3) => 44 returned, with [8,20,55,98] printed in the function
// [8,20,55,44,44,98]

function removeAt(arr, index){
    // create temp array
    let temp = arr[index]
    // shift through array to given index
    for(var i=1;i< arr.length; i>= index, i++){
        arr[i] = arr[i+1]
    }
    // delete last numb in array
    arr.length = arr.length-1
    // log array
    console.log(arr)
    // log arr[index]
    return temp

}
console.log(removeAt([1000,3,204,77], 1))

var arr = [2,6,10,52]

let i = 0;

while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

console.log(arr)