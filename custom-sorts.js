function ageSort(users) {
  // Your code here
  //Using quick sort algorithm:
  // if (users.length <= 1) return users;
  // let pivot = users[0];

  // let leftUsers = [];
  // let rightUsers = [];

  // for (let i = 1; i < users.length; i++) {
  //   if (users[i].age < pivot.age) {
  //     leftUsers.push(users[i]);
  //   } else {
  //     rightUsers.push(users[i]);
  //   }
  // };
  // let leftSortedUsers = ageSort(leftUsers);
  // let rightSortedUsers = ageSort(rightUsers);

  // return leftSortedUsers.concat(pivot).concat(rightSortedUsers);

  return users.sort((a, b) => a['age'] - b['age']);
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
//console.log(ageSort(users));
//----------------------------------------
function oddEvenSort(arr) {
  // Your code here
  return arr.sort((a, b) => {
    if (a % 2 === 1 && b % 2 === 0) return -1;
    if (a % 2 === 0 && b % 2 === 1) return 1;
    return a - b;
  })
}

//-----Local test area-----------------
const arr1 = [5, 4, 7, 2, 9, 8, 1, 6, 3];
const arr2 = [5, 8, 13, 6, 22, 14, 9];
//console.log(oddEvenSort(arr1));
//console.log(oddEvenSort(arr2));
//--------------------------------------
function validAnagrams(s, t) {
  // Your code here
  if (s.length !== t.length) return false;

  let sArray = s.split("").sort();
  let tArray = t.split("").sort();

  for (let i = 0; i < sArray.length; i++){
    if (sArray[i] !== tArray[i]) return false;
  }
  return true;
}

function reverseBaseSort(arr) {
  // Your code here
  return arr.sort((a, b) => {
    const aStr = `${a}`;
    const bStr = `${b}`;

    if (aStr.length > bStr.length) return -1;
    else if (aStr.length < bStr.length) return 1;

    return a - b;
  })
}

function frequencySort(arr) {
  // Your code here
  const frequencies = {};

  for (let i = 0; i < arr.length; i++) {
    if (!frequencies[arr[i]]) {
      frequencies[arr[i]] = 0;
    }

    frequencies[arr[i]]++;
  }

  return arr.sort((a, b) => {
    if (frequencies[a] < frequencies[b]) return -1;
    else if (frequencies[a] > frequencies[b]) return 1;

    return b - a;
  });
}
module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
