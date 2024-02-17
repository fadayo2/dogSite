const openMenu = () => {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('closemenu').style.display = 'block';
    document.getElementById('menuDiv').style.height = '200px';
    document.getElementById('menuDiv').style.width = '100vw';
}

const closeMenu = () => {
    document.getElementById('closemenu').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
    document.getElementById('menuDiv').style.height = 0;
    document.getElementById('menuDiv').style.width = 0;
}

let img = document.getElementById('img');
let img1 = document.getElementById('img1');

let i = 0;

const images = [
  "url('img/dogSketch-.png')",
  "url('img/dogSketch1-.png')",
  "url('img/dogSketch3-.png')",
  "url('img/dogSketch4-.png')",
  "url('img/dogSketch5.png')",
];

setInterval(() => {
  img.style.backgroundImage = images[i];
  i = (i + 1) % images.length;
}, 5000);

setInterval(() => {
  img1.style.backgroundImage = images[i];
  i = (i + 1) % images.length;
}, 5000);


let home = document.getElementById('home');
let homeMo = document.getElementById('homeMo');
let product = document.getElementById('product');
let productMo = document.getElementById('productMo');
let about = document.getElementById('about');
let aboutMo = document.getElementById('aboutMo');
let contact = document.getElementById('contact');
let contactMo = document.getElementById('contactMo');
let seeMore = document.getElementById('seeMore');

home.addEventListener('click', ()=>{
  window.location.href = 'index.html'
})

home.addEventListener('click', ()=>{
  home.style.color = 'red'
})


homeMo.addEventListener('click', ()=>{
  window.location.href = 'index.html'
})

product.addEventListener('click', ()=>{
  window.location.href = 'product.html'
})

productMo.addEventListener('click', ()=>{
  window.location.href = 'product.html'
})

about.addEventListener('click', ()=>{
  window.location.href = 'about.html'
})

aboutMo.addEventListener('click', ()=>{
  window.location.href = 'about.html'
})

contact.addEventListener('click', ()=>{
  window.location.href = 'contact.html'
})

contactMo.addEventListener('click', ()=>{
  window.location.href = 'contact.html'
})

seeMore.addEventListener('click' , ()=>{
  window.location.href = 'product.html'
})