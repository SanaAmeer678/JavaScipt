console.log('Squad O');
const fs = require('fs');
const api = 'https://restcountries.com/v3.1/all';
// Function to fetch data from API
const fetchApiData = async () => {
  try {
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return [];
  }
}

// Function to search from data
function searchCurriencies(data, searchInput) {
  if (searchInput) {
    return data.filter((obj) =>{
      obj.curriencies?.includes(searchInput.toLowerCase())
    });
  }
  return data;
}

// Function to filter on capital
function filtercapital(data, filterInput) {
  if (filterInput) {
    return data.filter((obj) =>
      obj.capital?.includes(filterInput.toLowerCase())
    );
  }
  return data;
}

// Function to extract the specified key from an array of countries
function extractKey(data, key) {
  return data.map((country)=>country[key]);
}

// Function to limit the resultant array
function resArray(data, limit) {
  return limit ? data.slice(0,limit):data;
}

// Function to test the program by reading data from the file
async function readFile() {
  try {
    const filedata = await fs.readFileSync('input.txt', 'utf8');
    const inputs = filedata.split(',');
    const data = await fetchApiData();
    let filteredData = searchCurriencies(data, inputs[0]);
    filteredData = filtercapital(filteredData, inputs[1]);
    const extractedKey = extractKey(filteredData, inputs[2]);
    const limitedArray = resArray(extractedKey, inputs[3]);

    if (inputs[3]) {
      const totalCount = extractedKey.length;
      console.log('Result');
      console.log({ data: limitedArray, totalCount });
    } else {
      console.log('Result');
      console.log({ data: limitedArray });
    }
  } catch (error) {
    console.error('Got an error trying to read the file:', error.message);
  }
}

readFile();