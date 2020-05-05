// 선형 검색
function linearSearch(x = [], y) {
  let res = -1;
  for (let b = 0; b < x.length; b++) {
    if (x[b] === y) {
      res = b;
    }
  }
  return res;
}

console.log(linearSearch([1, 2, 3, 4, 5, 6], 1)); // 0
console.log(linearSearch([1, 2, 3, 4, 5, 6], 3)); // 2
console.log(linearSearch([1, 2, 3, 4, 5, 6], 5)); // 4
console.log(linearSearch([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(linearSearch([1, 2, 3, 4, 5, 6], -1)); // -1
console.log(linearSearch([1, 2, 3, 4, 5, 6], 0)); // -1
console.log(linearSearch([1, 2, 3, 4, 5, 6], 7)); // -1
// 이진검색
const binarySearch = function (arry = [], x) {
  let start = 0;
  let end = arry.length;
  let mid = Math.floor(end / 2);
  while (start !== end !== mid) {
    if (x < arry[0] || x > arry[arry.length - 1]) {
      mid = -1;
      break;
    } else if (x <= arry[mid]) {
      end = mid;
      if (x === arry[mid]) {
        break;
      }
      mid = Math.floor(mid / 2);
    } else if (x > arry[mid]) {
      start = mid + 1;
      if (x === arry[mid]) {
        break;
      }
      mid = Math.floor(mid + mid / 2 + 1);
    }
  }
  return mid;
};
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(binarySearch([1, 2, 3, 4, 5, 6], -1)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 0)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 7)); // -1