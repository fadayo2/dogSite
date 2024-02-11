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

let i = 0;

const images = [
  "url('img/dogSketch-.png')",
  "url('img/dogSketch1-.png')",
  "url('img/dogSketch3-.png')"
];

setInterval(() => {
  img.style.backgroundImage = images[i];
  i = (i + 1) % images.length;
}, 5000);