let doacao=parseFloat(prompt("Digite o valor da doacao em dolares:"));
let valorDolar=parseFloat(prompt("Digite a cotacao do Dolar:"));
let valoremReais=doacao*valorDolar;
alert (`Valor convertido: R$ ${valoremReais}`)