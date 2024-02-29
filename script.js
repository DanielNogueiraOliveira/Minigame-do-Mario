const mario = document.querySelector('.mario');

//troca a classe do elemento "mario" para "pulo" quando clica qlqr tecla
const pulo = () => {
    mario.classList.add('pulo');
 
    // define um temporizador que quando o tempo da animação acaba faz o elemento "mario" voltar com a classe "mario"
    setTimeout(() => {
        mario.classList.remove('pulo');
    }, 500);
}

document.addEventListener('keydown', pulo);