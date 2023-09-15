console.log("Assesment_4")
/*Q1: 
Write a function to check if the every item of array is even, 
if yes, then print ‘Even Array’ 
If not, then throw custom error
Empty the array at the end in both cases

Test Arrays:

1- [1,2,3,4,5]
2- [2,4,6,8,10]
3- [2,4,6,8,41]*/


//1- [1,2,3,4,5]
console.log('Assesment_4');
const arr1=[1,2,3,4,5]
  const resEvery = arr1.every(x => x%2 === 0);
  console.log(resEvery);
  const checkFucntion = (array) => {
    try {
      if (array.every(x => x%2 === 0)) {
        console.log('Even Array')
      } else {
        throw Error('Array is not even')
      }
    } catch (error) {
      console.log(error);
    } finally {
      array.splice(0, array.length)
    }
    console.log(array);
  }
  checkFucntion(arr1)

  //2_[2,4,6,8,10]
const arr2=[2,4,6,8,10]
  const resEvery1 = arr2.every(x => x%2 === 0);
  console.log(resEvery1);
  const checkFucntion1 = (array1) => {
    try {
      if (array1.every(x => x%2 === 0)) {
        console.log('Even Array')
      } else {
        throw Error('Array is not even')
      }
    } catch (error) {
      console.log(error);
    } finally {
      array1.splice(0, array1.length)
    }
    console.log(array1);
  }
  checkFucntion(arr2)


  //3- [2,4,6,8,41]
  const arr3=[2,4,6,8,10]
  const resEvery2 = arr2.every(x => x%2 === 0);
  console.log(resEvery2);
  const checkFucntion2 = (array2) => {
    try {
      if (array2.every(x => x%2 === 0)) {
        console.log('Even Array')
      } else {
        throw Error('Array is not even')
      }
    } catch (error) {
      console.log(error);
    } finally {
      array2.splice(0, array2.length)
    }
    console.log(array2);
  }
  checkFucntion(arr3)
