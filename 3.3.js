let obj = {};

function A() { 
    return obj; 
}
function B() { 
    return obj; 
}

alert( new A() == new B() ); // Возможно!


const Calculator = () => {
    this.read = function(){
        this.a = +prompt('a?', 0)
        this.b = +prompt('b?', 0)
    };
    this.sum = function(){
        return this.a + this.b
    };
    this.multiply = function(){
        return this.a * this.b
    };

}
let calculator = new Calculator();
calculator.read();
alert("Sum=" + calculator.sum())
alert("Multiply" + calculator.multiply())

const Accumulator = (startingValue) => {
    this.value = startingValue;
  
    this.read = function() {
      this.value += +prompt('Сколько нужно добавить?', 0);
    };
  
}
  
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);