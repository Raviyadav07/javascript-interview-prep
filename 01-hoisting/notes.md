# Hoisting

## What is Hoisting?

Hoisting is JavaScript's behavior of moving declarations to the top of their scope before code execution.

During the Memory Creation Phase, JavaScript allocates memory for variables and functions before executing the code.

This is why some variables and functions can be accessed before they appear in the code.

---

## How JavaScript Executes Code

JavaScript executes code in two phases:

### 1. Memory Creation Phase

Memory is allocated for:

- Variables
- Functions

Example:

```js
console.log(name);

var name = "Ravi";
```

Memory Allocation:

```js
name = undefined
```

### 2. Code Execution Phase

Line-by-line execution begins.

```js
console.log(name); // undefined

name = "Ravi";
```

---

## Hoisting with var

```js
console.log(name);

var name = "Ravi";
```

Output:

```js
undefined
```

Reason:

```js
var name = undefined;
```

is internally created during memory allocation.

---

## Hoisting with let

```js
console.log(name);

let name = "Ravi";
```

Output:

```js
ReferenceError
```

Reason:

let variables remain inside the Temporal Dead Zone until initialization.

---

## Hoisting with const

```js
console.log(name);

const name = "Ravi";
```

Output:

```js
ReferenceError
```

Reason:

const also stays inside the Temporal Dead Zone.

---

## Function Declaration Hoisting

Functions are fully hoisted.

```js
greet();

function greet() {
  console.log("Hello Ravi");
}
```

Output:

```js
Hello Ravi
```

---

## Function Expression Hoisting

```js
greet();

var greet = function () {
  console.log("Hello Ravi");
};
```

Output:

```js
TypeError
```

Reason:

greet becomes undefined during memory allocation.

---

## Interview Questions

### What is hoisting?

JavaScript's behavior of allocating memory to variables and functions before code execution.

### Are let and const hoisted?

Yes.

But they remain inside the Temporal Dead Zone.

### Difference between function declaration and function expression?

Function declarations are completely hoisted.

Function expressions behave like normal variables.