const formCandidatura = document.getElementById('form-candidatura');
const mensagemSucesso = document.getElementById('mensagem-sucesso');

formCandidatura.addEventListener('submit', function(evento) {
    evento.preventDefault();

    mensagemSucesso.textContent = "Muito obrigado por se candidatar"

    mensagemSucesso.classList.remove('hidden');

    formCandidatura.reset();

});
