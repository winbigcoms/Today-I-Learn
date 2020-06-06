class Numbers {
    numberArray = [];
    multiply(arr) {
      arr.forEach(function (item, index, array) {
        this.numberArray.push(item * item);
      },this);
    }
  }
  const numbers = new Numbers();
  numbers.multiply([1, 2, 3]);
  console.log(numbers.numberArray);