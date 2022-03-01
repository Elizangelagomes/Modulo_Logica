/* Na compra de duas unidades de um mesmo medicamento, o cliente recebe como o desconto os centavos do valor final. Elaborar um programa que leia descricao e preco de um medicamento. Informe o valor do produto na promcao.
EXEMPLO: 
Medicamento: Aspirina
preco: R$: 7.30
Promocao da Aspirina Leve 2 por apenas R$: 14.00*/ 


function calcuklar(){
    let preco=parseFloat(document.getElementById("preco").value);
    let qtde=parseInt(document.getElementById("qtde").value);
    let res=0;
    if(qtde >1){
        res=Math.floor(qtde*preco);
    }
    else{
        res=preco;
    }
    document.getElementById("resposta").innerHTML=res.toString();
}
