function chegarTamanhoTexto(texto){
    if (texto.length > 10){
      console.log("Texto muito longo");
    } else {
      console.log("Texto dentro do limite");
    }
    console.log(texto.length);
}

chegarTamanhoTexto("teste");
chegarTamanhoTexto("Vamos testar se funciona");
chegarTamanhoTexto("10-");