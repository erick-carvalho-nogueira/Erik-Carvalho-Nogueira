const btn = document.getElementById("btn");
const mensagem = document.getElementById("mensagem");
const imagem = document.getElementById("imagem");

btn.addEventListener("click", () => {
  imagem.classList.add("mostrar");
  mensagem.textContent = "Parabéns, agora você esta dentro do Calama Devs!🎉";
  
  imagem.classList.add("ativa");
});