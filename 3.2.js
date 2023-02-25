function makeUser() {
    return {
      name: "John",
      ref: this
    };
}
  
let user = makeUser();
  
alert( user.ref.name ); // Error can't read property "name" of undefined


let calculator = {
    sum() {
      return this.a + this.b;
    },
  
    multiply() {
      return this.a * this.b;
    },
  
    read() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    }
};
  
calculator.read();
alert( calculator.sum() );
alert( calculator.multiply() );


let ladder = {
    step: 0,
    up() {
      this.step++; // return this;
    },
    down() {
      this.step--; // return this;
    },
    showStep: function() { 
      alert( this.step ); 
      // return this;
    }
};
ladder.up().up().down().showStep().down().showStep();