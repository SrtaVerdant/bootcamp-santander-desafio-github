const btn = document.getElementById('myBtn');
const body = document.getElementsByTagName('body')[0];
const mostra = document.getElementById('mostraMsg');

const colocaCor = function () {
    btn.addEventListener('click', async() => {
        const { paintRed } = await import('./metodos.mjs');

        paintRed(body, mostra);
    });
};

colocaCor();
