let i = 3;

while (i) {
  alert( i-- );
} // 1
let d = 0;
while (++d < 5) alert( i );
let c = 0; // от 1 до 4
while (c++ < 5) alert( i ); // от 1 до 5
for (let i = 0; i < 5; i++) alert( i ); // от 0 до 4
for (let i = 0; i < 5; ++i) alert( i ); // от 0 до 4

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      alert( i );
    }
  }

let m = 0;
while (m < 3) {
    alert( `number ${m}!` );
    m++;
  }
let num;

do {
    num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);
let n = 10;

nextN:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextN;
  }

  alert( i ); 
}