var inputValor = document.querySelector('#valor-hora')

var inputHoras = document.querySelector('#horas-projeto')

var resultado = document.querySelector('#resposta')

function calcular() {

    var valor = inputValor.valueAsNumber

    var horas = inputHoras.valueAsNumber

    var pagamento = valor * horas

    resposta.textContent = "R$" + pagamento
}