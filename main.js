//loop through the object using forEach so that it logs, (eg,for user1)
//'user1 is called Jon and is 23 years old'
//the loop should not return a data structure
// Use one or more of the object methods to solve
const obj = {
  user1: {
    name: 'Jon',
    age: 23,
  },
  user2: {
    name: 'Jen',
    age: 25,
  },
  user3: {
    name: 'Jan',
    age: 21,
  },
};

let ArrEntries = Object.entries(obj)
ArrEntries.forEach((user) => console.log(`${user[0]} is called ${user[1].name} and is ${user[1].age} years old`))

// Use Object Methods
//Create an albphabeticl list of every folder in the documents object (the keys are the folders)
//Create a list of every file in the documents object. one list.
const documents = {
  taxes: ['2010.xlx', '2020.xlx'],
  records: ['rec1.docx', 'rec2.docx', 'rec3.docx'],
  miscellaneous: ['pic.jpg', 'passwords.pdf', 'docs.txt'],
  Clubhouse: ['paty.jpg', 'christmasRules.pdf', 'pool.txt'],
};

let folders = Object.keys(documents).sort()
folders
let files = Object.values(documents)
files

//Are the two books alike? Create a function and Use Object methods to find out. Change object values to test for non-alike objects
const book1 = {
  title: 'My Book',
  author: 'John Doe',
  year: '2019',
};
const book2 = {
  title: 'My Book',
  author: 'John Doe',
  year: '2019',
};
const book3 = {
  title: 'test',
  author: 'test',
  year: 'test',
};


function compare(obj1, obj2) {
  //implicit way
  // if (
  //   obj1.title === obj2.title
  //   && obj1.author === obj2.author
  //   && obj1.year === obj2.year
  // ) {
  //   return true
  // }
  // return false

  //explicit way
  return Object.values(obj1).join() === Object.values(obj2).join() ? true : false
}

let alike = compare(book1, book2)
alike
let nonAlike = compare(book1, book3)
nonAlike
