//selec botão principal pelo ID
const botao = document.getElementById("btn-acao");

//variáveis
let contadorCliques = 0; 
let contadorFugas = 0;
const maxFugas = 10;

//função mover botão para posição aleatória
function fugir() {
    const larguraTela = window.innerWidth; 
    const alturaTela = window.innerHeight; 

    //calcula nova posição aleatória
    const novaPosX = Math.random() * (larguraTela - botao.offsetWidth);
    const novaPosY = Math.random() * (alturaTela - botao.offsetHeight);

    //aplica nova posição no botão
    botao.style.left = `${novaPosX}px`;
    botao.style.top = `${novaPosY}px`;
}

//função controlar a fuga
function eventoFuga() {
    //verifica se ainda não atingiu o limite
    if (contadorFugas < maxFugas) {
        fugir(); //move o botão
        contadorFugas++;

        //quando atingir o limite para de fugir
        if (contadorFugas >= maxFugas) {
            //remove evento de mouseover para botão parar de fugir
            botao.removeEventListener("mouseover", eventoFuga);

            //mensagem para usuário
            botao.textContent = "Agora pode clicar";
            botao.style.backgroundColor = "green";
        }
    }
}

//adiciona evento para botão fugir quand passar o mouse
botao.addEventListener("mouseover", eventoFuga);

//evento de click
botao.addEventListener("click", () => {
    //impede o click enquanto ainda estiver fugindo
    if (contadorFugas < maxFugas) return;
    contadorCliques++;

    //executaao clicar
    if (contadorCliques >= 1) {

        //pega posição e tamanho do botão
        const rect = botao.getBoundingClientRect();

        //calcula centro do botão
        const centroX = rect.left + rect.width / 2;
        const centroY = rect.top + rect.height / 2;

        //cria efeito de explosão
        criarExplosao(centroX, centroY);

        //divide o botão em dois
        dividirBotao(botao);

        //esconde botão original
        botao.style.display = "none";
    }
});

//função criar explosão partículas
function criarExplosao(x, y) {
    //cria partículas
    for (let i = 0; i < 30; i++) {

        //cria elemento da partícula
        const particula = document.createElement("div");
        particula.classList.add("particula");

        //posição inicial
        particula.style.left = x + "px";
        particula.style.top = y + "px";

        //direção aleatória
        const angulo = Math.random() * 2 * Math.PI;
        const distancia = Math.random() * 150;

        //calcula deslocamento
        const destinoX = Math.cos(angulo) * distancia;
        const destinoY = Math.sin(angulo) * distancia;

        //passa valores pro CSS
        particula.style.setProperty("--x", `${destinoX}px`);
        particula.style.setProperty("--y", `${destinoY}px`);

        //adiciona partícula na tela
        document.body.appendChild(particula);

        //remove a partícula depois da animação
        setTimeout(() => {
            particula.remove();
        }, 800);
    }
}

//função que dividir botao
function dividirBotao(botao) {
    //pega posição e tamanho do botão
    const rect = botao.getBoundingClientRect();

    //salva texto do botão
    const texto = botao.textContent;

    //container para segurar partes do botao
    const base = document.createElement("div");
    base.style.position = "absolute";
    base.style.left = rect.left + "px";
    base.style.top = rect.top + "px";
    base.style.width = rect.width + "px";
    base.style.height = rect.height + "px";

    //metade esquerda
    const esquerda = document.createElement("div");
    esquerda.classList.add("metade", "metade-esquerda");
    esquerda.style.left = "0";

    const spanE = document.createElement("span");
    spanE.textContent = texto;

    esquerda.appendChild(spanE);

    //metade direita
    const direita = document.createElement("div");
    direita.classList.add("metade", "metade-direita");
    direita.style.right = "0";

    const spanD = document.createElement("span");
    spanD.textContent = texto;

    //desloca o texto e alinha com metad direita
    spanD.style.left = "-100%";

    direita.appendChild(spanD);

    //adiciona as partes no container
    base.appendChild(esquerda);
    base.appendChild(direita);

    //adiciona na tela
    document.body.appendChild(base);

    //remove as parte depois da animação
    setTimeout(() => {
        base.remove();
    }, 800);
}


//seleciona botão tema
const temaBtn = document.getElementById("tema-toggle");

//evento de click
temaBtn.addEventListener("click", () => {

    //alterna classe light no body
    document.body.classList.toggle("light");

    //muda o emoji deacordo com tema
    if (document.body.classList.contains("light")) {
        temaBtn.textContent = "☀️";
    } else {
        temaBtn.textContent = "🌙";
    }
});