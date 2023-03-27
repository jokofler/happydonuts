const elements = document.querySelectorAll('.box-dumpster img');

const animateBoxImg = el => {
    anime({
        targets: el,
        easing: 'easeInSine',
        loop: true,
        direction: 'alternate',
        keyframes: [
            {
                translateX: (el, i) => anime.random(-100 + i * 10, 100 + i * 25),
                translateY: (el, i) => anime.random(-100 + i * 10, 100 + i * 10),
                duration: anime.random(750, 2000),
                scale: anime.random(5, 15) / 10,
                filter: () => `blur(${anime.random(0, 1 * anime.random(0, 6))}px)`,
                opacity: () => anime.random(5, 10) / 10
            },
            {
                translateX: (el, i) => anime.random(-100 + i * 10, 100 + i * 25),
                translateY: (el, i) => anime.random(-100 + i * 10, 100 + i * 10),
                duration: anime.random(750, 2000),
                scale: anime.random(5, 15) / 10,
                filter: () => `blur(${anime.random(0, 1 * anime.random(0, 6))}px)`,
                opacity: () => anime.random(5, 10) / 10
            },
            {
                translateX: (el, i) => anime.random(-100 + i * 10, 100 + i * 25),
                translateY: (el, i) => anime.random(-100 + i * 10, 100 + i * 10),
                duration: anime.random(750, 2000),
                scale: anime.random(5, 15) / 10,
                filter: () => `blur(${anime.random(0, 1 * anime.random(0, 6))}px)`,
                opacity: () => anime.random(5, 10) / 10
            },
        ]
    })
}

elements.forEach(el => {
    animateBoxImg(el);
})