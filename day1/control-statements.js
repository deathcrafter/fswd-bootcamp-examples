console.group("control-statements");

function exampleWhile() {
  let i = 0;

  // while (condition) { }
  while (i < 6) {
    if (i == 2) {
      i++;
      continue; // skip the iteration when value of 'i' is 2

      /**
       * Note: use caution when using 'continue' within a 'while' loop. It can lead to infinite loops.
       * For example if I had not incremented 'i' before the 'continue' statement, the loop would never end
       * and crash the application.
       */
    }
    if (i == 4) {
      i++;
      break; // break out of the loop when value of 'i' is 4
    }
    console.log({ i });
    i++;
  }
}

exampleWhile();

function exampleFor() {
  for (let i = 0; i < 5; i++) {
    if (i == 1) {
      continue; // skip the iteration when value of 'i' is 1
    }
    if (i == 3) {
      break; // break out of the loop when value of 'i' is 3
    }
    console.log({ i });
  }
}

exampleFor();

function usecaseWhile() {
  const arr = [1, 2, 3, 4, 5, 6];

  while (arr.length > 0) {
    console.log({
      popped: arr.pop(),
    });
  }
}

usecaseWhile();

function usecaseFor() {
  const arr = [1, 2, 3, 4, 5, 6];

  for (let i = 0; i < arr.length; i++) {
    console.log({
      index: i,
      value: arr[i],
    });
  }
}

usecaseFor();

console.groupEnd();
