

let  l1 = parseInt(prompt("Digite o lado 1: "));//esquerdo
let  l2 = parseInt(prompt("Digite o lado 2: "));//direito
let  l3 = parseInt(prompt("Digite o lado 3: "));//baixo
alert (verificarTriangulo(l1,l2,l3));

function verificarTriangulo(l1,l2,l3){


if( l1<l2+l3 && l2<l1+l3 && l3<l1+l2){
    if(l1==l2 && l2==l3){
        return "Triangulo Equilatero.";
    }
    else if(l1!=l2 && l1!==l3 && l2!=l3){
        return "Triangulo Escaleno.";
    }
    else{
        return "Triangulo Isosceles.";
    }
}
else{
    return "Os valores informados nao formam um triangulo.";
}
}
