const hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  },
};

const speedy = {
  __proto__: hamster,
};

const lazy = {
  __proto__: hamster,
};

// This one found the food
speedy.eat('apple');
// console.log(speedy.stomach); // apple

// This one also has it, why? fix please.
// console.log(lazy.stomach); // apple

Function.prototype.defer = function (ms) {
  let f = this;
  return function (...args) {
    setTimeout(() => f.apply(this, args), ms);
  };
};

function f(a, b) {
  console.log(a + b);
}

f.defer(1000)(1, 2); // shows 3 after 1 second

let a = {
  abc: 123,
};
