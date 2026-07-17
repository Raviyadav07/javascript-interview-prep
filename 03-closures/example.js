function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(`Current Count: ${count}`);
  };
}

const counter = createCounter();

counter();
counter();
counter();