/* VARIÁVEIS DE CONTROLE DO JOGO */
let perguntasFeitas = [];

// PERGUNTAS DO JOGO
const perguntas = [
    //PERGUNTA 0
    {
        pergunta: "Quem matou o gigante Golias?",
        respostas: ["Saul", "Jesus", "Jônatas", "Davi"],
        correta: "resp3"
    },
    //PERGUNTA 1
    {
        pergunta: "Quantos livros tem a Bíblia?",
        resposta: ["54", "66", "78", "1245"],
        correta: "resp1"
    },
    //PERGUNTA 2
    {
        pergunta: "Qual o maior livro da Bíblia?",
        resposta: ["Salmos", "Jó", "Apocalipse", "Gênesis"],
        correta: "resp0"
    },
    //PERGUNTA 3
    {
        pergunta: "Em qual língua foi escrito o Novo Testamento?",
        resposta: ["Latin", "Espanhol", "Japonês", "Grego"],
        correta: "resp3"
    },
];
// console.log(perguntas[1].pergunta); (demo)

var qtdPerguntas = perguntas.lenght - 1;
gerarPergunta(qtdPerguntas);

function gerarPergunta(maxPerguntas) {
    // GERAR NÚMERO ALEATÓRIO
    let aleatorio = (Math.random() * maxPerguntas).toFixed();
    // CONVERTER PARA NÚMERO
    aleatorio = Number(aleatorio);
    // MOSTRAR NO CONSOLE QUAL PERGUNTA SORTEADA
    console.log("A pergunta sorteada foi a: "+ aleatorio); 

    // VERIFICAR SE A PERGUNTA SORTEADA JÁ FOI FEITA
    if (!perguntasFeitas.includes(aleatorio)){
        //COLOCAR COMO PERGUNTA FEITA
        perguntasFeitas.push(aleatorio);
        //PREENCHER O HTML COM OS DADOS DA QUESTÃO SORTEADA
        var p_selecionada = perguntas[aleatorio].pergunta;
        console.log(p_selecionada);

        // ALIMENTAR A PERGUNTA VINDA DO SORTEIO
        $("#pergunta").html(p_selecionada);

        $("#pergunta").attr("data-indice", aleatorio);

        //COLOCAR RESPOSTAS
        for(var i = 0; i<4; i++) {
            $("#resp"+i).html(perguntas[aleatorio].respostas[i]);
        }

        /* outra forma
        var resp0 = perguntas[aleatorio].respostas[0];
        var resp1 = perguntas[aleatorio].respostas[1];
        var resp2 = perguntas[aleatorio].respostas[2];
        var resp3 = perguntas[aleatorio].respostas[3];

        $("#resp0").html(resp0);
        $("#resp1").html(resp1);
        $("#resp2").html(resp2);
        $("#resp3").html(resp3); */

        //EMBARALHAR AS RESPOSTAS
        var pai = $("#respostas");
        var botoes = pai.children();

        for(var i=1; i<botoes.lenght; i++) {
             pai.append(botoes.eq(Math.floor(Math.random()* botoes.length)));
        } 
    } else {
        // SE A PERGUNTA JÁ FOI FEITA
        console.log('A pergunta já foi feita. Sorteando novamente...');
        if(perguntasFeitas.length<qtdPerguntas +1) {
            return gerarPergunta(maxPerguntas);
        }else {
            console.log('acabaram as perguntas!');
        }
    }
}

$('.resposta').click(function() {
    //PERCORRER TODAS AS RESPOSTAS E DESMARCAR A CLASSE SELECIONADA
    $('.resposta').each(function() {
        if ($(this).hasClass('selecionada')) {
            $(this).removeClass('selecionada')
        }
    })
    //ADICIONAR A CLASSE SELECIONADA
    $(this).addClass('selecionada');
});

$("#confirm").click(function(){
    //PEGAR O INDICE DA PERGUNTA
    var indice = $('#pergunta').attr('data-indice');

    //QUAL É A RESPOSTA CERTA
    var respCerta = perguntas[indice].correta;

    //
});