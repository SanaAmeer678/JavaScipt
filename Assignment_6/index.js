console.log('Assignment_6')
//Complete Array Methode Assignment

//.....ARRAYS METHODS.....
// Array length
const fruits = ["Banana", "Orange","Grapes", "Apple", "Mango"];
let size = fruits.length;
console.log(size);

//Array toString()
let size_1 =fruits.toString();
console.log(size_1);

//join method (joins all array elements into a string)
let size_2= fruits.join(" * ");
console.log(size_2);

//Array pop()
fruits.pop();
console.log(fruits);

//Array push()
fruits.push("banana");
console.log(fruits);

//Shifting Elements 
//(Shifting is equivalent to popping, but working on the first element instead of the last)
//Array shift()
fruits.shift();
console.log(fruits);

//Array unshift()
//adds a new element to an array (at the beginning), and "unshifts" older elements
fruits.unshift("PineApple");
console.log(fruits);

//delete.fruits[0];

//Merging (Concatenating) Arrays
const arr_1=[1,2,3,4];
const arr_2=[5,6,7,8];
const arr_3= arr_1.concat(arr_2);
console.log(arr_1);
console.log(arr_2);
console.log(arr_3);

//Flattening an Array
//Flattening an array is the process of reducing the dimensionality of an array.
const myArr = [[1,2],[3,4],[5,6]];
console.log(myArr);
const newArr = myArr.flat();
console.log(newArr);

//Splicing and Slicing Arrays
//Array splice() used to add new items to an array
let fruit = ["Banana", "Orange", "Apple", "Mango"];
fruit.splice(2,0, "Lemon", "Kiwi"); 
console.log(fruit);

const fruit1 = ["Banana", "Orange", "Apple", "Mango"];
fruit1.splice(2, 2, "Lemon", "Kiwi");
console.log(fruit1);

fruit1.splice(0,1);
console.log(fruit1);

//Array slice()
//fruit.slice(3);
console.log(fruit.slice(2))

//Sorting an Array
let ar_1 = [23,43,1,2];
ar_1.sort();
console.log(ar_1);

//Reversing an Array
ar_1.reverse();
console.log(ar_1);

//Find the Highest (or Lowest) Array Value
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points)
console.log(points[0])
console.log(points[points.length-1])

//Sorting Object Arrays
const cars = [
    {type:"Mac", year:2020},
    {type:"Apple", year:2010},
    {type:"BMW", year:2016}
  ];
cars.sort(function(a, b){return a.year - b.year});
console.log(cars);

//Array flatMap()
const myAr = [1, 2, 3, 4, 5, 6];
const newAr = myAr.flatMap((x) => x * 2);
console.log(myAr);
console.log(newAr);

//Array filter()
const numbers = [45, 4, 9, 16, 25];
const over = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(over);

//Array reduce()
const number = [45, 4, 9, 16, 25];
let sum = number.reduce(myFunction);
function myFunction(total, value) {
  return total + value;
}
console.log(sum);

// Array every()
const num = [45, 4, 9, 16, 25];
let allOver = num.every(myFunction);
let someOver = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(allOver);
console.log(someOver);

//Array.isArray
//. It returns true if the value is an array, and false otherwise.

alert(Array.isArray({})); // false
alert(Array.isArray([])); // true

//Array ForEach
// compute square root of each element
//let numbers = [1, 3, 4, 9, 8];
numbers.forEach(computeSquare);
console.log(numbers);