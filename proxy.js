// let user = {
//   name: 'John',
// };

// function wrap(target) {
//   return new Proxy(target, {
//     get(target, prop, receiver) {
//       if (prop in target) {
//         return Reflect.get(...arguments);
//       } else {
//         throw new ReferenceError(`Property doesn't exist: "${prop}"`);
//       }
//     },
//     /* your code */
//   });
// }

// user = wrap(user);

// // console.log(user.name); // John
// // console.log(user.age); // ReferenceError: Property doesn't exist: "age"

// let array = [1, 2, 3];

// array = new Proxy(array, {
//   get(target, index, receiver) {
//     if (index >= 0) {
//       return Reflect.get(...arguments);
//     } else {
//       return Reflect.get(target, +index + target.length, receiver);
//     }
//   },
// });

// console.log(array[-1]); // 3
// console.log(array[-2]); // 2

// Other array functionality should be kept "as is"

let handlers = Symbol('handlers');
function makeObservable(target) {
  target[handlers] = [];
  target.observe = function (func) {
    target[handlers].push(func);
  };
  return new Proxy(target, {
    set(target, prop, value, receiver) {
      if (Reflect.set(...arguments)) {
        target[handlers].forEach((handler) => {
          handler(prop, value);
        });
        return true;
      } else {
        return false;
      }
    },
  });
}

let user = {};
user = makeObservable(user);

user.observe((key, value) => {
  console.log(`SET ${key}=${value}`);
});

user.name = 'John'; // alerts: SET name=John
