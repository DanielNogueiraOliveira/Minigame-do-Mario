const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');
const tijolinho = document.querySelector('.tijolinho')

//troca a classe do elemento "mario" para "pulo" quando clica qlqr tecla
const pulo = () => {
    mario.classList.add('pulo');
 
    // define um temporizador que quando o tempo da animação acaba faz o elemento "mario" voltar com a classe "mario"
    setTimeout(() => {
        mario.classList.remove('pulo');
    }, 500);
}
const loop = setInterval(() => {
    

    const posicaoCano = cano.offsetLeft;
    const posicaotijolinho = tijolinho.offsetLeft;
    const posicaoMario = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if(posicaoCano <= 110 && posicaoCano > 0 && posicaoMario < 280) {

        cano.style.animation = 'none';
        cano.style.left = `${posicaoCano}px`;

        tijolinho.style.animation = 'none';
        //ainda falta fazer o tijolo parar ao lado do cano (não em cima)
        tijolinho.style.left = `${posicaoCano}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${posicaoMario}px`;

        mario.src = '/assents/game-over.png';
        mario.style.width = "75px";
        mario.style.marginLeft = '40px';

        clearInterval(loop)

    }

}, 10);

document.addEventListener('keydown', pulo);