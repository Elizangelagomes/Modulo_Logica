//Leia um login e se este nao for o administrador exiba a 
//mensagem: SEM PORDERES ADMINISTRATIVOS

let usuario=prompt("Usuario:");
if (!(usuario=="administrador")){
    alert ("Sem poderes administrativos!");
}
else{
    alert ("Ola Administrador!");
}