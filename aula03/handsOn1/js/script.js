/*Utilizando o looping while, crie um programa que leia um numero qualquer fornecido pelo usuario e calcule o fatorial deste numero. Exemplo: 5!=5x4x3x2x1 = 120*/

function fatorial(){
    let num=parseInt(document.getElementById("valor").value);
    let fat=1;
    let i=1;
    while(i<=num){
        fat=fat*i;
        i++;
    }
    document.getElementById("fat").innerHTML=fat.toString();
}
