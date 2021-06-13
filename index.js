function receivesAFunction(spy) {
  spy();
}

function returnsANamedFunction(ANamedFunction) {
  const newFunction = () => console.log("Hello World");
  return newFunction;
}

function returnsAnAnonymousFunction() {
  return () => console.log("Hello World again");
}
