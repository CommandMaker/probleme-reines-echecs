/**
 * Function triggered when an element is now visible on screen
 *
 * @param {IntersectionObserverEntry[]} entries Elements that are now visible
 * @param {IntersectionObserver} _ The observer object
 */
const onVisible = (entries, _) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animation');
            entry.target.classList.remove('unvisible');
        }
    })
}

const observer = new IntersectionObserver(onVisible, {
    root: null,
    rootMargin: '0px',
    threshold: 1
});

/** @var {string[]} elementsToAnimate CSS selector of elements to animate */
const elementsToAnimate = [
    'section#probleme h2',
    'section#probleme div.content',
    'section#solutions h2',
    'section#solutions .splitted'
];

const unvisibleElements = document.querySelectorAll('.unvisible');

unvisibleElements.forEach(el => {
    observer.observe(el);
});

//elementsToAnimate.forEach(el => {
//    if (document.querySelector(el) !== null) {
//        observer.observe(document.querySelector(el));
//    }
//});
