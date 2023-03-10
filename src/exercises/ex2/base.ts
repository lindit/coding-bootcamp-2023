interface IPerson {
  name: string;
  age: number;
}

/**
 * Returns a list of people who are 18 or older
 * HINT: the type after the function  ↓↓↓↓↓↓↓↓↓↓ indicates the Type that should be returned
 */
function getAdults(people: IPerson[]): IPerson[] {
  //   TODO: Your code here and overwrite return statement
  return [];
}

/**
 * Returns the average age of all people
 */
function getAverageAge(people: IPerson[]): number {
  //   TODO: Your code here and overwrite return statement
  return -1;
}

/**
 * Returns the youngest person
 */
function getYoungest(people: IPerson[]): IPerson {
  //   TODO: Your code here and overwrite return statement
  return { name: "", age: -1 };
}

/**
 * Returns the oldest person
 */
function getOldest(people: IPerson[]): IPerson {
  //   TODO: Your code here and overwrite return statement
  return { name: "", age: -1 };
}

/**
 * TESTS:
 */
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
