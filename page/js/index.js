/* variaveis */
const articles = document.querySelectorAll('#exp article');
const articleTitulo = document.querySelectorAll('.titulo')

articles.forEach(article => {
    accordionHeightInicial(article);
})

/* funcoes */
function openCloseAccordion(el) {
    const btn = el.querySelector('button');
    el.classList.toggle('opened');
    btn.style.transform = el.className.includes('opened') ? 'rotate(180deg)' : 'rotate(0deg)';
    editAccordionHeight(el.parentElement, !!el.className.includes('opened'));
}

function editAccordionHeight(accordion, opened) {
    if(opened) {
        const getStyle = (el) => window.getComputedStyle(el);
        const divDescricao = accordion.querySelector('.descricao');
        const divDescricaoMargin = parseInt(getStyle(divDescricao).marginTop.split(1, -2));//slice => remover o 'px'
        const divDescricaoHeight = divDescricao.offsetHeight;
        const soma = [divDescricaoHeight, divDescricaoMargin].reduce((acc, val) => acc + val, 0);

        accordion.style.height = `${accordion.offsetHeight + soma}px`;
    } else {
        accordionHeightInicial(accordion);
    }
}

function accordionHeightInicial(article) {
    const getStyle = (el) => window.getComputedStyle(el);

    const articlePadding = parseInt(getStyle(article).paddingBlock.split(1, -2)) * 2; //* 2 => 20px -> 20 (top) + 20 (bottom)
    const divTituloHeight = article.querySelector('.titulo').offsetHeight;
    article.style.height = `${articlePadding + divTituloHeight}px`; 
}
