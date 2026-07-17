# Scope

## What is Scope?

Scope determines where a variable can be accessed in a program.

It defines the visibility and accessibility of variables.

---

## Types of Scope

### Global Scope

Variables declared outside any function or block.

```js
const company = "doodleblue";
```

Accessible everywhere.

---

### Function Scope

Variables declared inside a function.

```js
function project() {
  const name = "Telesat";
}
```

Can only be accessed inside the function.

---

### Block Scope

Variables declared using let and const inside blocks.

```js
if (true) {
  let project = "Customer Portal";
}
```

Cannot be accessed outside the block.

---

## Lexical Environment

Lexical means "where something is physically written in code."

JavaScript uses lexical scoping.

Example:

```js
const company = "doodleblue";

function outer() {
  const project = "Telesat";

  function inner() {
    console.log(company);
    console.log(project);
  }

  inner();
}

outer();
```

Output:

```js
doodleblue
Telesat
```

---

## Scope Chain

When JavaScript cannot find a variable in the current scope, it looks outward until it reaches the global scope.

This process is called Scope Chaining.

---

## var vs let vs const

| Feature | var | let | const |
|----------|----------|----------|----------|
| Scope | Function | Block | Block |
| Reassign | Yes | Yes | No |
| Redeclare | Yes | No | No |

---

## Interview Questions

### What is lexical scope?

Variables can access values from their parent scope.

### What is scope chaining?

JavaScript searching variables in parent scopes.

### Difference between block scope and function scope?

Block scope belongs to {} blocks.

Function scope belongs to functions.