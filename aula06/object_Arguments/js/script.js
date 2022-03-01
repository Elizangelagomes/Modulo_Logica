function frutas(){
    let texto="";
    for(let i=0;i<arguments.length;i++){
        texto+=(arguments[i] + "\n");// (\n qu0ebra linha padrao Java, C#
    }
    alert(texto);
}

frutas("Laranja","Maca","kiwi","Mamao","Pera");