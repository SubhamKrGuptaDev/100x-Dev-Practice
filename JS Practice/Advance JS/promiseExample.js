function setTimePromise(time) {
  return new Promise((result) => setTimeout(result, time));
}

function afterPromise() {
  console.log("After Promise Operation");
}

setTimePromise(1000).then(afterPromise);
