const binarySearch = function (arry = [], x) {
  let start = 0;
  let end = arry.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arry[mid] === x) {
      return mid;
    } else if (arry[mid] < x) {
      start = mid + 1;
    } else if (arry[mid] > x) {
      end = mid - 1;
    }
  }
  return -1;
};
console.log(binarySearch([1, 2, 3, 4, 5, 6], 1)); // 0
console.log(binarySearch([1, 2, 3, 4, 5, 6], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5, 6], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(binarySearch([1, 2, 3, 4, 5, 6], -1)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 0)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 7)); // -1