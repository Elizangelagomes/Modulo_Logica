//pessoas ate 11 nao podem jogar
//pessoas com 12 anos, somente com a permissao dos pais
//acima de 12 anos, pode jogar
let idade=parseInt(prompt("Digite sua idade"));
if(idade<12){
    alert ("Sua idade nao permite que voce joque!");
}
else if (idade==12){
    alert ("Voce pode jogar com a permissao dos pais!")
}
else{
    alert ("voce pode jogar!")
}