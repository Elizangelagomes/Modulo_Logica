/*Utilizando o looping for, elabore um programa que leia dois numeros quaisquer e exiba o somatorio de todos os numeros que estao entre os dois digitados. Lembre se que o primeiro numero deve ser sempre menor que o segundo.*/
function calcular(){
    let n1=parseInt(document.getElementById("n1").value);
    let n2=parseInt(document.getElementById("n2").value);
    let res=0;
    if(n1<n2){
        
        for(let i=n1+1;i<n2;i++){
            res=res+i;
            
        }

        document.getElementById("result").innerHTML=res.toString();

    }
    else{
        
        document.getElementById("result").innerHTML="O primeiro numero deve ser menor que o segundo!!!";

    }
}
