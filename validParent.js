// detect if the parentheses got their closing partners
// the parentheses needed to close inmediately
const isValid = (s) => {
  if (s.length % 2 !== 0) return false;
  const strArr = s.split("");
  let validArr = [];

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === "(" || strArr[i] === "[" || strArr[i] === "{") {
      validArr.push(s[i]);
    }
    if (strArr[i] === ")" && validArr[validArr.length - 1] === "(") {
      validArr.pop();
    }
    if (strArr[i] === "]" && validArr[validArr.length - 1] === "[") {
      validArr.pop();
    }
    if (strArr[i] === "}" && validArr[validArr.length - 1] === "{") {
      validArr.pop();
    }
  }
  if (validArr.length === 0) return true;
  return false;
};

console.log(isValid("([)]"));
