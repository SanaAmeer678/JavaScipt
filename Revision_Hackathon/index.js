console.log("Revision Hackathon")
//Question#1 Creat a variable without assigning any value to it and check its value
let num;
console.log(num);

//Question#2
/*Create a variable assign a string value to it
then again assign it with value of type number
then assign again with value of type boolean
and print the end result*/
let value="Hello"
 value=123
 value=true
console.log(value);

//Question#3
/*Create a variable with let keyword and
then declare the variable with same name using const
and see the behavior*/

//let name ="sana"
const name="Sana"
console.log(name);

//Question#4Create a variable with let keyword and
/*then declare the variable again with same name using let
and see the behavior*/

//let name_3="sana"
//let name_3="Sana"
console.log(name_3)

//Question#5
/*Create two variables with value type string and number respectively.
Add number to number;
Add string to string;
Add string to number;
Print all 3 outputs*/

let str2="Hello"
let num2=1234
//let sum=0
sum=num2+num2
sum1=str2+str2
sum2=str2+num2
console.log(sum)
console.log(sum1)
console.log(sum2)

//Question#6
/*Create three variables with value type string,number & boolean respectively.
Add number and string and boolean;
Add boolean & number & string;
Add string & number & boolean;
Add string & boolean & number;
Print all outputs*/

let str3="Hello"
let num3=1234
let bool=true
sum_1=num3+str3+bool
sum11=bool+num3+str3
sum22=str3+num3+bool
sum33=str3+bool+num3
console.log(sum_1)
console.log(sum11)
console.log(sum22)
console.log(sum33)

//Question#7
/*Create a variable username and age
and add the value dynamically to string
print "My name is ____, I am ____ years old"*/

let userName="Sana"
let age=20
let result=`My name is ${userName} and age is ${age}`
console.log(result)


//Question#8
//Create a variable and check its type

let a="678"
console.log(typeof a)

//Question#9
/*Create an array of length 10, remove an item from the end,
add 2 new items at the end and then check the size of array.
then remove value at index 7 of the array.*/

let arr=[1,2,3,4,5,6,7,8,9,10]
arr.pop()
console.log(arr)
arr.push(11,12)
console.log(arr)
arr.splice(7,1)
console.log(arr)
//delete index[7]
let size1=arr.length
console.log(size1)

//Question#10
/*Create an object having keys name & age,
add new key 'email' with value 'abc@xyz.com'
change the age to true, 
create a copy of the object and then
delete name key from that object*/

const newObj = {
    name: 'Samia',
    age: 18
  }
  newObj.email = 'abc@xyz.com';
  newObj.age = true;
  const newObjCopy = {...newObj};
  delete newObjCopy['name']
  console.log(newObj)
  console.log(newObjCopy)

//Question#11
/*if temperature is greater than and equal to 40 degrees,
print 'Ac is required',
if temperature is less than and equal to 5 degrees,
print 'Heater is required',
otherwise print 'Weather seems cool'*/

let temp=49
if(temp>=40)
console.log("Ac is required")
else if(temp<=5)
console.log("Heater is required")
else
console.log("Weather seams cool")

/*Question#12 
/*if name start with 'A or a' and age is greater than 15,
print 'Person name with along with its age',
if name start with 'X' and age is undefined,
print 'Unknown Data',
if name consist of 10 letters or age is greater than 0
print 'Name contains 10 letters'
otherwise print 'Data is faulty'*/

let namme="Amna"
let age_5=17
if(namme[0]===('A'||'a') && age_5>15){
   console.log("person name with along with its age")
}
else if(namme[0]==='X' && !age_5){
    console.log("unknown Data")
}
else if(namme.length===10 && age_5>0){
    console.log("name contains 10 letters")
}
else
   console.log("Data is faulty")


   //Question#13
   /*Create left triangle having length 5
   -  /*Create left triangle having length 5
   - Create triangle having length 5
   Hint: Use Loops and *  */
   function drawTriangle(t){

    for (let i=1; i <= t; i++)
    {
      let eachLine = ''
  
        for (let j=1; j<=i; j++)     //Create left triangle having length 5
        {
          eachLine += j + " "
        }
        eachLine = eachLine.trim();
        console.log(eachLine);
    }
  
  }
  
  let t = 5 ;
  drawTriangle(t);


   //Create Right triangle having length 5
   console.log('RightTriangle ')
   const printRightTriangle = (n) => {
    let output='';
    for (let i = 1; i <= n; i++) {
     output +="*".repeat(i).padStart(n) + "\n";
    }   
    return output;
  }
  
  console.log(printRightTriangle(5));
