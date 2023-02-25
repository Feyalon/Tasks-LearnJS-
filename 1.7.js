if("0"){
    alert("Привет") // Да выведится
}

let nameOfJs = prompt("Оффициальное название JS?")
if(nameOfJs == "ECMAScript" || nameOfJs == "ecmascript"){
    alert("Верно!")
}else {
    alert("Вы не знаете EcmaScript?")
}

let number = 1;
if(number > 0){
    alert("Число больше нуля!")
}else if(number < 0){
    alert("Число меньше нуля!")
}else{
    alert("Чилсо равно нулю!")
}

result = (a + b < 4) ? 'Мало' : 'Много';

let message = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  '';