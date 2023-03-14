function sum(arr: number[]) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result = result + arr[i];
  }
  console.log(result);
}

// sum([1, 2, 3, 4, 5, 6, 7, 8, 9]);

function findFirstGreaterThan10(arr: number[]) {
  for (const number of arr) {
    if (number > 10) {
      return number;
    }
  }
}

let number = findFirstGreaterThan10([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(number);
