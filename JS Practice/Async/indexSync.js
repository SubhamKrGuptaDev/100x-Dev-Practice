const user = {
  name: "Subham",
  age: 27,
};
const fs = require("fs");

const data = fs.readFileSync("text.txt", "utf-8");
console.log("File Content:", data);

console.log(user.name);
