let fruits = ["Яблоки", "Груша", "Апельсин"]

let shoppingCart = fruits;
shoppingCart.push("Банан")

alert(fruits.length) // 4 
///////////
let stylesmusic = ["Джаз", "Блюз"];

styles.push("Рок-н-ролл");

styles[Math.floor((stylesmusic.length - 1) / 2)] = "Классика";

alert( stylesmusic.shift() );

stylesmusic.unshift("Рэп", "Регги");
////
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // a,b,function(){.....}


const sumInput = () => {

  let numbers = [];

  while (true) {

    let value = prompt("Введите число", 0);

    if (value === "" || value === null) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

console.log( sumInput() );



const getMaxSubSum = (arr) => {
  let max = 0; // если элементов не будет - возвращаем 0

  for (let i = 0; i < arr.length; i++) {
    let start = 0;
    for (let j = i; j < arr.length; j++) {
      start += arr[j];
      max = Math.max(max, start);
    }
  }
  return max;
}
alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
