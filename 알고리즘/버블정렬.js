function bubbleSort(array) {
  for(let j = 0; j < array.length; j++){
    for(let i = 0; i < array.length; i++) {
      if(i+1 === array.length) break;
      if(array[i] > array[i+1]) {
        let beforeValue = array[i+1];
        array[i+1] = array[i];
        array[i] = beforeValue;
      }
    }
  }
  return array;
}

console.log(bubbleSort([2, 4, 5, 1, 3]));     // [1, 2, 3, 4, 5]
console.log(bubbleSort([5, 2, 1, 3, 4, 6]));  // [1, 2, 3, 4, 5, 6]
console.log(bubbleSort([3, 1, 0, -1, 4, 2])); // [-1, 0, 1, 2, 3, 4]