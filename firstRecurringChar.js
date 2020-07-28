// google Question
// given an array = [2,5,1,2,3,5,1,2,4]:

const firstRecurringCharacter = (input) => {
  let answer = null;
  let storeObj = {};

  for (let i = 0; i < input.length; i++) {
    if (storeObj[input[i]]) {
      answer = input[i];
      break;
    }
    storeObj[input[i]] = true;
  }
  return answer;
};

console.log(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]));
