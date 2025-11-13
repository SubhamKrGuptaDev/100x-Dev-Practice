function sum(num) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += i;
  }
  return result;
}

let result = sum(10);
console.log(result);
