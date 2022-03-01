//baseado em um codigo, exiba o produto a ele vinculado
let codigo=parseInt(prompt("Digite o codigo:"));
let produto;
switch(codigo){
    case 1:
    produto="Coca-Cola";
    break;
    case 2:
    produto="Sorvete";
    break;
    case 3:
    produto="chocolate";
    break;
    case 4:
    produto="Biscoito";
    break;
    default:
    produto="Codigo Invalido!!!";
    break;
}
alert (produto);       






