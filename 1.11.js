function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Родители разрешили?');
    }
}
function checkAge(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Родители разрешили?');
}// оба одинаковы



function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}


function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
}
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Степень не поддерживается`);
  } else {
    alert( pow(x, n) );
}
pow(3, 2) 
pow(3, 3)
pow(1, 100)