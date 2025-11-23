const { log } = require("console");
const fs = require("fs");
const { resolve } = require("path");
const fileContentType = "utf-8";
const fileName = "textExample.txt";

function readFilePromisify(resolve) {
  return new Promise(resolve);
}

function fnReadOp(resolve, reject) {
  return fs.readFile(fileName, fileContentType, (err, data) => {
    if (err) {
      return reject(err);
    }
    resolve(data);
  });
}

// function readFile(fn) {
//   return fs.readFile(fileName, fileContentType, fn);
// }

function print(data) {
  console.log(data);
}

function print() {
  console.log("Print After Some sec");
}

function main() {
  readFilePromisify(fnReadOp).then(print);
  print("Hi Good Morning");
}

// main();

// SetTimeout

function setTimeoutPromisify(duration) {
  return new Promise((resolve, reject) => setTimeout(resolve, duration));
}

// Assignment setTimeout

// setTimeoutPromisify(1000).then(function () {
//   console.log("Hi");
//   setTimeoutPromisify(3000).then(function () {
//     console.log("Hello");
//     setTimeoutPromisify(5000).then(function () {
//       console.log("Hi there");
//     });
//   });
// });

// Promise Chaining
// setTimeoutPromisify(1000)
//   .then(function () {
//     console.log("Hi");
//     return setTimeoutPromisify(3000);
//   })
//   .then(function () {
//     console.log("Hello");
//     return setTimeoutPromisify(5000);
//   })
//   .then(function () {
//     console.log("Hi There");
//   });

// Async & Await

async function asyncAwaitFunction() {
  await setTimeoutPromisify(1000);
  console.log("Hi");
  await setTimeoutPromisify(3000);
  console.log("Hello");
  await setTimeoutPromisify(5000);
  console.log("Hi there");
}

asyncAwaitFunction();
