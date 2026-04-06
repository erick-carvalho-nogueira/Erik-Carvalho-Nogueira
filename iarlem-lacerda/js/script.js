const btn = document.getElementById("btnContato");
const modal = document.getElementById("modal");
const fechar = document.getElementById("fecharModal");
const frase = document.getElementById("frase");

const frases = [
  "Todo código começa com uma ideia.",
  "Enquanto você descansa, alguém está evoluindo.",
  "Erro é só parte do processo.",
  "Comece pequeno, evolua grande.",
  "Você só perde quando desiste.",
  "Como dizia Dori: 'Continue a nadar, continue a nadar!'",
  "Cada linha de código é um passo para o sucesso.",
];

btn.onclick = () => {
  modal.classList.add("show");

  const texto = frases[Math.floor(Math.random() * frases.length)];
  frase.innerHTML = "";

  let i = 0;
  function digitar() {
    if (i < texto.length) {
      frase.innerHTML += texto.charAt(i);
      i++;
      setTimeout(digitar, 30);
    }
  }

  digitar();
};

fechar.onclick = () => modal.classList.remove("show");

window.onclick = (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
};