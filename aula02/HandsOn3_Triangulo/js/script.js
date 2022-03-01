/*Dado tres valores X,Y e Z, verificar se eles podem ser os comprimentos dos lados de um triangulo, e se forem, verificar se e um triagulo equilatero, isosceles ou escaleno. Se nao forem um triangulo, escrever uma mensgem.*/
let  l1 = parseInt(prompt("Digite o lado 1: "));//esquerdo
let  l2 = parseInt(prompt("Digite o lado 2: "));//direito
let  l3 = parseInt(prompt("Digite o lado 3: "));//baixo


if( l1<l2+l3 && l2<l1+l3 && l3<l1+l2){
    if(l1==l2 && l2==l3){
        document.getElementById("saida").innerHTML="Triangulo Equlatero."
    }
    else if(l1!=l2 && l1!==l3 && l2!=l3){
        document.getElementById("saida").innerHTML="Triangulo Escaleno"
    }
    else{
        document.getElementById("saida").innerHTML="Triangulo Isosceles"
    }
}


    
    