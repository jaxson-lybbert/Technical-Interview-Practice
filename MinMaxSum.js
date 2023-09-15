// "use strict";

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");

// let inputString = "";
// let currentLine = 0;

// process.stdin.on("data", function (inputStdin) {
//   inputString += inputStdin;
// });

// process.stdin.on("end", function () {
//   inputString = inputString.split("\n");

//   main();
// });

// function readLine() {
//   return inputString[currentLine++];
// }

// /*
//   Complete the 'miniMaxSum' function below.

//  The function accepts INTEGER_ARRAY arr as parameter.
//  */
// let arr = [1, 2, 3, 4, 5];

// function miniMaxSum(arr) {
//   let maxSum = 0;
//   let minSum = 0;

//   arr = arr.sort((a, b) => {
//     return a - b;
//   });

//   for (let i = 0; i < arr.length; i++) {
//     if (i != arr.length - 1) {
//       minSum += arr[i];
//     }

//     if (i != 0) {
//       maxSum += arr[i];
//     }
//   }

//   console.log(minSum + " " + maxSum);
// }

// function main() {
//   const arr = readLine()
//     .replace(/\s+$/g, "")
//     .split(" ")
//     .map((arrTemp) => parseInt(arrTemp, 10));

//   miniMaxSum(arr);
// }

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
  Complete the 'miniMaxSum' function below.
 
 The function accepts INTEGER_ARRAY arr as parameter.
 */
let arr = [1, 2, 3, 4, 5];

function miniMaxSum(arr) {
  arr = arr.sort((a, b) => {
    return a - b;
  });

  let arrSum = arr.reduce((a, b) => a + b);

  console.log(arrSum - arr[arr.length - 1] + " " + (arrSum - arr[0]));
}

function main() {
  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
