// Scroll effect
const header = document.querySelector('header');
const main = document.querySelector('main');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        main.style.marginTop = '40px';
        header.style.backgroundColor = '#444';
    } else {
        main.style.marginTop = '';
        header.style.backgroundColor = '#333';
    }
});
