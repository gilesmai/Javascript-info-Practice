import fetch from 'node-fetch';
// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

// delay(3000).then(() => console.log('run after three seconds'));

// function loadJson(url) {
//   return fetch(url).then((response) => {
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       throw new Error(response.status);
//     }
//   });
// }

// async function loadJsonAsync(url) {
//   const response = await fetch(url);
//   if (response.status == 200) {
//     return await response.json();
//   } else {
//     throw new Error(response.status);
//   }
// }

// loadJson('https://javascript.info/no-such-user.json').catch(console.log); // Error: 404

// loadJsonAsync('https://javascript.info/no-such-user.json').catch(console.log);

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  const response = fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
}

// Ask for a user name until github returns a valid user
async function demoGithubUserAsync() {
  let name = prompt('Enter a name?', 'iliakan');

  while (true /*eslint-disable-line no-constant-condition*/) {
    try {
      const user = await loadJson(`https://api.github.com/users/${name}`);
      console.log(`Full name: ${user.name}.`);
      return user;
    } catch (e) {
      if (e instanceof HttpError && e.response.status == 404) {
        console.log('No such user. Pls reEnter');
      } else {
        throw e;
      }
    }
  }
}

demoGithubUserAsync();
