const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Logo após sair de um dia cansativo como ferreiro na sua oficina, você se dirige a taverna mais próxima: O Buraco Fundo. Ao entrar, você percebe que o estabelecimento está lotado, mas há alguns lugares sobrando. Onde você senta? ",
        alternativas: [
            {
            texto:"Sentar-se no balcão.",
            afirmacao:"afirmação",
            },
            {
            texto:"Sentar-se na janela.",
            afirmacao:"afirmação",
            },
        ]
    },
    
    {
        enunciado: "Logo após sair de um dia cansativo como ferreiro na sua oficina, você se dirige a taverna mais próxima: O Buraco Fundo. Ao entrar, você percebe que o estabelecimento está lotado, mas há alguns lugares sobrando. Onde você senta? ",
        alternativas: [
            {
            texto:"Sentar-se no balcão.",
            afirmacao:"afirmação",
            },
            {
            texto:"Sentar-se na janela.",
            afirmacao:"afirmação",
            },
        ]
    },

    {
        enunciado: "Logo após sair de um dia cansativo como ferreiro na sua oficina, você se dirige a taverna mais próxima: O Buraco Fundo. Ao entrar, você percebe que o estabelecimento está lotado, mas há alguns lugares sobrando. Onde você senta? ",
        alternativas: [
            {
            texto:"Sentar-se no balcão.",
            afirmacao:"afirmação",
            },
            {
            texto:"Sentar-se na janela.",
            afirmacao:"afirmação",
            },
        ]
    },

    {
        enunciado: "Logo após sair de um dia cansativo como ferreiro na sua oficina, você se dirige a taverna mais próxima: O Buraco Fundo. Ao entrar, você percebe que o estabelecimento está lotado, mas há alguns lugares sobrando. Onde você senta? ",
        alternativas: [
            {
            texto:"Sentar-se no balcão.",
            afirmacao:"afirmação",
            },
            {
            texto:"Sentar-se na janela.",
            afirmacao:"afirmação",
            },
        ]
    },

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();
