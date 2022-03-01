/*Utilizando o looping do while, elabore um programa que leia dois numeros quaisquer e exiba a quantidade de numeros pares entre os dois valores digitados. Lembre-se que o primeiro numero deve ser sempre menor que o segundo.*/
function calcular(){
    let n1=parseInt(document.getElementById("n1").value);
    let n2=parseInt(document.getElementById("n2").value);
    let qtdePares=0;
    let i=n1+1;

    if(n1<n2){
        
       do{
            if(i%2==0){
                qtdePares++;
            }
            
        }while(i<n2);

        document.getElementById("result").innerHTML=qtdePares.toString();

    }
    else{
        
        document.getElementById("result").innerHTML="O primeiro numero deve ser menor que o segundo!!!";

    }
}
