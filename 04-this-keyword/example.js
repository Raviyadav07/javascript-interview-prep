const employee = {
  name: "Ravi",

  greet() {
    console.log(`Hello ${this.name}`);
  },
};

employee.greet();

function welcome() {
  console.log(this);
}

welcome();