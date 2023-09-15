// console.log("Assignment 15")
// //const { error } = require('console');
// //Q NO1: Write an async function to call an api and log its response
// const callApi = async () => {
// const res = await fetch("https://reqres.in/api/users?page=1");
// console.log(await res.json()) 
// return res;
// } 
// callApi();

// //Qno 2: Write an async function that fetches data from multiple APIs concurrently 
// //and returns the combined result.
// let multiurl ="https://reqres.in/api/users?page=1"
// let multiurl2 ="https://reqres.in/api/users?page=2"
// const fetchApiData1 = async() =>{
//     const response =await fetch(multiurl);
//     const res=await response.json()
//     const respone2 =await fetch(multiurl2);
//     const res_1= await respone2.json()
//     const res_3 = res.data.concat(res_1.data);
//     console.log(res_3)
// }
// fetchApiData1();


// //Question no3
// /*Write 3 async functions(2 child, 1 parent), use 1 to fetch data from api,
// 2nd to convert it to json and third to initiate the call. Handle errors in the parent only.*/
// // Parent function:
// const parentFunction=async()=> {
//     try {
//       const apiData = await fetchData('https://reqres.in/api/users?page=1');
//       const jsonData = await convertToJson(apiData);
//       console.log('JSON data:', jsonData);
//     } catch (error) {
//       console.error('An error occurred:', error.message);
//     }
//   }
// // Child function 1: Fetch data from API
// const fetchData =async(url)=> {
//     const response = await fetch(url);
//     const data = await response.json();
//    // console.log(response)
//     return data;
// }

// // Child function 2: Convert data to JSON
// const convertToJson=async(data)=> {
//     const jsonData = JSON.stringify(data);
//     return jsonData;
//  }

// // Call the parent function
// parentFunction();

// //QUESTION NO 4
// /*4: Write 3 async functions(2 child, 1 parent), use 1 to fetch 
// data from api, 2nd to convert it to json and third to initiate the call. 
// Handle errors individually for each function. 
//  // Parent function: Initiate the calls and handle errors individually*/
//  const parentFunction_1=async()=> {
//     try {
//       const apiData = await fetchData_1("https://reqres.in/api/users?page=1");
//       console.log('Fetched data:', apiData);
  
//       const jsonData = await convertToJson_1(apiData);
//       console.log('JSON data:', jsonData);
//     } catch (error) {
//       console.error('An error occurred:', error.message);
//     }
//   }
// // Child function 1: Fetch data from API
// const fetchData_1=async(url)=> {
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error('Failed to fetch data from API');
//       }
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       throw new Error('Error fetching data from API: ' + error.message);
//     }
//   }
  
//   // Child function 2: Convert data to JSON
//  const convertToJson_1=async(data)=> {
//     try {
//       const jsonData = JSON.stringify(data);
//       return jsonData;
//     } catch (error) {
//       throw new Error('Error converting data to JSON: ' + error.message);
//     }
//   }
    
//   // Call the parent function
//   parentFunction_1();
  
//  //Question#5
 
// /* Create an async function that reads a file from the local filesystem and returns its contents.
// Text file with data: ‘My name is your-name’*/

// const fs = require ('fs').promises;
// async function readFile() {
//     try {
//       const data = await fs.readFile('data.txt', 'utf8');
//       console.log(data);
//     } catch (error) {
//       console.error('Got an error trying to read the file:' , error.mesaage);
//     }
//   }
// readFile();
// //Question# 6
// /*6: Implement an async function that reads a list of URLs from a 
// file and fetches the contents of each URL concurrently.

// Text file should contain comma separated links
// https://reqres.in/api/users?page=1&per_page=3,
// https://reqres.in/api/users?page=2&per_page=3,
// https://reqres.in/api/users?page=3&per_page=3,

// Hint: Use Promise.all*/

// const fs = require('fs');
// const fetchUrlsFromFile =async() =>{
//   try {
//     promises.readFile('data1.txt', 'utf-8',(error,data)=>{
//       console.log(data)
//     });
//     const urls = data.split(',').map(url => url.trim());

//     const fetchPromises = urls.map(async (url) => {
//       const response = await fetch(url);
//       const json = await response.json();
//       console.log(json.data)
//       return json;
//     });

//     const results = await Promise.all(fetchPromises);
//     return results;
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// fetchUrlsFromFile()
//   .then((results) => {
//     console.log('Results:', results);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });
  

// const fetchUrlsFromFiles = async() => {
//   const response =await fetch("data1.txt").then((res)=> res.json())
//   .then((data)=>console.log(data))
//   const data =await response.json();
// console.log(data);
// //  return response.json();
// }
//  fetchUrlsFromFiles()