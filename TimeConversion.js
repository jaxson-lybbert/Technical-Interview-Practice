"use strict";

const fs = require("fs");

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

// "00:00:00AM"
function timeConversion(s) {
  const time = s.substring(8);

  let hours = s.substring(0, 2);
  let minutes = s.substring(3, 5);
  let seconds = s.substring(6, 8);

  if (time === "AM" && hours === "12") {
    hours = "00";
  } else if (time === "PM" && hours === "12") {
    hours = "12";
  } else if (time === "PM") {
    hours = parseInt(hours) + 12;
  }

  return `${hours}:${minutes}:${seconds}`;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = timeConversion(s);

  ws.write(result + "\n");

  ws.end();
}
