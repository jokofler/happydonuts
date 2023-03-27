const rarities = [
    'rare',
    'epic',
    'legendary'
];

const swipers = {}

rarities.forEach(rarity => {
    let prevBtnSelector = 'prev';
    let nextBtnSelector = 'next';

    const prevBtn = document.querySelector(`.swiper-navigation-btn-${prevBtnSelector}[data-swiper=${rarity}]`);
    const nextBtn = document.querySelector(`.swiper-navigation-btn-${nextBtnSelector}[data-swiper=${rarity}]`);
    prevBtn.addEventListener('click', function () {
        const rarity = this.dataset.swiper;
        swipers[rarity].slidePrev()
    })
    nextBtn.addEventListener('click', function () {
        const rarity = this.dataset.swiper;
        swipers[rarity].slideNext()
    })

    swipers[rarity] = new Swiper(`.slides-wrapper .swiper[data-swiper=${rarity}]`, {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            1024: {
                slidesPerView: 5,
                centeredSlides: false,
                autoplay: {
                    delay: 3000,
                    pauseOnMouseEnter: true
                }
            }
        }
    })
})