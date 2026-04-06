const btnIfro = document.getElementById("btn-ifro");
const btnLeo = document.getElementById("btn-leo");
const btnTec = document.getElementById("btn-tech");


btnIfro.addEventListener("click", function () 
{
    window.open("https://portal.ifro.edu.br/sobre-o-ifro", "_blank");
});

btnTec.addEventListener("click", function () 
{
    window.location.href = "tecnologias.html";
});

btnLeo.addEventListener("click", function () 
{
    window.open("https://github.com/leoferrarezi", "_blank");
});