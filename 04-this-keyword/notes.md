# this Keyword

The value of this depends on how a function is invoked.

## Global Context

```js
console.log(this);
```

In browser:

```
window
```

## Object Method

```js
const user = {
  name: "Ravi",
  greet() {
    console.log(this.name);
  },
};
```

Output:

```
Ravi
```

## Regular Function

```js
function show() {
  console.log(this);
}
```

Depends on execution mode.

## Arrow Function

Arrow functions do not have their own this.

They inherit this from the surrounding lexical scope.

```js
const user = {
  name: "Ravi",

  greet: () => {
    console.log(this);
  },
};
```

## Call Apply Bind

Used to explicitly set the value of this.

### call()

```js
greet.call(user);
```

### apply()

```js
greet.apply(user);
```

### bind()

```js
const fn = greet.bind(user);
```

## Interview Questions

1. Difference between normal and arrow functions?
2. What does bind do?
3. Difference between call, apply and bind?
4. How does this work in React event handlers?