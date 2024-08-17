console.group("array");

{
  console.group("Array Manipulation");

  // push(): Adds one or more elements to the end of an array
  let fruits = ["apple", "banana"];
  fruits.push("orange");
  console.log(fruits); // Output: ["apple", "banana", "orange"]

  // pop(): Removes the last element from an array
  let lastFruit = fruits.pop();
  console.log(lastFruit); // Output: "orange"
  console.log(fruits); // Output: ["apple", "banana"]

  // shift(): Removes the first element from an array
  let firstFruit = fruits.shift();
  console.log(firstFruit); // Output: "apple"
  console.log(fruits); // Output: ["banana"]

  // unshift(): Adds one or more elements to the beginning of an array
  fruits.unshift("apple");
  console.log(fruits); // Output: ["apple", "banana"]

  // splice(): Adds or removes elements from an array
  fruits.splice(1, 1, "kiwi", "mango"); // Removes 1 element at index 1 and adds "kiwi" and "mango"
  console.log(fruits); // Output: ["apple", "kiwi", "mango"]

  // slice(): Returns a shallow copy of a portion of an array
  let citrus = fruits.slice(1, 3);
  console.log(citrus); // Output: ["kiwi", "mango"]

  // concat(): Merges two or more arrays into one new array
  let moreFruits = ["orange", "kiwi"];
  let allFruits = fruits.concat(moreFruits);
  console.log(allFruits); // Output: ["apple", "kiwi", "mango", "orange", "kiwi"]

  console.groupEnd();
}

{
  console.group("Array Searching and Indexing");

  // indexOf(): Returns the first index at which a given element can be found
  let index = fruits.indexOf("kiwi");
  console.log(index); // Output: 1

  // lastIndexOf(): Returns the last index at which a given element can be found
  let lastIndex = allFruits.lastIndexOf("kiwi");
  console.log(lastIndex); // Output: 4

  // includes(): Determines whether an array contains a certain element
  let hasOrange = allFruits.includes("orange");
  console.log(hasOrange); // Output: true

  // find(): Returns the value of the first element that satisfies the provided testing function
  let numbers = [1, 2, 3, 4, 5];
  let found = numbers.find((number) => number > 3);
  console.log(found); // Output: 4

  // findIndex(): Returns the index of the first element that satisfies the provided testing function
  let foundIndex = numbers.findIndex((number) => number > 3);
  console.log(foundIndex); // Output: 3

  console.groupEnd();
}

{
  console.group("Array Iteration");

  // forEach(): Executes a provided function once for each array element
  allFruits.forEach((fruit) => console.log(fruit));
  // Output:
  // apple
  // kiwi
  // mango
  // orange
  // kiwi

  // map(): Creates a new array populated with the results of calling a provided function on every element
  let doubled = numbers.map((number) => number * 2);
  console.log(doubled); // Output: [2, 4, 6, 8, 10]

  // filter(): Creates a new array with all elements that pass the test implemented by the provided function
  let evenNumbers = numbers.filter((number) => number % 2 === 0);
  console.log(evenNumbers); // Output: [2, 4]

  // reduce(): Executes a reducer function on each element of the array, resulting in a single output value
  let sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  console.log(sum); // Output: 15

  // reduceRight(): Applies a function against an accumulator and each value of the array from right to left
  let product = numbers.reduceRight(
    (accumulator, currentValue) => accumulator * currentValue,
    1
  );
  console.log(product); // Output: 120

  console.groupEnd();
}

{
  console.group("Array Sorting and Reversing");

  // sort(): Sorts the elements of an array in place
  let fruitsToSort = ["banana", "orange", "apple", "kiwi"];
  fruitsToSort.sort();
  console.log(fruitsToSort); // Output: ["apple", "banana", "kiwi", "orange"]

  // reverse(): Reverses the order of the elements in an array
  let fruitsToReverse = ["banana", "orange", "apple"];
  fruitsToReverse.reverse();
  console.log(fruitsToReverse); // Output: ["apple", "orange", "banana"]

  console.groupEnd();
}

{
  console.group("Array Transformation");

  // join(): Joins all elements of an array into a string
  let fruitString = allFruits.join(", ");
  console.log(fruitString); // Output: "apple, kiwi, mango, orange, kiwi"

  // flat(): Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
  let nestedArray = [1, [2, 3], [4, [5, 6]]];
  let flatArray = nestedArray.flat(2);
  console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]

  // flatMap(): Maps each element using a mapping function, then flattens the result into a new array
  let doubledAndFlattened = numbers.flatMap((number) => [number, number * 2]);
  console.log(doubledAndFlattened); // Output: [1, 2, 2, 4, 3, 6, 4, 8]

  console.groupEnd();
}

console.groupEnd();
