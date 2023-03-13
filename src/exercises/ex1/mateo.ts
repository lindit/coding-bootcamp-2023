/**
 * Create an interface IPerson with the following properties:
 * firstName (string)
 * lastName (string)
 * age (number)
 */

// TODO: YOUR CODE HERE

interface IPerson {
    firstName: string;
    lastName: string;
    age: number;
}
/**
 * Create an array of type IPerson[] called people.
 */

// TODO: YOUR CODE HERE

let people: IPerson[] = [];

/**
 * Create three instances of IPerson
 */
// TODO: YOUR CODE HERE

const person1: IPerson = {firstName: 'Mateo', lastName: 'Pasho', age: 21};
const person2: IPerson = {firstName: 'Donat', lastName: 'Dermaku', age: 21};
const person3: IPerson = {firstName: 'Vigan', lastName: 'Shkodra', age: 20};

/**
 * Push the three instances of IPerson into the people array.
 */
// TODO: YOUR CODE HERE

people.push(person1,person2,person3);
/**
 * Log all three entries of people using string interpolation in the format
 * firstName: XXX, lastname: XXX, age: xxx
 * use only the people variable like people[0]
 */
// TODO: YOUR CODE HERE

console.log(people)