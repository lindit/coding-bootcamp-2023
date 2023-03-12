/**
 * Create an interface IPerson with the following properties:
 * firstName (string)
 * lastName (string)
 * age (number)
 */

interface IPerson {
  firstName: string;
  lastName: string;
  age: number;
}

/**
 * Create an array of type IPerson[] called people.
 */

let person: IPerson[] = [];

/**
 * Create three instances of IPerson
 */

let person1: IPerson = { firstName: "Vigan", lastName: "Shkodra", age: 20 };
let person2: IPerson = { firstName: "Donat", lastName: "Dermaku", age: 21 };
let person3: IPerson = { firstName: "Mateo", lastName: "Pasho", age: 22 };

/**
 * Push the three instances of IPerson into the people array.
 */

person.push(person1, person2, person3);

/**
 * Log all three entries of people using string interpolation in the format
 * firstName: XXX, lastname: XXX, age: xxx
 * use only the people variable like people[0]
 */

console.log(
  `My name is ${person[0].firstName} ${person[0].lastName} and i am ${person[0].age} years old`
);
console.log(
  `My name is ${person[1].firstName} ${person[1].lastName} and i am ${person[1].age} years old`
);
console.log(
  `My name is ${person[2].firstName} ${person[2].lastName} and i am ${person[2].age} years old`
);
