// pegar elementos html
const btnParticipar = document.getElementById("btn-participar");
const btnsFechar = document.querySelectorAll(".exit, .close");
const modalFormulario = document.querySelector(".modal-formulario");
const modalEnviado = document.querySelector(".modal-enviado");
const form = document.querySelector("form");

// funções de click
btnParticipar.addEventListener("click", () => {
    modalFormulario.showModal();
})

btnsFechar.forEach(botao => {
    botao.addEventListener("click", () => {
        modalFormulario.close();
        modalEnviado.close();
    })
})

// fechar formulario e abri o modal enviado, resetar formulario ao clicar enviar
form.addEventListener("submit", (event) => {
    event.preventDefault();

    modalFormulario.close();
    modalEnviado.showModal();

    form.reset(); 
})