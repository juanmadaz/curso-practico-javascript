const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const pClass = document.querySelector('pClass');
const pId = document.querySelector('#pId');
const input = document.querySelector('input');

// console.log(input.value);

console.log({
    h1,
    p,
    pClass,
    pId,
    input
});

h1.innerText = 'Cambio desde <br> JS'
// h1.innerHTML = 'Cambio desde <br> JS'
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'rojo')

h1.classList.add('rojo');
h1.classList.remove('verde');
// h1.classList.toogle('verde');
// h1.classList.contains('verde');

input.value='7777777777';

const img = document.createElement('img');
img.setAttribute('src', 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80')
console.log(img);
pId.innerText = '';
pId.appendChild(img);
console.log({pId});