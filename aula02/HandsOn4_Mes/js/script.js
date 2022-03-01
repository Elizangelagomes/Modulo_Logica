/*Elabore um programa que leia um numero referente a um mes do ano e exiba o nome do mes.Se for digitado um valor que nao corresponda a um mes valido, exiba uma mensagem indicando tal situacao. Estrutura switch case.*/
let mes = parseInt(prompt("Digite o numero do mes:"));
let sMes;//variavel string para o mes 
switch (codigo) {
    case 1:
        sMes = "January";
        break;
    case 2:
        sMes = "February";
        break;
    case 3:
        sMes = "March";
        break;
    case 4:
        sMes = "April";
        break;
    case 5:
        sMes = "May";
        break;
    case 6:
        sMes = "June";
        break;
    case 7:
        sMes = "July";
        break;
    case 8:
        sMes = "August";
        break;
    case 9:
        sMes = "September";
        break;
    case 10:
        sMes = "October";
        break;
    case 11:
        sMes = "November";
        break;
    case 12:
        sMes = "December";
        break;
    default:
        sMes = "Codigo Invalido"
}
document.getElementById("saida").innerHTML=sMes;













