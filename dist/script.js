let menuBtn = document.getElementById('menu-btn');
let sideNav = document.getElementById('side-nav');
const navClose = document.getElementById('nav-close');
let menuTitle = document.getElementById('menu-title');
let navigation = document.getElementsByClassName('navigation')[0];

const discoverTitle = document.getElementById('discover-title');
const discoverNav = document.getElementsByClassName('discover-nav')[0];
const discoverNavLinks = document.getElementsByClassName('discover-nav-links')[0];

menuBtn.addEventListener('click', openMenu);
navClose.addEventListener('click', closeMenu);

// accesses discover menu
discoverTitle.addEventListener('click', discoverMenu);
// closes discover menu after choosing link
discoverNavLinks.addEventListener('click', discoverMenu);

// opens side menu
function openMenu() {
    navigation.classList.toggle('active');
    sideNav.classList.toggle('active');
    navClose.style.display = 'block'; // displays navClose
    menuBtn.style.display = 'none';
    menuTitle.style.color = 'white';
}

// closes side menu
function closeMenu() {

    navigation.classList.toggle('active');
    sideNav.classList.toggle('active');
    navClose.style.display = 'none';
    menuBtn.style.display = 'block';
    menuTitle.style.color = 'black';
}

function discoverMenu() {
    discoverTitle.classList.toggle('active');
    discoverNav.classList.toggle('active');

}