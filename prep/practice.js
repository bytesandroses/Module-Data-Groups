// Given an array of numbers, return a new array where every number is doubled.
const nums = [1, 2, 3, 4, 5];
const Newnums = nums.map((num) => num * 2);
console.assert(Newnums.toString() === [2, 4, 6, 8, 10].toString());

// Given an array of strings, return a new array with all strings in uppercase.
const words = ["hello", "world", "javascript"];
const capitalizedWords = words.map((word) => word.toUpperCase());
console.assert(
  ["HELLO", "WORLD", "JAVASCRIPT"].toString() === capitalizedWords.toString()
);

// Given an array of strings, return an array of their lengths.
const fruits = ["apple", "banana", "cherry", "date"];
const lengths = fruits.map((fruit) => fruit.length);
console.assert([5, 6, 6, 4].toString() === lengths.toString());

// Convert an array of string numbers to actual numbers.
const strNums = ["1", "2", "3", "4", "5"];
const intNums = strNums.map((num) => Number(num));

// Given an array of user objects, return an array of just their names.
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];
let names = users.map((user) => user.name);
console.assert(names.toString() === ["Alice", "Bob", "Charlie"].toString());

// Given an array of prices (numbers), return formatted price strings.
const prices = [9.99, 24.5, 3, 100.123];
const formattedPrices = prices.map((price) => {
  price = Number.parseFloat(price).toFixed(2);
  const formattedPrice = `$${price}`;
  return formattedPrice;
});
console.assert(
  formattedPrices.toString() ===
    ["\$9.99", "\$24.50", "\$3.00", "\$100.12"].toString()
);

// Given an array of names, return strings in the format "index: name".
names = ["Alice", "Bob", "Charlie"];
const indexedNames = names.map((name, index) => `${index}: ${name}`);
console.assert(
  ["0: Alice", "1: Bob", "2: Charlie"].toString() === indexedNames.toString()
);

// Convert an array of temperatures from Celsius to Fahrenheit.
// Formula: F = C * 9/5 + 32
const celsius = [0, 10, 20, 30, 100];
const fahrenheit = celsius.map((temperature) => (temperature * 9) / 5 + 32);
console.assert([32, 50, 68, 86, 212].toString() === fahrenheit.toString());

// Return the square root of each number, rounded to 2 decimal places.
const numbers = [4, 9, 16, 25, 2, 7];
const roots = numbers.map((num) =>
  Number(Number.parseFloat(Math.sqrt(num)).toFixed(2))
);
console.assert([2, 3, 4, 5, 1.41, 2.65].toString() === roots.toString());

function greetDevelopers(list) {
  return list.map((dev) => {
    const newDev = {
      ...dev,
      greeting: `Hi ${dev.firstName}, what do you like most about ${dev.language}?`,
    };
    return newDev;
  });
}

const list1 = [
  {
    firstName: "Sofia",
    lastName: "I.",
    country: "Argentina",
    continent: "Americas",
    age: 35,
    language: "Java",
  },
  {
    firstName: "Lukas",
    lastName: "X.",
    country: "Croatia",
    continent: "Europe",
    age: 35,
    language: "Python",
  },
  {
    firstName: "Madison",
    lastName: "U.",
    country: "United States",
    continent: "Americas",
    age: 32,
    language: "Ruby",
  },
];

console.log(greetDevelopers(list1));
