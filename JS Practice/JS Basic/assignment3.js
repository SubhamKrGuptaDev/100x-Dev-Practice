function canVote(age) {
  return age >= 18;
}

const userAge = 9;
const isUserApplicable = canVote(userAge);

console.log("Can User Give Vote:", isUserApplicable);
