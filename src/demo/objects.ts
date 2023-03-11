const emptyObjet = {};

const person = { name: "Vigan", age: 20, isAlbanian: true };

// THIS WORKS because you can't make the variables inside an object const
person.name = "Lindit";
person.age = 25;

// THIS DOESN'T WORK because person is already defined and is const
// person = {name: 'Lindit', age: 25, isAlbanian: true}

console.log(person.name, person.age, person.isAlbanian);

/**
 * ####################################################################################################################
 */

interface IPerson {
  age: number;
  name: string;
}

const lindit: IPerson = { name: "Lindit", age: 25 };
const donat: IPerson = { name: "Donat", age: 25 };
const vigan: IPerson = { name: "Vigan", age: 25 };
const mateo: IPerson = { name: "Mateo", age: 25 };

const person2: IPerson = donat;
console.log(person2.name, person2.age);

/**
 * ####################################################################################################################
 */

const students: IPerson[] = [donat, lindit, vigan, mateo];
console.log(students);

// students = []
students.pop();
students.pop();
students.pop();
students.pop();

students.push(donat, lindit, vigan, mateo);
console.log(students);
