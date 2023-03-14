interface IPerson {
  name: string;
  age: number;
}

/**
 * Returns a list of people who are 18 or older
 * HINT: the type after the function  ↓↓↓↓↓↓↓↓↓↓ indicates the Type that should be returned
 */
function getAdults(people: IPerson[]): IPerson[] {
  const arr: IPerson[] = [];
  for (const person of people) {
    if (person.age >= 18) {
      arr.push(person);
    }
  }
  return arr;
}
/**
 * Returns the average age of all people
 */
function getAverageAge(people: IPerson[]): number {
  let sum = 0;
  for (let number of people) {
    sum += number.age;
  }
  const averageAge = sum / people.length;
  return averageAge;
}

/**
 * Returns the youngest person
 */
function getYoungest(people: IPerson[]): IPerson {
  let youngest: IPerson = people[0];
  for (let i = 1; i < people.length; i++) {
    if (people[i].age < youngest.age) {
      youngest = people[i];
    }
  }
  return youngest;
}
function getOldest(people: IPerson[]): IPerson {
  let oldest: IPerson = people[0];
  for (let i = 1; i < people.length; i++) {
    if (people[i].age > oldest.age) {
      oldest = people[i];
    }
  }
  return oldest;
}
function isEqual(expected: any, actual: any) {
  let passed = expected === actual;
  if (Array.isArray(expected)) {
    passed =
      expected.length === actual.length &&
      expected
        .map((item, index) => actual[index] === item)
        .reduce((acc, item) => acc && item, true);
  }

  if (passed) {
    console.log("✅-- PASSED -- ✅");
  } else {
    console.log("❌-- FAILED -- ❌");
  }
}

const person1: IPerson = {
  name: "John Doe",
  age: 18,
};
const person2: IPerson = {
  name: "Jane Smith",
  age: 22,
};
const person3: IPerson = {
  name: "Tom Johnson",
  age: 35,
};
const person4: IPerson = {
  name: "Mary Lee",
  age: 17,
};
const people: IPerson[] = [person1, person2, person3, person4];
isEqual([person1, person2, person3], getAdults(people));
isEqual(23, getAverageAge(people));
isEqual(person4, getYoungest(people));
isEqual(person3, getOldest(people));
