// add one to the number of the arr
/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }

    digits[i] = 0;
  }

  // only case if arr === 999 or 99 or 9
  // convert the nines to 0 and add 1 to beginning of arr
  digits.unshift(1);
  return digits;
};

plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 1, 4, 3, 8, 9]);
