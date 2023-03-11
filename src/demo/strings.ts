const name = "Lindit";
const age = 25;
const basicString =
  "Hello my name is " + name + "\nand I'm " + age + " years old";
const coolString = `Hello my name is ${name} \nand I'm ${age} years old`;
const doesntWork = "Hello my name is ${name} \nand I'm ${age} years old";

console.log(basicString);
console.log();
console.log(coolString);
console.log();
console.log(doesntWork);
