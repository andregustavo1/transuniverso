"use strict";
const observerCallback = (entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0');
            entry.target.classList.remove('-translate-x-full');
            entry.target.classList.remove('translate-x-full');
        }
    });
};
const observerOptions = {
    rootMargin: '-20% 0px'
};
const observer = new IntersectionObserver(observerCallback, observerOptions);
const elements = document.querySelectorAll('.scroll-animation');
elements.forEach((el) => observer.observe(el));
//# sourceMappingURL=index.js.map