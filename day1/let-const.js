console.group("let-const");

function diffLetConst() {
  let a = 1; // can be reassigned
  const b = 2; // can not be reassigned

  a = 3;
  // b = 4; // raise error as a constant can't be reassigned

  console.log({
    a,
    b,
  });
}

diffLetConst();

console.groupEnd();
