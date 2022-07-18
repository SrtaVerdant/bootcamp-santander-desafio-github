const classeModoEscuro = 'dark-mode';
const btn = document.getElementById('btn');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

function mudaCor() {
    mudaClasse();
    mudaTexto();

}

function mudaClasse() {
    btn.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');

}

function mudaTexto() {
    const ligthMode = 'Light Mode';
    const darkMode = 'Dark Mode';

    if (body.classList.contains('dark-mode')) {
        btn.innerHTML = ligthMode;
        h1.innerHTML = darkMode + ' ON';
        return;
    }

    btn.innerHTML = darkMode;
    h1.innerHTML = ligthMode + ' ON';

}

btn.addEventListener('click', mudaCor);