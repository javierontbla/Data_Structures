// merge 2 lists and sort the final list
const mergeTwoLists = (l1, l2) => {
  let list1 = l1;
  let list2 = l2;
  let sortedList = [];
  let i = 0;

  while (l1.length !== 0 && l2.length !== 0) {
    if (list1[i] < list2[i]) {
      sortedList.push(list1[i]);
      list1.shift();
    } else if (list1[i] > list2[i]) {
      sortedList.push(list2[i]);
      list2.shift();
    } else {
      sortedList.push(list1[i]);
      sortedList.push(list2[i]);
      list1.shift();
      list2.shift();
    }
  }
  return sortedList;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
