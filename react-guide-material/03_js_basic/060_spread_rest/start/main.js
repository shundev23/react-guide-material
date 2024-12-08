const nums = [3, 1, 4, 1, 5, 10, 2, 6];

var max = Math.max(...nums);
var min = Math.min(...nums); 
console.log(max);
console.log(min);


let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let newArr = [...arr1, 10, ...arr2];
let newArr1 = arr1;
// newArr.push(4)
console.log(newArr);

const obj = {
  name: "Tom",
  age: 22,
};
const newObj = { ...obj };
newObj.name = 'John';

console.log(obj, newObj);

const restA = (...argA) => console.log(argA);
restA(1, 3)

const restB = (n, ...argB) => console.log(n,argB);
restB(1, 3, 4)
