console.log("Assesment_3")
/*Question NO 1:
This is a staircase of size n=4:
#
##
###
####
Its base and height are both equal to n. It is drawn using # symbols
and spaces. Any spaces do
not precede the last line.
Write a program that prints a staircase of size n.
Function Description
Complete the staircase function in the editor below.
staircase has the following parameter(s):
● int n: an integer
Print
Print a staircase as described above.*/
//Code:
function staircase(n) {
var line = '';
for(let i = 1; i <n +1; i++) {
line += Array(n-i).fill(' ').join('');
line += Array(i).fill('#').join('');
console.log(line);
line = '';
}
}
function main() {
const n = parseInt(readLine().trim(), 10);
staircase(n);
}
/*Question 2:
find the minimum and maximum values
Given five positive integers, find the minimum and maximum values that can be calculated

by summing exactly four of the five integers. Then print the respective minimum and
maximum values as a single line of two space-separated long integers.
Example
arr= [1,3,5,7,9]
The minimum sum is 1+3+5+7+9=16 and the maximum sum is 3+5+7+9=24. The function
prints
16 24
Function Description
Complete the miniMaxSum function in the editor below.
miniMaxSum has the following parameter(s):
● arr: an array of 5 integers
Print
Print two space-separated integers on one line: the minimum and maximum sum of 4 of 5
elements.*/
//Code:
function miniMaxSum(arr) {
var max = -Infinity;
var min = Infinity;
for (var i = 0; i < arr.length; i++) {
var sum = 0;
for (var j = 0; j < arr.length; j++) {
if ( i != j ) {
sum += arr[j];
}
}
if (sum < min) min = sum;
if (sum > max) max = sum;
}
console.log(min, max);
}
function main() //{
//const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp
//=> parseInt(arrTemp, 10));

//miniMaxSum(arr);
//}
/*Question no 3:

LInk:https://www.hackerrank.com/challenges/birthday-cake-
candles/problem?isFullScreen=true

You are in charge of the cake for a child&#39;s birthday. You have decided the cake will have one
candle for each year of their total age. They will only be able to blow out the tallest of the
candles. Count how many candles are tallest.
Example
Candles = [4,4,1,3]
The maximum height of candles is 4 units high. There are of them 2, so return 2.
Function Description
Complete the function birthdayCakeCandles in the editor below.

birthday cake candles have the following parameter(s):
● int candles[n]: the candle heights
Returns
● int: the number of candles that are the tallest*/
//Code:
function birthdayCakeCandles(candles) {
let blownCandleCount = 0;
let max = 0;
for(let i = 0; i < candles.length; i++){
if(candles[i] > max){
max = candles[i];
blownCandleCount = 1;
} else{
if(max == candles[i]){
blownCandleCount++;
}

}
}
return blownCandleCount;
}
function main() {
const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
const candlesCount = parseInt(readLine().trim(), 10);
//const candles = readLine().replace(/\s+$/g, '').split(' ').map(can
//dlesTemp => parseInt(candlesTemp, 10));
//const result = birthdayCakeCandles(candles);
//ws.write(result + '\n');
//ws.end();
}
//Question
/*Given a time in 12-hour AM/PM format, convert it to military (24-hour)
time.
Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
Example
● Return &#39;12:01:00&#39;.
● Return &#39;00:01:00&#39;.
Function Description
Complete the time conversion function in the editor below. It should
return a new string
representing the input time in 24-hour format.
time conversion has the following parameter(s):
● string s: a time in 12-hour format*/
//Code:
function timeConversion(input) {
input = input.split(':');
var hours = parseInt(input[0]);
var timeFrame = input[2].slice(2);
var seconds = input[2].slice(0,2);
if ((timeFrame === 'PM') && (hours !== 12)) {
hours += 12;
}
if ((hours === 12) && (timeFrame === 'AM')) {
hours = '00';
} else if (hours < 10) {
hours = '0' + hours.toString();
} else {
hours = hours.toString();
}
var result

return result=([hours, input[1], seconds].join(':'));
}
function main() {
const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
const input = readLine();
var result = timeConversion(input);
console.log(result);
ws.write(result + '\n');
ws.end();
}