//pegando elementos do html

const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');
const nuvem = document.querySelector('.nuvem');
const fimDeJogo = document.querySelector('.fim-de-joog');
const botaoReiniciar = document.querySelector('.reiniciar');

let pontuacao = 0;

document.addEventListener('keyup', fazerMarioPular);

function fazerMarioPular() {
    mario.classList.add('pular');
    setTimeout(function () {
        mario.classList.remove('pular');
        pontuacao++;

        atualizarPontuacao();
    },500);
}

function atualizarPontuacao() {
    console.log('Pontuação: ' + pontuacao);
}

function verificarColisoes() {
    const posicaoCano = cano.offsetLeft;
    const posicaoMario = parseFloat(getComputedStyle(mario).bottom);
    const posicaoNuvem = parseFloat(getComputedStyle(nuvem).bottom);

    if(posicaoCano <- 100 && posicaoCano > 0 && posicaoMario < 60) {
        console.log("Você morreu, sua pontuação foi de: ", pontuacao);
        pontuacao = 0;
        pararJogo();

        cano.style.animation = 'none';
        cano.style.left = `${posicaoCano}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${posicaoMario}px`;
        mario.src = 'assets/imgs/fim-de-jogo.png';
        mario.style.width = '70px';
        mario.style.marginLeft = '35px';

        nuvem.style.animation = 'nuvem 20s infinite linear';
        nuvem.style.left = `${posicaoNuvem}px`;

        fimDeJogo.style.visibility = 'visible';
    }


    let loopJogo = setInterval(verificarColisoes, 10);
    function pararJogo() {
        clearInterval(loopJogo);
        console.log("Jogo Parado");
    }
}