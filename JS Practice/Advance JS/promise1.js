// function waitSomeTime(resolve) {
//   setTimeout(resolve, 1000);
// }

// function setTimeoutPromise(fn) {
//   return new Promise(fn);
// }

// function print() {
//   console.log("Print Function Called");
// }

// setTimeoutPromise(waitSomeTime).then(print);

// function waitFor2s(resolve) {
//   setTimeout(resolve, 2000);
// }

function showYouName() {
  console.log("Hi Im Subham");
}

// setTimeoutPromise(waitFor2s).then(showYouName);

function loopOp() {
  let count = 0;
  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      count++;
    }
    console.log("Count Amount:", count);
  }, 1000);
}

async function helperPromise(resolve) {
  loopOp();
  resolve();
}

function simplePromise(fn) {
  return new Promise(fn);
}

simplePromise(helperPromise).then(showYouName);
