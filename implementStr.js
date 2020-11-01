// return indx where haystack appears first
const strStr = (haystack, needle) => {
  if (needle.length === 0) return 0;
  return haystack.indexOf(needle);
};

console.log(strStr("aaaaa", "bba"));
