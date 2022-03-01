function paraCelsius(f){
    let c=(5/9)*(f-32);//fahrenheit em celsius
    return c;//valor c
  }


  function paraFahrenheit(c){
    let f=(c*9/5)+32;//celsiusem fahrenheit
    return f;//valor f
  }
  
    function principal(){
      let temp=parseFloat(document.getElementById("grausF").value);//html=id grausF
      let escala=document.getElementById("escala").value;//html=id escala
      let tempConvertida=0;

      if(escala=="F"){
          tempConvertida=paraCelsius(temp);
          alert (`Temperatura em graus C=${tempConvertida.toString()}`);

      }
      else{
          tempConvertida=paraFahrenheit(temp);
          alert (`Temperatura em graus F=${tempConvertida.toString()}`);
      }  
  }


