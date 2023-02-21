// .length 
console.log(funStr.length); // 33
console.log("".length); // 0
console.log("This is Crazy".length)
// .split 
wordArray = funStr.split(" "); 
// Note: " " never appears in result: 
// [ "Emma", "shreds", "on", "her",
// "electric", "cello" ]
console.log(wordArray [5].split("")); 
// Split on every letter:
// [ "c", "e", "l", "l", "o" ]  
// .join 
console.log(wordArray.join()); 
// Note: "," is used by default:
// "Emma,shreds,on,her,electric,cello"
console.log(wordArray.join("-")); 
// Param "-" inserted between words:
// "Emma-shreds-on-her-electric-cello"
console.log(wordArray.join("")); 
// "Emmashredsonherelectriccello"
// .concat 

// for...in loops 

// switch/case  

console.log(1 + 2 + "3" + "4" + 5 + 6);

for(var i=0; i<10; i++) {
    console.log(i);
    i = i + 3; 
}
    
console.log("outside of the loop " + i);