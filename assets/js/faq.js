const faqToggles = document.querySelectorAll('.faq-question__toggler, .faq-question__text');

faqToggles.forEach(el => el.addEventListener('click', () => {
    el.parentNode.parentNode.classList.toggle('opened');
    const currentSymbol = el.classList.contains('minus') ? 'minus' : 'plus';
    const newSymbol = currentSymbol === 'minus' ? 'plus' : 'minus'
    el.classList.replace(currentSymbol, newSymbol)
}))
