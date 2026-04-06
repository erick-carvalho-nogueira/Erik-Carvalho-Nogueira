function marcarLinkAtual() {
  const url_atual = window.location.href;
  const nav_links = document.querySelectorAll('.navbar .elementos a');
  const butao = document.getElementById("botao");
  const overlay = document.getElementById("popUp");
  const fechaBotao = document.getElementById("fechaBotao");
  
  nav_links.forEach(link => {
    if (link.href === url_atual) {
      link.classList.remove('text-decoration-none');
      link.classList.add('link-ativo');
      
    }
  });
  
  butao.onclick = function () {
    overlay.style.display = "flex";
  }
  
  fechaBotao.onclick = function () {
    overlay.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == overlay) {
        overlay.style.display = "none";
    }
}
}