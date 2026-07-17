function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
      console.log(`Count: ${count}`);
    },

    decrement() {
      count--;
      console.log(`Count: ${count}`);
    },

    getCount() {
      return count;
    },
  };
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.decrement();

console.log(counter.getCount());