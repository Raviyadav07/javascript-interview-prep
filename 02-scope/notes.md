# Scope

Scope determines the accessibility of variables in different parts of a program.

## Types of Scope

### Global Scope

Accessible everywhere.

```js
const appName = "Customer Portal";
```

### Function Scope

Variables declared inside a function are only accessible within that function.

```js
function greet() {
  const name = "Ravi";
}
```

### Block Scope

Variables declared using let and const are block scoped.

```js
if (true) {
  const name = "Ravi";
}
```

## Scope Chain

JavaScript looks for variables in the current scope and moves outward until found.

## Interview Questions

1. What is lexical scope?
2. What is scope chaining?
3. Difference between function scope and block scope?