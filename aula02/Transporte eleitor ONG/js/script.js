var idade = parseFloat(prompt("Digite sua idade:"));
if (idade < 16) {
    document.getElementById("situacao").innerHTML = "Voce nao pode votar e nem embarcar!";
}
else if (idade < 18) {
    document.getElementById("situacao").innerHTML = "Seu voto e facultativo"
}
else {
    document.getElementById("situacao").innerHTML = "Voto obrigatorio, pode embarcar!";
}