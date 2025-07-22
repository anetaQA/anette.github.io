// Find Max Sum
// Please submit by 20:34
// Given an array of strings, each made up of a combination of letters and digits, write the functionality to find and return the largest sum of digits within a string.

// Considering a variety of different input arrays, state any assumptions or design choices you had to make.

// Notes:

// Each digit should be considered its own 1-digit number i.e. in the third string below 36 is evaluated as 3 and 6 separately.
// The input arrays can vary in length; however, they will not be larger than 10 strings.
// Strings can vary in length; however, they will not be larger than 12 characters.

// let testArray = ["dh7js4jf", "or2rjvn2w", "h1n36mfl", "a7e6fw"];
// console.log(findMaxSum(testArray));

findMaxSum(testArray);

function findMaxSum(testArray) {
  let maxSum = 0;

  //   console.log(testArray.length);

  // we have an array and we are going to loop through all the array items
  for (let i = 0; i < testArray.length; i++) {
    let arrayItem = testArray[i];

    // split the values into an array
    let splitArray = arrayItem.split("");
    //splitArray = ["d", "h", "7", "j", "s", "4", "j", "f"];

    // loop through the array and check if its a number
    let sumOfNumbers = 0;
    for (let x = 0; x < splitArray.length; x++) {
      if (parseInt(splitArray[x])) {
        sumOfNumbers += parseInt(splitArray[x]);
      }
    }

    if (maxSum < sumOfNumbers) {
      maxSum = sumOfNumbers;
    }
  }

  return maxSum;
}
