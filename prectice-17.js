// const abc = document.getElementsByClassName('abc');
// const abcd= document.querySelectorAll('h1');
const image = document.querySelector('img');
const a = document.querySelector('a');
const h1 = document.querySelector('h1');
const h2 = document.createElement('h2');
h1.textContent = "hai jayesh kaise ahi";
h1.innerHTML = "<i>hai jayesh</> ";
// h1.hidden = true;  
// h1.style.margin = '0px';

// console.log(abc);
// console.log(abcd);
image.setAttribute("src", "https://img.freepik.com/free-photo/woman-beach-with-her-baby-enjoying-sunset_52683-144131.jpg?size=626&ext=jpg")
console.log(a.getAttribute('href'));

h2.textContent = "hello jayesh";
console.log(h2);
document.body.append(h2);