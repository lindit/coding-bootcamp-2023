interface IPerson {
  firstName: string;
  lastName: string;
  age: number;
}

function sayHello(user: IPerson) {
  console.log(`Hello my name is ${user.firstName}`);
}

const person: IPerson = {
  firstName: "Marli",
  lastName: "Reka",
  age: 26,
};

// sayHello(person);

/**
 * ################################################################################################
 */

function calculateSalesTax(price: number) {
  const priceWithTax = price * 1.2;
  return priceWithTax.toFixed(2);
}

const coffee = calculateSalesTax(0.8);
const beer = calculateSalesTax(1.5);
const cocktail = calculateSalesTax(5);
const bread = calculateSalesTax(2);

// console.log(coffee, beer, cocktail, bread);

/**
 * ################################################################################################
 */

let people: IPerson[] = [];
let person1: IPerson = { firstName: "Vigan", lastName: "Shkodra", age: 20 };
let person2: IPerson = { firstName: "Donat", lastName: "Dermaku", age: 21 };
let person3: IPerson = { firstName: "Mateo", lastName: "Pasho", age: 22 };
people.push(person1, person2, person3);

function printPerson(people: IPerson[]) {
  for (let person of people) {
    console.log(
      `My name is ${person.firstName} ${person.lastName} and i am ${person.age} years old`
    );
  }
}

printPerson(people);
