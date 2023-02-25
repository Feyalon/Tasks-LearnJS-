function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  
    return days[date.getDay()];
}
let date = new Date(2014, 9, 7);
console.log( getWeekDay(date) );


function getLocalDay(date) {

    let day = date.getDay();
  
    if (day == 0) {
      day = 7;
    }
  
    return day;
}
console.log( getLocalDay(date) ); 

function getDateAgo(date, days) {
    date.setDate(date.getDate() - days);
    return date.getDate();
}


console.log( getDateAgo(date, 1) ); 
console.log( getDateAgo(date, 2) ); 
console.log( getDateAgo(date, 365) );


function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}
  
console.log( getLastDayOfMonth(2012, 0) );
console.log( getLastDayOfMonth(2012, 1) );
console.log( getLastDayOfMonth(2013, 1) );

function getSecondsToday() {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
    let diff = now - today;
    return Math.round(diff / 1000);
}

console.log( getSecondsToday() );


function getSecondsToTomorrow() {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
    let totalSecondsInADay = 86400;
  
    return totalSecondsInADay - totalSecondsToday;

}
getSecondsToTomorrow() == 3600



function formatDate(date) {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;
  
    // форматирование
    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
  
    if (diffSec < 1) {
      return 'прямо сейчас';
    } else if (diffMin < 1) {
      return `${diffSec} сек. назад`
    } else if (diffHour < 1) {
      return `${diffMin} мин. назад`
    } else {
      return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
}
console.log( formatDate(new Date(new Date - 1)) ); 

console.log( formatDate(new Date(new Date - 30 * 1000)) ); 

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); 

console.log( formatDate(new Date(new Date - 86400 * 1000)) );