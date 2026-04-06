function abrirModal() {
  document.getElementById("modal").style.display = "flex";
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

function enviar() {
  const nome = document.querySelector('input[type="text"]').value.trim();
  const email = document.querySelector('input[type="email"]').value.trim();
  const msg = document.getElementById("message");

  if (!nome || !email) {
    msg.innerText = "Preencha todos os campos!";
    return;
  }

  msg.innerText = "Inscrição enviada com sucesso! 🚀";

  setTimeout(() => {
    fecharModal();
    msg.innerText = "";
  }, 2000);
}