const image1 = document.querySelector('.header-img_1');
const image2 = document.querySelector('.header-img_2');
const image3 = document.querySelector('.header-img_3');
const image4 = document.querySelector('.header-img_4');
const image5 = document.querySelector('.header-img_5');
const image6 = document.querySelector('.header-img_6');
const image7 = document.querySelector('.header-img_7');
const image8 = document.querySelector('.header-img_8');
const image9 = document.querySelector('.header-img_9');
const imageMain = document.querySelector('.header-img_main');

// TOTAL ANIM LENGTH - 9 seconds
function isPlatformDesktop() {
    return browser.getPlatform()?.type === 'desktop';
}

const isDesktopAtStart = isPlatformDesktop();

const tlMain = anime({
    autoplay: isDesktopAtStart,
    targets: imageMain,
    easing: 'linear',
    loop: true,
    keyframes: [
        {duration: 850, translateX: 20, translateY: -20},
        {duration: 750, translateX: '+=10'},
        {duration: 750, translateX: '+=5', translateY: '+=20'},
        {duration: 750, translateX: '-=30', translateY: '+=150', scale: .5},
        {duration: 1300, translateX: '+=125', translateY: '-=10', scale: .35, filter: 'blur(12px)', opacity: .7},
        {duration: 1000, translateX: '+=15', translateY: '+=15', scale: .38},
        {duration: 1300, translateX: '+=35', translateY: '+=35', filter: 'blur(0px)', opacity: .9},
        {duration: 2300, translateX: 0, translateY: 0, scale: 1, filter: 'blur(0px)', opacity: 1}
    ]
});
const tl1 = anime({
    autoplay: isDesktopAtStart,
    targets: image1,
    easing: 'linear',
    loop: true,
    keyframes: [
        {duration: 1050, translateX: '20', translateY: '20', opacity: .8},
        {duration: 1050, translateX: '+=40', filter: 'blur(2px)'},
        {duration: 750, translateX: '+=20', translateY: '-=20', scale: 1.8, filter: 'blur(1px)', opacity: .9},
        {duration: 1050, translateX: '+=50', translateY: '+=10', filter: 'blur(0px)'},
        {duration: 1800, translateX: '-=5', translateY: '+=100', scale: 3, opacity: .8},
        {duration: 1050, translateX: '-=40'},
        {duration: 2250, translateX: '0', translateY: 0, opacity: 1, filter: 'blur(3px)', scale: 1},
    ]
});

const tl2 = anime({
    autoplay: isDesktopAtStart,
    targets: image2,
    easing: 'linear',
    loop: true,
    keyframes: [
        {duration: 1500, translateY: '50'},
        {duration: 800, translateX: '+=30', translateY: '-=10'},
        {duration: 1750, translateX: '+=100', translateY: '+=100', scale: 2, zIndex: 2},
        {duration: 650, translateX: '+=50', translateY: '+=70', scale: 2.4},
        {duration: 1250, translateX: '-=60', translateY: '+=100', scale: 1.2, opacity: .8, filter: 'blur(1px)'},
        {duration: 3050, translateX: '0', translateY: '0', scale: 1, opacity: 1, filter: 'blur(0px)', zIndex: 1},
    ]
});

const tl3 = anime({
    autoplay: isDesktopAtStart,
    targets: image3,
    easing: 'linear',
    loop: true,
    keyframes: [
        {duration: 1500, translateX: '30', translateY: '30', scale: '+=.4'},
        {duration: 1000, translateX: '+=10', translateY: '-=20', scale: '+=.2'},
        {duration: 750, translateX: '+=50', translateY: '-=10', scale: '+=.2'},
        {duration: 750, translateX: '-=10', translateY: '+=20', scale: '+=.1'},
        {duration: 1500, translateX: '-=70', translateY: '+=100', filter: 'blur(1px)'},
        {duration: 1500, translateY: '+=100', scale: 1, filter: 'blur(3px)', opacity: .8},
        {duration: 2000, translateX: '0', translateY: '0', filter: 'blur(0px)', opacity: 1},
    ]
});

