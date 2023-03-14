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
    if (person.age > 18) {
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
  for (let number of people) {
    sum += number.age;
  }
  const average = sum / people.length;
  return average;
}

/**
 * Returns the youngest person
 */
function getYoungest(people: IPerson[]): IPerson {
  let youngestPerson: IPerson = people[0];

  for (let i = 1; i < people.length; i++) {
    if (people[i].age < youngestPerson.age) {
      youngestPerson = people[i];
    }
  }
  return youngestPerson;
}

/**
 * Returns the oldest person
 */
function getOldest(people: IPerson[]): IPerson {
  let oldestPerson: IPerson = people[0];
  for (let i = 1; i < people.length; i++) {
    if (people[i].age > oldestPerson.age) {
      oldestPerson = people[i];
    }
  }
  return oldestPerson;
}
