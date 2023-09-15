console.log('Assesment_5')
// Question#4
//Make an api call using a promise and handle error as well.
// const fetchPromise = fetch("https://reqres.in/api/users?page=1");
// fetchPromise.then(response => {
//   return response.json();
// }).then(people => {
//   console.log(people);
//  }).catch(error=>{
//     console.error(error.message) 
// });
// Question#5
//Make an API call using Async/Await and handle errors as well. 
const fetchApiData=async()=>{
    try{
    const res=await fetch("https://restcountries.com/v3.1/all")
    const res_1=await (res.json())
    console.log( res_1)
    }catch(error){
        console.error(error.message)
    }
}
 fetchApiData();
