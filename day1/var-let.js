function diffVarLet() {
  var a = 1; // function scoped
  let b = 2; // block scoped

  if (true) {
    // new block created
    var a = 3; // the variable 'a' is reassigned
    let b = 4; // a new variable is created in the current scope

    console.log("Inside if scope");
    console.log({
      a,
      b,
    });
  } // block ends

  console.log("Outside if block, inside function");
  console.log({
    a,
    b,
  });
}

diffVarLet();
