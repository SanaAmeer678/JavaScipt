console.log('Assignment_5')
//QUESTION NO 1
/*Write a function that uses setTimeout to log the message "Hello, World!" after a delay of 2 seconds.*/

setTimeout(function(){
console.log("Hello, World!");
},2000);

//QUESTION NO 2
/*Implement a function that uses setInterval to display the current time in the format 
"HH:MM:SS" every second.*/

setInterval(function(){
console.log("12:09:09");
},1000);

//QUESTION NO 3
/*Create a function called multiply that takes two numbers as 
arguments and returns their product. Implement a callback function
called handleResult that logs the result to the console after a delay of 1 second.*/

function multiply(a,b) {
   return  a*b;}
function handleResult(result){
    setTimeout(function(){
        console.log("THE Result is",result);
    },1000);
}
   let resPro = multiply(18,25);
   handleResult(resPro);

//QUESTION NO 4   
/*Write a function called countdown that takes a number as an argument and
logs the numbers from the given number to 1 with a delay of 1 second between each
number. Use promises to handle the asynchronous behavior.*/

function countdown(num) {
return new Promise((resolve, reject) => {
    if (typeof num !== 'number' || num <= 0) {
        reject(new Error('Invalid number provided'));
    }else {
    const timer = (currentNumber) => {
    if (currentNumber === 0) {
    console.log('Countdown complete!');
        resolve();
    } else {
    console.log(currentNumber);
    setTimeout(() => timer(currentNumber - 1), 1000);
    }
};
timer(num);
}
}).then(() => {
    console.log('Countdown finished!');
    })
    .catch(error => {
    console.log(error);
    });
}
countdown(10)


//QUESTION NO 5
/*
Implement a function called fetchData that fetches data from the 
"https://jsonplaceholder.typicode.com/posts" API using fetch.
 Handle the response using promises and log the data to the console.*/
 function fetchData(){
  return fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => {
  return response.json();
}).then(data => console.log(data)).catch(x => console.log(x))
 }
 fetchData();

 //QUESTION NO 6
 /*Create a function called sum that takes an array of numbers as an argument
  and returns a promise. The promise should resolve with the sum of all the 
  numbers in the array after a delay of 2 seconds.*/

let arr1=[11,22,33,44,55,66]
function sum(arr1){
return new Promise((resolve,reject) =>{
    setTimeout(() => {
        let sum =arr1.reduce((a,b)=>a+b,0); 
        resolve(sum);
    },2000);
}).then(x =>{
    console.log("Sum of Array is:",x)
})
}

sum(arr1)
console.log(arr1)

//QUESTION NO 7
/* Implement a function called repeat that takes a function and a number as arguments. 
The function should execute the given function repeatedly,with a delay of 500 
milliseconds between each execution, for the specified number of times.*/

function repeat(func, number) {
return new Promise((resolve, reject) => {
    let counter = 0;
    const intervalId = setInterval(() => {
    func();
    counter++;
    if (counter === number) {
    clearInterval(intervalId);
    resolve();
    }
}, 0.05); 
}).then(() => {
console.log("Execution completed");
});;
}
function printName() {
console.log("Sana!");
}
repeat(printName, 8)

//QUESTION NO 8
/* Write a function called fetchRandomUser that uses fetch to retrieve data from the
"https://randomuser.me/api/" API. The function should return a promise that resolves 
with the first name and last name of a random user after a delay of 1 second.*/

function fetchRandomUser() {
return new Promise((resolve, reject) => {
    setTimeout(() => {
        fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(data => {
        let user = data.results[0]
    
        const firstName = user.name.first;
        const lastName = user.name.last;
        resolve({ firstName, lastName });
        })
    }, 1000);
}).then(user => {
    console.log("First Name:", user.firstName);
    console.log("Last Name:", user.lastName);
    }).catch(x => console.log(x));
}
fetchRandomUser()

//QUESTION NO 9
/*Create a function called waitForCondition that takes a condition function and an interval
as arguments. The function should repeatedly check the condition every specified interval, 
and once the condition evaluates to true, it should resolve a promise. Implement a 
callback function that logs a success message after the condition is met.*/

function waitForCondition(condition, interval) {
return new Promise((resolve, reject) => {
    setInterval(() => {
    if (condition()) {
        resolve();
    }
    });
}).then(() => {
    console.log("Condition met Successfully!");
    }).catch(error => {
    console.error("Error:", error);
    });
}
function isConditionMet() {
return Math.random() < 100; 
}  
waitForCondition(isConditionMet,1000)
    
//QUESTION NO 10
/*Write a function called fetchMultipleUrls that takes an array of URLs as an argument.The function 
should fetch data from all the URLs concurrently using promises and return an array of the resolved
data. Each request should have a timeout of 3 seconds, and ifany request takes longer than the 
timeout, it should be skipped and the corresponding element in the result array should be set to null. */
const urls = ["https://randomuser.me/api/","https://jsonplaceholder.typicode.com/posts"];
function fetchMultipleUrls(urls) {
let fetchPromises = urls.map(url =>
    new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(null); // Timeout reached, resolve with null
    }, 3000);
    fetch(url)
        .then(response => response.json())
        .then(data => {
        resolve(data);
        }).catch(error => {
            console.log(error);
        });
    }).then(results => {
        console.log("Results:", results);
      })
      .catch(error => {
        console.error("Error:", error);
      })
);
return Promise.all(fetchPromises);
}
fetchMultipleUrls(urls) 
   