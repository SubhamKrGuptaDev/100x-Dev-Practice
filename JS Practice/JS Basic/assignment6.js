const userList = [
  {
    name: "Subham",
    age: 20,
    gender: "Male",
  },
  {
    name: "Gupta",
    age: 12,
    gender: "Male",
  },
  {
    name: "Soni",
    age: 18,
    gender: "Female",
  },
  {
    name: "Suman",
    age: 21,
    gender: "Male",
  },
  {
    name: "Pinki",
    age: 29,
    gender: "Female",
  },
  {
    name: "Rinki",
    age: 31,
    gender: "Female",
  },
];

const user = {
  name: "Subham",
  age: 20,
};

const newUser = {
  name: "Subham",
  age: 20,
  gender: "Male",
};

function greets(user) {
  return "Hi " + user.name + " and Your Age: " + user.age;
}

function newGreets(user) {
  function canVote(user) {
    return user.age >= 18;
  }
  if (user.gender.toLowerCase() == "male") {
    return (
      "Hi Mr " +
      user.name +
      " and Your Age: " +
      user.age +
      " Vote Eligibility: " +
      canVote(user)
    );
  } else if (user.gender.toLowerCase() == "female") {
    return (
      "Hi Mrs " +
      user.name +
      " and Your Age: " +
      user.age +
      " Vote Eligibility: " +
      canVote(user)
    );
  }
}

let ans = greets(user);
console.log(ans);

let newAns = newGreets(newUser);
console.log(newAns);

// Array Assignment

let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 65, 1234, 456, 124, 465];
let result = arrayNumbers.filter((num) => num % 2 == 0);

console.log(result);

// Array Assignment 2

function getUserCanVote(userList) {
  return userList.filter((user) => user.age >= 18);
}

let canVoteUser = getUserCanVote(userList);

console.log(canVoteUser);

// Last Assignment

function getUserCanVoteAndGenderMale(userList) {
  return userList.filter(
    (user) => user.age >= 18 && user.gender.toLowerCase() == "male"
  );
}

let canUserVoteMale = getUserCanVoteAndGenderMale(userList);

console.log(canUserVoteMale);
