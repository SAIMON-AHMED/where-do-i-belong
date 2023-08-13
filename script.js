/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. 
The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 
19 is less than 20 (index 2) and greater than 5 (index 1).
*/

function getIndexToIns(arr, num) {
  function compareNumbers(a, b) {  // creating a compare function to compare numbers in the array
    return a - b;
  }
  arr.sort(compareNumbers);  // sorting numbers

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num | arr[i] === num ) {  // checking condition if num is less than or equal to existing elements of the array
      arr.splice(i, 0, num);
      return arr.indexOf(num);
    }
  }
  arr.push(num);  // if num is the largest number compared to existing elements of the array
  return arr.indexOf(num);
}

console.log(getIndexToIns([2, 5, 10], 15));
