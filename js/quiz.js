alert("Olá! Seja bem vindo ao Quiz sobre bikes!")

//criando as perguntas
const perguntas =[


    {
        pergunta:"Em que país a bicicleta foi inventada? \n a) Holanda \n b) Alemanha \n c) Irlanda \n d) Guaianases ",
        resposta:"B"
    },

    {
        pergunta:"O que é Ciclofaixa? \n a) Parte da pista de rolamento destinada a circulação exclusiva de ciclos, determinada por sinalização específica. \n b) Faixa exclusiva para caminhões Scania \n c) Faixa onde só é permitido a ultrapassagem de veículos acima dos 247km/h ",
        resposta:"A"
    },

    {
        pergunta:"Oque é mais importante em uma bike?  \n a) Quadro \n b) Buzina \n c) Farol ",
        resposta:"A"
    },

    {
        pergunta:"Oque fazer se sua bike for furtada?  \n a) Correr atrás do bandido. \n b) Registrar o furto através de um boletim de ocorrência, na delegacia mais próxima.  \n c) Nada. \n d) Ligar pro Batman. ",
        resposta:"B"
    },

    {
        pergunta:"Em que ano foi criada a bicicleta?   \n a) 1817 \n b) 1755 \n c) 2025 \n d) 1755 (antes de cristo).",
        resposta:"A"
    },

    {
        pergunta:"Qual é considerado o melhor ciclista de todos os tempos?   \n a) Cristiano Ronaldo. \n b) LeBron James. \n c) Alan Turing. \n d) Eddie Mércx. \n e) Kanye West",
        resposta:"D"
    },

]

//declarando a variavel acerto
let acertos =0;

//percorrendo as perguntas
for (let i =0; i <perguntas.length; i++){
    const respostaUsuario =prompt(perguntas[i].pergunta)
    
if(respostaUsuario.toLowerCase()===perguntas[i].resposta.toLowerCase()){
    acertos++;
}




}
//mostrando o resultado na pagina quiz
document.getElementById("msg").innerHTML = (`Você divou e acertou ${acertos} de ${perguntas.length} perguntas. Parabéns!! *clap* *clap*`)
