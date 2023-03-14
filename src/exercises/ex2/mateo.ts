interface IPerson {
  name: string;
  age: number;
}

/**
 * Returns a list of people who are 18 or older
 * HINT: the type after the function  ↓↓↓↓↓↓↓↓↓↓ indicates the Type that should be returned
 */
function getAdults(people: IPerson[]): IPerson[] {
  for (let person of people) {
    if (person.age >= 18) {
      people.push(person);
    }
  }
  return people;
}

/**
 * Returns the average age of all people
 */
function getAverageAge(people: IPerson[]): number {
  let sum = 0;
  for (let person of people) {
    sum = sum + person.age;
  }
  return sum / people.length;
}

/**
 * Returns the youngest person
 */
function getYoungest(people: IPerson[]): IPerson {
  for (let person of people) {
    Math.min.apply(person.age);
    people.push(person);
  }
  return people;
}

/**
 * Returns the oldest person
 */
function getOldest(people: IPerson[]): IPerson {
  //   TODO: Your code here and overwrite return statement
  return { name: "", age: -1 };
}
