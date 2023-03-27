

const roadmapWaypoint = new Waypoint({
    element: document.querySelector('.roadmap-wrapper'),
    handler: startAnim,
    offset: 0
})

const roadmapSlider = new Swiper('.roadmap-wrapper .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 24,
    navigation: {
        nextEl: '.roadmap-slider-next',
        prevEl: '.roadmap-slider-prev',
    },
    pagination: {
        el: '.roadmap-wrapper .swiper-pagination',
        clickable: true
    },
})

const roadmapItemsIdsInOrder = ['1', '2', '3', '6', '5', '4']
let isAnimPlayed = false;

function startAnim() {
    console.log('here we are')
    if (isAnimPlayed) {
        return
    }
    isAnimPlayed = true
    roadmapItemsIdsInOrder.forEach((id, i) => {
        const el = document.querySelector(`#roadmap-item-${id}`);
        el.style.zIndex = `${i}`;
        setTimeout(() => {
            el.classList.add('opened')
        }, i * 750)
    })
}

