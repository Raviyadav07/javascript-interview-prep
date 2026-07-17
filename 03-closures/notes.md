# Closures

## What is a Closure?

A closure is created when a function remembers variables from its outer lexical scope even after the outer function has finished execution.

Closures are one of the most important JavaScript concepts.

---

## Example

```js
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();

counter();
counter();
counter();
```

Output:

```js
1
2
3
```

---

## Why Does This Work?

Normally a function finishes execution and its memory is removed.

However, if an inner function still references variables from the outer function, JavaScript keeps those variables alive.

This preserved environment is called a Closure.

---

## Real World Use Cases

### Data Hiding

```js
function createBankAccount() {
  let balance = 0;

  return {
    deposit(amount) {
      balance += amount;
    },

    getBalance() {
      return balance;
    },
  };
}
```

---

### React Hooks

useState internally uses closures.

```js
const [count, setCount] = useState(0);
```

React remembers previous values through closures.

---

### Event Handlers

```js
button.addEventListener("click", function () {
  console.log("Clicked");
});
```

Event handlers often use closures.

---

### Debouncing

Closures store timeout references.

---

### Memoization

Closures store cached values.

---

## Advantages

- Data Privacy
- Encapsulation
- State Preservation
- Cleaner Code

---

## Disadvantages

- Higher Memory Usage
- Potential Memory Leaks

---

## Interview Questions

### What is a closure?

A function bundled together with its lexical environment.

### Why are closures useful?

They help preserve state and create private variables.

### Where are closures used in React?

- useState
- useEffect
- Event Handlers
- Custom Hooks

### What is data hiding?

Restricting direct access to variables using closures.