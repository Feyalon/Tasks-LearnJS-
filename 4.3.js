function checkSpam(str) {
    let Str = str.toLowerCase();
  
    return Str.includes('viagra') || Str.includes('xxx');
}
alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );
/////////
function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
}
truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)

truncate("Всем привет!", 20)
////////
function extractCurrencyValue(str) {
    return +str.slice(1);
}
alert( extractCurrencyValue('$120') === 120 );