const tl4 = anime({
    autoplay: isDesktopAtStart,
    targets: image4,
    easing: 'linear',
    loop: true,
    keyframes: [
        {duration: 1500, translateX: '-=40', translateY: '-=40', scale: 2.2},
        {duration: 2000, translateX: '-=30', translateY: '+=70', scale: 1.4, filter: 'blur(3px)', opacity: .7},
        {duration: 3000, translateX: '-=30', translateY: '-=150', scale: 1, filter: 'blur(0px)', opacity: 1},
        {duration: 2500, translateX: '0', translateY: '0'},
    ]
});

const tl5 = anime({
    autoplay: isDesktopAtStart,
    targets: image5,
    easing: 'linear',
    loop: true,
    keyframes: [
        {duration: 1750, translateX: '50', translateY: '-30', scale: 3, filter: 'blur(0px)'},
        {duration: 1250, translateX: '+=30'},
        {duration: 1500, translateY: '+=40', filter: 'blur(1px)', scale: '+=1.5'},
        {duration: 2000, translateX: '+=20', translateY: '-=250', scale: 8.8, filter: 'blur(0px)'},
        {duration: 2500, translateX: '0', translateY: '0', scale: 1, filter: 'blur(2px)'},
    ]
});

const tl6 = anime({
    autoplay: isDesktopAtStart,
    targets: image6,
    easing: 'linear',
    loop: true,
    keyframes: [
        {duration: 1500, translateX: '20', translateY: '-10'},
        {duration: 1500, translateY: '+=35'},
        {duration: 1500, translateX: '-=15', translateY: '+=15'},
        {duration: 1500, translateX: '-=20', translateY: '-20'},
        {duration: 3000, translateX: '0', translateY: '0'},
    ]
});

const tl7 = anime({
    autoplay: isDesktopAtStart,
    targets: image7,
    easing: 'linear',
    loop: true,
    keyframes: [
        {duration: 1750, translateX: '-40', translateY: '40'},
        {duration: 1500, translateY: '+=20', scale: .65, opacity: .7, filter: 'blur(2px)'},
        {duration: 1000, translateX: '+=20', translateY: '+=10', scale: .5, opacity: .5, filter: 'blur(4px)'},
        {duration: 750, translateX: '+=50', translateY: '+=50'},
        {duration: 1750, translateX: '+=20', translateY: '-=200', scale: .7, opacity: .9, filter: 'blur(0px)'},
        {duration: 2250, translateX: '0', translateY: '0', scale: 1, opacity: 1},
    ]
});

const tl8 = anime({
    autoplay: isDesktopAtStart,
    targets: image8,
    easing: 'linear',
    loop: true,
    keyframes: [
        {duration: 500, translateX: '-20', translateY: '20', filter: 'blur(3px)', opacity: .9},
        {duration: 1500, translateX: '-=10', translateY: '-=70'},
        {duration: 2000, translateX: '-=25', translateY: '+=80', filter: 'blur(0px)', opacity: 1, scale: 1.8},
        {duration: 2000, translateX: '-=70', translateY: '+=200', filter: 'blur(3px)', opacity: .7, scale: 1},
        {duration: 3000, translateX: '0', translateY: '0', filter: 'blur(6px)', opacity: .6},
    ]
});

const tl9 = anime({
    autoplay: isDesktopAtStart,
    targets: image9,
    easing: 'linear',
    loop: true,
    keyframes: [
        {duration: 1500, translateX: '-=80', translateY: '-=30', filter: 'blur(10px)', opacity: .7, scale: .6},
        {duration: 1000, translateX: '+=30', translateY: '+=70', scale: .75},
        {duration: 2500, translateX: '+=50', translateY: '-=15', scale: 1},
        {duration: 2000, translateX: '-=30', translateY: '+=70'},
        {duration: 2000, translateX: '0', translateY: '0', filter: 'blur(0px)', opacity: 1},
    ]
});

const allAnimations = [tlMain, tl1, tl2, tl3, tl4, tl5, tl6, tl7, tl8, tl9];

let isPrevPlatformDesktop = isPlatformDesktop();

window.addEventListener('resize', () => {
    const isUpdatedPlatformDesktop = isPlatformDesktop();
    if (isUpdatedPlatformDesktop && !isPrevPlatformDesktop) {
        allAnimations.forEach(anim => anim.play())
    } else if (isPrevPlatformDesktop && !isUpdatedPlatformDesktop) {
        allAnimations.forEach(anim => anim.reset());
        allAnimations.forEach(anim => anim.pause());
    }
    isPrevPlatformDesktop = isUpdatedPlatformDesktop
})