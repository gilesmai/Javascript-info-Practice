function printNumbersInterval(from, to) {
  let current = from;
  const end = to;
  const timer = setInterval(() => {
    console.log(current);
    if (current === end) {
      clearInterval(timer);
    }
    current += 1;
  }, 1000);
}

function printNumbersTimeout(from, to) {
  let current = from;
  const end = to;
  setTimeout(function logNumber() {
    console.log(current);
    if (current === end) {
      return;
    }
    current += 1;
    setTimeout(logNumber, 1000);
  }, 1000);
}

// printNumbersTimeout(0, 5);

function abc() {
  console.log('abc function');
}

function warpper(func) {
  console.log(`name: ${func}`);
  return func;
}
abc = warpper(abc);
// console.log(abc);
console.log(abc);
