var num=0,  calc=0;
  
const btnCalc = document.getElementById("btnCalc"),
  resultado = document.getElementById("resultado");
  
btnCalc.onclick = () => {
  
  var indexInput = [
  document.getElementById("valor1").value,
  document.getElementById("valor2").value,
  document.getElementById("valor3").value,
  document.getElementById("valor4").value
  ]
    for(var num = 0; num<=indexInput.length; num++){
      if(indexInput[num] == ""){
        switch (num) {
          case 0:
            calc = indexInput[1] * indexInput[2] / indexInput[3];
            resultado.innerHTML = calc;
            break;
          case 1:
            calc = indexInput[0] * indexInput[3] / indexInput[2];
            resultado.innerHTML = calc;
            break;
          case 2:
            calc = indexInput[0] * indexInput[3] / indexInput[1];
            resultado.innerHTML = calc;
            break;
          case 3:
            calc = indexInput[1] * indexInput[2] / indexInput[0];
            resultado.innerHTML = calc;
            break;
        }
      }
    }
  }