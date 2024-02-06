/**
 * Change header when scrolling outside of image
 */

const header = document.querySelector('header.app-header');

if (header !== null) {
    document.addEventListener('scroll', () => {
        if (window.scrollY > window.innerHeight - 80) {
            header.classList.add('background');
            return;
        }

        header.classList.remove('background');
    });
}
