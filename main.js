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