/*Faca um site HTML com codigo  JS, que pede o raio de um circulo para o internauta.
Em seguida exiba a area do circulo e o comprimento da circunferencia com aquele raio.

Para resolver esse exercicio, vamos precisar de duas formulas bem conhecidas da Matematica:
Area do circulo: pi * raio2 (raio elevado a 2)
comprimento da circunferencia: 2 * pi * raio                 
*/ 

function calcular(){
    let raio=parseFloat(document.getElementById("raio").value);
    let area=(Math.PI*Math.pow(raio,2)).toFixed(2);
    let comprimento=(2*Math.PI*raio).toFixed(2);
    document.getElementById("resultado").innerHTML=`Area: ${area.toString()}<br>Comprimento: ${comprimento.toString()}`;
}