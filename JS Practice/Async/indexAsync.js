const user = {
  name: "Subham",
  age: 27,
};
const fs = require("fs");

fs.readFile("text.txt", "utf-8", (err, content) => {
  console.log(content);
});

console.log(user.name);
