console.log("bootstrap nao presta");

var acc = document.getElementsByClassName("accordion");
var i;
const botaoMeta = document.getElementById("submitMeta");
const botaoColaborador = document.getElementById("submitColaborador");

function toggleImage(event, img) {
  event.preventDefault();
  const currentSrc = img.getAttribute("src");
  if (currentSrc === "./images/check.png") {
    img.setAttribute("src", "./images/check-mark.png");
  } else if (currentSrc === "../images/check.png") {
    img.setAttribute("src", "../images/check-mark.png");
  } else if (currentSrc === "./images/check-mark.png") {
    img.setAttribute("src", "./images/check.png");
  } else {
    img.setAttribute("src", "../images/check.png");
  }
}

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// Pega todos os botões com a classe "accordion"
const accordions = document.querySelectorAll(".accordion");

// Itera sobre cada botão
accordions.forEach((button) => {
  // Adiciona um "ouvinte de evento" para o clique
  button.addEventListener("click", () => {
    // Encontra a imagem da seta dentro do botão clicado
    const arrowImage = button.querySelector(".img-accordion");

    // Alterna a classe 'open' na imagem da seta.
    arrowImage.classList.toggle("open");
  });
});

const containerTarefas = document.getElementById("gestao-tarefas-grid");
// Pegamos todos os elementos dentro do container de tarefas, exceto os títulos
const itensGrid = Array.from(containerTarefas.children).slice(5); // .slice(5) para ignorar os 5 títulos iniciais

const contadorPagina = document.getElementById("contadorPagina");
const setaEsquerda = document.getElementById("setaEsquerda");
const setaDireita = document.getElementById("setaDireita");

// Configurações da paginação
const itensPorLinha = 5; // São 5 colunas de dados por linha de tarefa
const linhasPorPagina = 5; // A quantidade de linhas que você quer mostrar por página
const itensPorPagina = itensPorLinha * linhasPorPagina;

let paginaAtual = 1;
const totalPaginas = Math.ceil(itensGrid.length / itensPorPagina);

function exibirPagina(pagina) {
  // Garante que a página não seja menor que 1 ou maior que o total
  pagina = Math.max(1, Math.min(pagina, totalPaginas));
  paginaAtual = pagina;

  const inicio = (pagina - 1) * itensPorPagina;
  const fim = inicio + itensPorPagina;

  // Esconde todos os itens de tarefa
  for (let i = 0; i < itensGrid.length; i++) {
    itensGrid[i].style.display = "none";
  }

  // Exibe apenas os itens da página atual
  for (let i = inicio; i < fim && i < itensGrid.length; i++) {
    itensGrid[i].style.display = ""; // O valor padrão, que permite a exibição
  }

  // Atualiza o contador de página
  contadorPagina.textContent = `Página ${paginaAtual} de ${totalPaginas}`;
}

// Adiciona os ouvintes de evento (agora funciona corretamente)
setaEsquerda.addEventListener("click", (event) => {
  event.preventDefault(); // Impede o link de recarregar a página
  exibirPagina(paginaAtual - 1);
});

setaDireita.addEventListener("click", (event) => {
  event.preventDefault(); // Impede o link de recarregar a página
  exibirPagina(paginaAtual + 1);
});

// Chama a função para exibir a primeira página ao carregar a página
exibirPagina(1);




