document.addEventListener("DOMContentLoaded", function () {
  const botaoAnterior = document.getElementById("botaoAnterior");
  const botaoProximo = document.getElementById("botaoProximo");
  const personagens = document.querySelectorAll(".personagem");
  const fundo = document.getElementById("fundo");
  const overlay = document.getElementById("overlay");
  let indiceAtualPersonagem = 0;

  const fundos = [
    "url('img/fundoalegria.jpg')",
    "url('img/fundotristeza.jpg')",
    "url('img/fundomedo.jpg')",
    "url('img/fundoraiva.jpeg')",
    "url('img/fundonojo.jpg')",
  ];

  const coresTexto = [
    "#DBAC1A", // Alegria
    "blue", // Tristeza
    "purple", // Medo
    "red", // Raiva
    "green", // Nojinho
  ];

  function atualizarPersonagem() {
    personagens.forEach((personagem, indice) => {
      if (indice === indiceAtualPersonagem) {
        personagem.classList.add("show");
        personagem.classList.remove("hide");
      } else {
        personagem.classList.remove("show");
        personagem.classList.add("hide");
      }
    });
    fundo.style.backgroundImage = fundos[indiceAtualPersonagem];
    overlay.style.color = coresTexto[indiceAtualPersonagem];
  }

  botaoAnterior.addEventListener("click", function () {
    indiceAtualPersonagem =
      (indiceAtualPersonagem - 1 + personagens.length) % personagens.length;
    atualizarPersonagem();
  });

  botaoProximo.addEventListener("click", function () {
    indiceAtualPersonagem = (indiceAtualPersonagem + 1) % personagens.length;
    atualizarPersonagem();
  });

  atualizarPersonagem();
});
