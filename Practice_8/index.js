console.log('Practice 8');

console.log('Async Await')

// fetch('https://reqres.in/api/users?page=1');
// Error handling in Parent
let response = [];
const apiUrl = 'https://reqres.in/api/users?page=1';
const faultyApiUrl = 'https://danishreqres.in/api/users?page=1';


const fetchApiData = async (url) => {
    console.log("Start calling api");
    const res = await fetch(url);
    console.log("Awaiting res.json()");
    response = await res.json();
    console.log(response);
    console.log(1);
    console.log(2);
    console.log(3);
    return response;
};

const fetchApiDataChild = async (url) => {
  try {
    console.log("Start calling api");
    const res = await fetch(url);
    console.log("Awaiting res.json()");
    response = await res.json();
    console.log(response);
    console.log(1);
    console.log(2);
    console.log(3);
    return response;
  } catch (error) {
    console.log("'fetchApiData' error");
    console.log(error);
    return [];
  }
};

console.log(fetchApiData(apiUrl));

console.log('Outside Aysn', 1);
console.log('Outside Aysn', 2);
console.log('Outside Aysn', 3);

setTimeout(() => {
  console.log("Outside Variable updated", response)
}, 5000)

const callApi = async () => {
  try {
    console.log("Start calling 'fetchApiData' function")
    // const res = await fetchApiData(faultyApiUrl);
    const res = await fetchApiDataChild(faultyApiUrl);
    console.log("Data returened from 'fetchApiData' function",res);
  } catch (error) {
    console.log("'callApi' error");
    console.log(error);
  }
}

console.log(callApi());

setTimeout(() => {
  console.log('App is running');
}, 5000)