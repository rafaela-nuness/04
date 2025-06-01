// Função para alternar o modo claro/escuro
const botaoModo = document.querySelector('.botao-alternar-modo');
const body = document.body;



// Animação da linha do tempo ao scroll - vai revelar os itens conforme aparecem na tela
const itensTimeline = document.querySelectorAll('.item-timeline');

function revelarItens() {
  const alturaTela = window.innerHeight;
  
  itensTimeline.forEach(item => {
    const topoItem = item.getBoundingClientRect().top;

    if (topoItem < alturaTela * 0.85) {
      item.classList.add('visivel');
    }
  });
}

window.addEventListener('scroll', revelarItens);
window.addEventListener('load', revelarItens);
