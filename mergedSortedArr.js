// ([0, 3, 4, 31] [4, 6, 30])

// 1st approach
const mergeSortedArrays = (arr1, arr2) => {
  const mergedArr = [];
  let item1 = arr1[0];
  let item2 = arr2[0];
  let i = 1;
  let j = 1;

  while (item1 || item2) {
    if (item1 < item2 || !item2) {
      mergedArr.push(item1);
      item1 = arr1[i];
      i++;
    } else {
      mergedArr.push(item2);
      item2 = arr2[j];
      j++;
    }
  }
  return mergedArr;
};

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
