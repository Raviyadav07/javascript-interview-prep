# Hoisting

Hoisting is JavaScript's default behavior of moving declarations to the top of their scope before code execution.

JavaScript allocates memory during the creation phase before executing the code.

## Function Declaration

Function declarations are fully hoisted.

```js
greet();

function greet() {
  console.log("Hello");
}
```

Output:

```
Hello
```

## Variable Hoisting

Variables declared using var are hoisted and initialized with undefined.

```js
console.log(name);

var name = "Ravi";
```

Output:

```
undefined
```

## let and const

let and const are hoisted but remain in the Temporal Dead Zone until initialization.

```js
console.log(name);

let name = "Ravi";
```

Output:

```
ReferenceError
```

## Interview Questions

1. Difference between var, let and const hoisting?
2. What is Temporal Dead Zone?
3. Are functions hoisted?