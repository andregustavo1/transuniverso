

type ObserverCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => void;

const observerCallback: ObserverCallback = (entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.remove('opacity-0');
      entry.target.classList.remove('-translate-x-full');
      entry.target.classList.remove('translate-x-full');
    }
  });
};

const observerOptions: IntersectionObserverInit = {
  rootMargin: '-20% 0px'
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

const elements = document.querySelectorAll<HTMLElement>('.scroll-animation');
elements.forEach((el) => observer.observe(el));
