let a = +prompt("Введите первое число", "");
let b = +prompt("Введите второе число", "");

alert( a + b );
// так как prompt дает string мы переобразуем его в int используя +prompt


function readNum() {
    let num;
  
    do {
      num = prompt("Введите ваше число", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
}
  
alert(`Число: ${readNum()}`);


let sum = 0;
while (sum < 11) {
  sum += 0.2;
  if (sum > 9.8 && sum < 10.2){
     alert( sum );
  }
}

function random(min, max) {
    let rand =  min + Math.random() * (max - min);
    Math.floor(rand) // <- это для округление для следующего задания
}
  
alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );