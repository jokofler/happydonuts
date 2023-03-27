const menuToggle = document.querySelector('#menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');
const menuItems = document.querySelectorAll('[data-is-menu-item="1"]');
const sectionsIdsToObserve = ['home', 'specs', 'dumpster', 'chipmunk', 'roadmap', 'team'];
const sectionsToObserve = sectionsIdsToObserve.map(id => document.querySelector(`#${id}`));

menuItems.forEach(el => {
    if (el.classList.contains('navbar-menu-mobile__item')) {
        el.addEventListener('click', toggleMobileMenu)
    }
})

menuToggle.addEventListener('click', toggleMobileMenu)

function toggleMobileMenu() {
    mobileMenu.classList.toggle('opened');
    document.body.classList.toggle('overflow-hidden');
    document.querySelector('html').classList.toggle('overflow-hidden')
}

sectionsToObserve.forEach(el => {
    new Waypoint({
        element: el,
        handler: function () {
            menuItems.forEach(link => {
                const linkAnchor = link.getAttribute('href').replace('#', '')
                link.classList.toggle('active', linkAnchor === el.id);
            })
        },
        offset: el.id === 'home' ? -250 : 0
    })
})