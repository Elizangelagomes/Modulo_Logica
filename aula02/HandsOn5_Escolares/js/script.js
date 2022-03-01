// Duas notas e a media delas. 
//Qtdd de aulas dadas e qtdd de aulas assistias pelo aluno. Calcule a frequencia: (aulasAssistidas/aulasDadas)*100.
//Aprovado com media maior ou igual 7 e frequencia minima de 75%.
//Exiba a media, a frequencia e a mensagem informando sua situacao.
let n1 = parseFloat(prompt("Digite a primeira nota:"));
let n2 = parseFloat(prompt("Digite a segunda nota:"));
let media=(n1+n2)/2;
let aulasDadas = parseInt(prompt("Quantas aulas foram dadas?"));
let aulasAssistidas = parseInt(prompt("Quantas aulas o aluno assistiu?"));
let freq=(aulasAssistidas/aulasDadas)*100;
if(media>=7 && freq>=75){
    document.getElementById("situacao").innerHTML=`Aprovado com media ${media} e frequencia de ${freq}%`
}
else{
    document.getElementById("situacao").innerHTML=`Retido com media ${media} e frequencia de ${freq}%`
}





