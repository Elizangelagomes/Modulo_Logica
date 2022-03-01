let numero=parseInt(prompt("Digite um numero para ver o fatorial"));
alert (calcularFatorial(numero));


function calcularFatorial(valor){
    let fat=1;
    let i=1;
    while(i<=valor){
        fat=fat*i;
        i++;
    }
    return fat.toString();
}