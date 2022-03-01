let n1 = parseFloat(prompt("Digite a primeira nota:"));
let n2 = parseFloat(prompt("Digite a segunda nota:"));
let n3 = parseFloat(prompt("Digite a terceira nota:"));
var media= ((n1+n2+n3)/3);
if (media >=7){
    alert(`Sua media foi de ${media.toFixed(2)} APROVADO!`);
    document.getElementById("media").innerHTML= `Sua nmedia foi ${media.toFixed(2)}, APROVADO!`;
}
else if (media >=4){
    alert(`Sua media foi de ${media.toFixed(2)} Voce esta de prova FINAL!`);
    document.getElementById("media").innerHTML= `Sua nmedia foi ${media.toFixed(2)}, APROVADO!`;
}
else {
        alert(`Sua media foi de ${media.toFixed(2)} REPROVADO!`);
        document.getElementById("media").innerHTML= `Sua media foi ${media.toFixed(2)}, REPROVADO!`;
}

