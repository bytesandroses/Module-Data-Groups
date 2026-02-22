function swapFirstAndLast(arr) {
  const firstElement = arr[0];
  const lastElement = arr[arr.length - 1];

  arr.splice(-1, 1, firstElement);
  arr.splice(0, 1, lastElement);
}

const myArray = [5, 2, 3, 4, 1];
swapFirstAndLast(myArray);
console.log(myArray);
