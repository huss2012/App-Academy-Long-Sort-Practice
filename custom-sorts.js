function ageSort(users) {
  // Your code here
  //Using quick sort algorithm:
  if (users.length <= 1) return users;
  let pivot = users[0];

  let leftUsers = [];
  let rightUsers = [];

  for (let i = 1; i < users.length; i++) {
    if (users[i].age < pivot.age) {
      leftUsers.push(users[i]);
    } else {
      rightUsers.push(users[i]);
    }
  };
  let leftSortedUsers = ageSort(leftUsers);
  let rightSortedUsers = ageSort(rightUsers);

  return leftSortedUsers.concat(pivot).concat(rightSortedUsers);
}


//-------------local test area------------
const users = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    occupation: 'Software Engineer',
    friends: [2, 3, 4]
  },
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    occupation: 'Software Engineer',
    friends: [2, 3, 4]
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Doe',
    age: 25,
    occupation: 'Data Scientist',
    friends: [1, 4]
  },
  {
    id: 3,
    firstName: 'Mary',
    lastName: 'Smith',
    age: 32,
    occupation: 'UX Designer',
    friends: [2, 4]
  },
  {
    id: 4,
    firstName: 'James',
    lastName: 'Johnson',
    age: 55,
    occupation: 'CTO',
    friends: [1, 2, 3]
  },
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    age: 15,
    occupation: 'Software Engineer',
    friends: [2, 3, 4]
  },
]
console.log(ageSort(users));
//----------------------------------------
function oddEvenSort(arr) {
  // Your code here
}

function validAnagrams(s, t) {
  // Your code here
}

function reverseBaseSort(arr) {
  // Your code here
}

function frequencySort(arr) {
  // Your code here
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
