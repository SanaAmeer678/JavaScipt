console.log('Assignment_4')

//Question#1
/*Let’s try 5 array operations.
Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.
Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array.*/
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log( styles.shift() );
styles.unshift("Rap", "Reggae");

//Question#2
/*Write the function sumInput() that:
Calculates and returns the sum of array items.*/
let arr=[4,5,7,10,16]
function sumInput(arr){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum=sum+arr[i];
    }
     return sum
}
 let result=sumInput(arr);
 console.log(result);

//Question#3
/*Write a function filterRange(arr, a, b) that gets an array arr, 
looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
The function should not modify the array. It should return the new array.*/
function filterRange(arr, a, b){
  return arr.filter(item => (a <= item && item <= b));
}
let arr1 = [5, 3, 8, 1];
let filtered = filterRange(arr1, 1, 4);
console.log( filtered ); 
console.log( arr1 ); 

//Question#4
/*Write a function filterRangeInPlace(arr, a, b) that gets an array arr and 
removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
The function should only modify the array. It should not return anything.

For instance:
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
console.log( arr ); // [3, 1] */
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
      // remove if outside of the interval
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  }
  let arr2 = [5, 3, 8, 1];
  filterRangeInPlace(arr2, 1, 4); // removed the numbers except from 1 to 4
 console.log( arr2 ); 

//Question#5
/*You have an array of user objects, each one has user.name. 
Write the code that converts it into an array of names*/
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let users = [ john, pete, mary ];
let names = users.map(item => item.name);
console.log( names );

//Question#6
/*You have an array of user objects, each one has name, surname and id.
Write the code to create another array from it, of objects with id and fullName,
 where fullName is generated from name and surname.*/
 let john1 = { name: "John", surname: "Smith", id: 1 };
let pete1 = { name: "Pete", surname: "Hunt", id: 2 };
let mary1 = { name: "Mary", surname: "Key", id: 3 };
let users1 = [ john1, pete1, mary1 ];
let usersMapped = users1.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
console.log( usersMapped[0].id ); 
console.log( usersMapped[0].fullName )

//Question#7
/*Write the function getAverageAge(users) that gets an array of objects 
with property age and returns the average age.*/
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
  let joHn = { name: "John", age: 25 };
  let peTe = { name: "Pete", age: 30 };
  let maRy = { name: "Mary", age: 29 };
  let aRr = [ joHn, peTe, maRy ];
console.log( getAverageAge(aRr) )

//Question#8
/*Let arr be an array.
Create a function unique(arr) that should return an array with unique items of arr.*/
function unique(arr) {
    return Array.from(new Set(arr));
  }
let strings = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log( unique(strings) );
