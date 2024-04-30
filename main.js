const botoes = document.querySelectorAll(".botao");

const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");

        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");

    }

}
const contadores = document.querySelectorAll(".contador");
const tempoAtual = new Date();// retorna a data atual do computador
const tempoObjetivo1 = new Date("2024-05-01t06:00:00");
const tempoObjetivo2 = new Date("2024-06-02t07:00:00");
const tempoObjetivo3 = new Date("2024-07-03t08:00:00");
const tempoObjetivo4 = new Date("2024-08-04t09:00:00");
const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4]

function calculatempo(tempoObjetivo) {
    let tempoFinal = tempoObjetivo - tempoAtual;

    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    return dias + " Dias " + horas + " Horas " + minutos + " Minutos " + segundos + " Segundos";

}

for (let i = 0; i < contadores.length; i++) {

    contadores[i].textContent = calculatempo(tempos[i]);
} 
