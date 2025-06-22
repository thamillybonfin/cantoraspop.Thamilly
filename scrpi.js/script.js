const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acabou de descobrir que sua cantora pop favorita lançou um álbum surpresa! O que faz primeiro?",
        alternativas: [
            {
                texto: "Fico super empolgado e escuto a primeira música imediatamente!",
                afirmacao: "Você é fã dedicado e adora descobrir tudo sobre novos lançamentos."
            },
            {
                texto: "Aguardo até ter tempo para ouvir com calma e aproveitar cada detalhe.",
                afirmacao: "Você gosta de absorver cada elemento da música e fazer uma experiência imersiva."
            }
        ]
    },
    {
        enunciado: "Durante uma entrevista, a sua cantora pop favorita diz que está trabalhando em algo inovador para o próximo álbum. O que você acha disso?",
        alternativas: [
            {
                texto: "Fico super animado! Sei que ela vai arrasar, como sempre.",
                afirmacao: "Você confia no talento da sua cantora favorita e está pronto para a inovação!"
            },
            {
                texto: "Espero que ela não se perca tentando se reinventar demais.",
                afirmacao: "Você está um pouco preocupado com as mudanças e espera que ela mantenha a essência."
            }
        ]
    },
    {
        enunciado: "Você vai a um show de uma artista pop que você ama. Durante a performance, algo inesperado acontece: a cantora tem um imprevisto técnico e precisa improvisar. Como você reage?",
        alternativas: [
            {
                texto: "Eu adoro improvisos! Admiro ainda mais a artista por lidar com isso de forma espontânea.",
                afirmacao: "Você é fã do talento e da criatividade da artista, independentemente dos contratempos."
            },
            {
                texto: "Isso me deixou um pouco desconfortável, mas continuo admirando a artista.",
                afirmacao: "Você reconhece o talento da artista, mas prefere uma performance mais controlada."
            }
        ]
    },
    {
        enunciado: "Durante um evento de premiação, sua cantora pop favorita está concorrendo em várias categorias. Como você se sente?",
        alternativas: [
            {
                texto: "Estou torcendo muito! Sei que ela vai ganhar pelo seu esforço e dedicação.",
                afirmacao: "Você é um fã fiel e sempre acredita no talento da sua cantora favorita."
            },
            {
                texto: "Embora adore a artista, sei que a competição é difícil e pode não ser o momento dela.",
                afirmacao: "Você tem uma visão realista e sabe que, às vezes, outras artistas também merecem reconhecimento."
            }
        ]
    },
    {
        enunciado: "Sua cantora favorita lança uma música que mistura vários estilos musicais. Qual é sua reação?",
        alternativas: [
            {
                texto: "Amo quando artistas experimentam novas sonoridades! Fico muito empolgado para ver o que mais vem por aí.",
                afirmacao: "Você adora ver artistas se reinventando e gosta de músicas inovadoras."
            },
            {
                texto: "Eu prefiro quando ela se mantém fiel ao estilo que sempre me conquistou.",
                afirmacao: "Você tem um apego emocional ao estilo original da cantora e não gosta tanto das mudanças."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
