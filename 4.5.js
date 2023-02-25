function camelize(str) {
    return str.split('-').map((word, index) =>
        index == 0 ? word: 
        word[0].toUpperCase() + word.slice(1)
    ).join('')
}
console.log(camelize("background-color"))
console.log(camelize("list-style-image"))
console.log(camelize("-webkit-transition"))


function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && 
        item <= b));
    
}
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // 3,1

console.log( arr ); // 5,3,8,1 


function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
  
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  
  }
  
  
filterRangeInPlace(arr, 1, 4);
  
console.log( arr ); // 3, 1




let arr2 = [5, 2, 1, -10, 8];

arr2.sort((a, b) => b - a);

console.log( arr2 );


function copySorted(arr) {
    return arr.slice().sort();
}
let arr3 = ["HTML", "JavaScript", "CSS"]

let sorted = copySorted(arr3);

console.log(sorted)
console.log(arr3)


function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2]
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    }
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
}
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8


let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

console.log( names )



let users2 = [ vasya, petya, masha ];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));


console.log( usersMapped[0].id ); // 1
console.log( usersMapped[0].fullName );



function sortByAge(arr) {
  arr.sort((a, b) => a.age > b.age ? 1 : -1);
}



sortByAge(users);

console.log(users[0].name); 
console.log(users[1].name); 
console.log(users[2].name); 



function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}


console.log( getAverageAge(users) );






function uniqueWords(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( uniqueWords(strings) );


function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}
let passagirs = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(passagirs);
console.log(usersById)