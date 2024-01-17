/**
 * Change header when scrolling outside of image
 */

const header = document.querySelector('header.app-header');

document.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight) {
        header.classList.add('background');
        return;
    }
    
    header.classList.remove('background');
});
