function work(a, b) {
  console.log(a + b); // work is an arbitrary function or method
}

function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, args);
  }
  wrapper.calls = [];
  return wrapper;
}
// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// work.calls.forEach((args) => console.log(`call: ${args.join()}`));

// Delaying decorator
function f(x) {
  console.log(x);
}

function delay(func, ms) {
  return (...args) => setTimeout(() => func.apply(this, args), ms);
}

// create wrappers
const f1000 = delay(f, 1000);
const f1500 = delay(f, 1500);

f1000('test'); // shows "test" after 1000ms
f1500('test'); // shows "test" after 1500ms

function debounce(func, ms) {
  let timerId;
  function wrapper(...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => func.apply(this, args), ms);
  }
  return wrapper;
}

function throttle(func, ms) {
  let isThrottle = false;
  let lastArgs;
  let lastThis;
  function wrapper(...args) {
    if (isThrottle) {
      lastThis = this;
      lastArgs = args;
      return;
    }
    isThrottle = true;
    func.apply(this, args);
    setTimeout(() => {
      isThrottle = false;
      if (lastArgs) {
        wrapper.apply(lastThis, lastArgs);
        lastArgs = null;
        lastThis = null;
      }
    }, ms);
  }
  return wrapper;
}
