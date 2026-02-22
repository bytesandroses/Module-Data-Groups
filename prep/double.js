function doubleAllNumbers(numbers) {
  let doubledNumbers = [];

  for (let n of numbers) {
    doubledNumbers.push(n * 2);
  }

  return doubledNumbers;
}

let myNums = [10, 20, 30];
myNums = doubleAllNumbers(myNums);
console.log(myNums);
