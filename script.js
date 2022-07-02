let valorA = null;
let valorB = null;
let operacao;

const botoes = document.querySelectorAll('.botao');
const visor = document.querySelector('.visor');

botoes.forEach(botao => { 
  botao.addEventListener('click', () => {
    const valorSelecionado = botao.textContent.trim();

    if(valorSelecionado === 'c') {
      valorA = null;
      valorB = null;
      visor.innerHTML = '0';
      return;
    }

    if(valorSelecionado === '=') {
      console.log('a', valorA)
      console.log('b', valorB)
      visor.innerHTML = `${Number(valorA) *  Number(valorB)}`;
    }

    if(valorSelecionado === 'x' && valorA) {
      valorB = valorSelecionado;
      operacao = 'x';
      // visor.innerHTML = `${Number(valorA) *  Number(valorSelecionado)}`;
    } else {
      valorA = valorSelecionado;
    }

    // if(valorSelecionado === '+') {
    //   console.log('clicou no mais');
    // }

    // if(valorSelecionado === '-') {
    //   console.log('clicou no menos');
    // }

    // if(valorSelecionado === '/') {
    //   console.log('clicou no divisao');
    // }

   

   

    // if(valorA) {
    //   valorB = valorSelecionado;
    // } else {
    //   valorA = valorSelecionado;
    // }

  });
});


