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

let people: IPerson[] = [];

/**
 * Create three instances of IPerson
 */

const ana: IPerson = { firstName: "Ana", lastName: "Kajtazi", age: 22 };
const carlo: IPerson = { firstName: "Carlo", lastName: "Santos", age: 35 };
const magbule: IPerson = {
  firstName: "Magbule",
  lastName: "Gumnishta",
  age: 27,
};

/**
 * Push the three instances of IPerson into the people array.
 */

people.push(ana, carlo, magbule);

/**
 * Log all three entries of people using string interpolation in the format
 * firstName: XXX, lastname: XXX, age: xxx
 * use only the people variable like people[0]
 */

console.log(people);

console.log(people[0].firstName, people[0].lastName, people[0].age);
console.log(people[1].firstName, people[1].lastName, people[1].age);
console.log(people[2].firstName, people[2].lastName, people[2].age);
