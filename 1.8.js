alert(null || 2 || undefined)
// выведет 2 так как он true
alert(alert(1) || 2 || alert(3))
// 1 и 3. До 3 не дойдет
alert( alert(1) && alert(2) );
// 1 и undefined

alert(null || 2 && 3 || 4) // null, 3, 4
// выведeт 3

if (age >= 14 && age <= 90){
    //....
}
if(age >= 14 && age <= 90){

}
if(age < 14 || age > 90){}

// Выполнится.
if (-1 || 0) alert( 'first' );

// Не выполнится
if (-1 && 0) alert( 'second' );

// Выполнится
if (null || -1 && 1) alert( 'third' );
let userName = prompt("Кто ты?", '');

if (userName === 'Админ') {

  let pass = prompt('Пароль?', '');

  if (pass === 'admin') {
    alert( 'Здравствуйте!' );
  } else if (pass === '' || pass === null) {
    alert( 'Отменено' );
  } else {
    alert( 'Неверный пароль' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Отменено' );
} else {
  alert( "Я тебя не знаю" );
}