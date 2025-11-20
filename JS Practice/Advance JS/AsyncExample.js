// Sync Example

const fs = require("fs");

function print(value) {
  console.log(value);
}

const data = fs.readFileSync("textExample.txt", "utf-8");

print(data);

print("First text");

// Async Example

function afterReadOp(err, result) {
  console.log(result);
}

fs.readFile("textExample.txt", "utf-8", afterReadOp);

print("First");
print("Second");
