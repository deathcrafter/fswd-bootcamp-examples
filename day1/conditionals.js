console.group("conditionals");

function exampleIfElse() {
  let i = 10;

  if (i == 10) {
    console.log("i == 10");
  } else {
    console.log("i != 10");
  }
}

exampleIfElse();

function exampleIfElseIf() {
  let i = 10;

  if (i % 3 == 0) {
    console.log("i is divisible by 3");
  } else if (i % 2 == 0) {
    console.log("i is divisible by 2");
  } else {
    console.log("i is neither divisible by 3 nor 2");
  }
}

exampleIfElseIf();

function exampleSwitch(val) {
  switch (val) {
    case 5: // checks if val == 5
      console.log("five"); // this block is executed if val == 5

    /**
     * Now, there is no break statement in the above case, which results in the 'case 1' not being evaluated
     * and executed, even if val != 1. This is known as a fall-through. When fall-through occurs, the next
     * case and the subsequent cases are evaluated until a break statement is encountered or the end of the
     * switch is reached.
     */
    case 1:
      console.log("one");
      break;
    case 2:
      console.log("two");
      break;

    // the default case is executed when none of the cases are true
    default:
      console.log("default");
      break;
  }
}

exampleSwitch(7);
exampleSwitch(5);

console.groupEnd();
