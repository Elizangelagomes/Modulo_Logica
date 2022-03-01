var doacao = parseFloat(prompt("Digite o valor da doacao"));
var investimento;

if (doacao > 1000) {
    investimento=doacao*0.15;
}
else{
    investimento=doacao*0.05;
}
document.getElementById("investimento").innerHTML = investimento.toString();