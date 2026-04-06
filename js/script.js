// Aguarda o carregamento completo do DOM (já garantido pelo atributo 'defer' no HTML, mas mantido por segurança)
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona os elementos que vamos interagir
    const btnAcao = document.getElementById('btnAcao');
    const modal = document.getElementById('meuModal');
    const btnFechar = document.getElementById('btnFechar');

    // Função para abrir o modal
    btnAcao.addEventListener('click', () => {
        modal.classList.add('active');
    });

    // Função para fechar o modal pelo botão "Fechar"
    btnFechar.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // Função para fechar o modal clicando fora do conteúdo (no fundo escuro)
    window.addEventListener('click', (evento) => {
        if (evento.target === modal) {
            modal.classList.remove('active');
        }
    });
});