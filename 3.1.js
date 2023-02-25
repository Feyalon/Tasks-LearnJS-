let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

function isEmpty(obj) {
    for (let i in obj) {
      return false;
    }
    return true;
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

const user = {
    name: "John"
};
user.name = "Peter"; // работает


function multiplyNum(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
}
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
  
multiplyNum(menu);
  
// после вызова функции
// menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
// };