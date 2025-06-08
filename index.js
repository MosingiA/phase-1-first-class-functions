function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  function myNamedFunction() {
    console.log("This is a named function.");
  }
  return myNamedFunction;
}

function returnsAnAnonymousFunction() {
  
  return function() {
    console.log("This is an anonymous function.");
  };
}