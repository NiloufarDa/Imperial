

function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (selectHeader.classList.contains('scroll-up-sticky') && selectHeader.classList.contains('sticky-top') && selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
}
document.addEventListener('scroll', toggleScrolled);
window.addEventListener('load', toggleScrolled);



AOS.init({
    duration: 600,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

const selectTyped = document.querySelector('.typed');
if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    });
}

const glightbox = GLightbox({
    selector: '.glightbox'
});

document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
        initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
            itemSelector: '.isotope-item',
            layoutMode: layout,
            filter: filter,
            sortBy: sort
        });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
        filters.addEventListener('click', function () {
            isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
            this.classList.add('filter-active');
            initIsotope.arrange({
                filter: this.getAttribute('data-filter')
            });
            if (typeof aosInit === 'function') {
                aosInit();
            }
        }, false);
    });

});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        "delay": 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    "loop": true,
    "speed": 600,
    "slidesPerView": "auto"
});
