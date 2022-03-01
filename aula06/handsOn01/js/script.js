/*Elabore um programa JS que contem uma funcao denominada verificarIdade. Esta funcao recebe por um parametro a idade de uma pessoa e retorna uma string informando se ela e maior de idade ou menor de idade.*/

let idade=parseInt(prompt("Digite sua idade"));
alert (verificarIdade(idade));

function verificarIdade(idade){
    if (idade<18){
    return "Voce e menor e idade"
    }
    else{
    return "Voce e maior de idade"
}
}