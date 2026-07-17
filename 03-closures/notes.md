# Closures

A closure is created when an inner function remembers variables from its outer scope even after the outer function has finished execution.

## Why Closures Matter

Closures are heavily used in:

- React Hooks
- Event Handlers
- Data Hiding
- Memoization
- Debounce
- Throttle

## Example

```js
function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}
```

## Advantages

- Data privacy
- State preservation
- Encapsulation

## Interview Questions

1. What is a closure?
2. Real-world use cases?
3. Why are closures important in React?