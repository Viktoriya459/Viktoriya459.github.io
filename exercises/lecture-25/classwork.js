let ul = document.createElement('ul');

let li = document.createElement('li');
li.textContent = 'li item 1'
ul.append(li)
console.dir(ul)

document.body.appendChild(ul)