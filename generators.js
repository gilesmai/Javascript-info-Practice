function* pseudoRandom(seed) {
  let temp = seed;
  while (true) {
    temp = (temp * 16807) % 2147483647;
    yield temp;
  }
}

let generator = pseudoRandom(1);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
