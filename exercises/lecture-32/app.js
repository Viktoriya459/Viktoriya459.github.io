// Використовуючи метод fetch замість XMLHttpRequest, переписати сценарій app.js
const url = "https://jsonplaceholder.typicode.com/posts";

const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
<p>Author: <strong><span class="author" data-id="${item.userId}"></span></strong></p>
`;

const fetchData = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Error');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Something went wrong!', error);
    return null;
  }
};

fetchData(url)
  .then(posts => {
    let result = '';
    posts.forEach(item => {
      result += template(item);
    });
    document.getElementById("blog").innerHTML = result;
  })
  .then(async () => {
    const users = document.querySelectorAll('.author');
    for (const user of users) {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user.dataset.id}`);
        if (!response.ok) {
          throw new Error('Error');
        }
        const userData = await response.json();
        user.textContent = userData.name;
      } catch (error) {
        console.error('Something went wrong!', error);
      }
    }
  });

// const xhrPromise = (method, url) => {
//   const promise = new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url);
//     xhr.send();
  
//     xhr.onload = () => {
//       if (xhr.status >= 400) {
//         reject(xhr.response);
//       } else {
//         resolve(xhr.response);
//       }
//     };

//     xhr.onerror = () => {
//       reject('Something went wrong!');
//     };   
//   });

//   return promise;
// };

// console.log(xhrPromise("GET", url));

// xhrPromise("GET", url)
// .then(response => {
//     const posts = JSON.parse(response)
// 		let result = ''
//     posts.forEach(item => {
//         result += template(item)
//     })
//     document.getElementById("blog").innerHTML = result;
    
// })

// .then( () => {
//   const users  = document.querySelectorAll('.author');
//   users.forEach(user => {
//     xhrPromise("GET", `https://jsonplaceholder.typicode.com/users/${user.dataset.id}`)
//     .then(response => {
//       let userName = JSON.parse(response)
//       console.log(userName.name)
//       user.textContent = userName.name
//     })
//   })

// });
