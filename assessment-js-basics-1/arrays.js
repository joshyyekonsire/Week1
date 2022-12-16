//////////////////PROBLEM 1////////////////////
console.log ("PROBLEM 1");
console.log ("----------------------------------------------------------------------");
const faveColors = ['red', 'green', 'black']
let colorCopy = faveColors.slice();
// Print answers
console.log (colorCopy);
console.log ("----------------------------------------------------------------------");
//////////////////PROBLEM 2////////////////////
console.log ("PROBLEM 2");
console.log ("----------------------------------------------------------------------");
colorCopy.push('yellow');
// Print answers
console.log (colorCopy);
console.log ("----------------------------------------------------------------------");
//////////////////PROBLEM 3////////////////////
console.log ("PROBLEM 3");
console.log ("----------------------------------------------------------------------");
const numbers = [1, 2, 3, 4, 5]
let middleNums = numbers.splice(1,3,);
// Print answers
console.log (middleNums);
console.log(numbers);
console.log ("----------------------------------------------------------------------");
//////////////////PROBLEM 4////////////////////
console.log ("PROBLEM 4");
console.log ("----------------------------------------------------------------------");
const bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352]
// New Array to grab outputs
let answer = [];
// Need a loop to go through bigOrSmallArray
for(let i = 0; i < bigOrSmallArray.length; i++) {
if (bigOrSmallArray[i] <= 100) {
answer.push('small')
} else {
answer.push('big') 
}
// Print answers and original
console.log (answer[i])
console.log (bigOrSmallArray[i])
}
console.log ("----------------------------------------------------------------------");