let carregar = false;
function TurnOn() {
    if(carregar == false) {
        console.log("ligado");
    let element = document.getElementById("lampada");
    element.setAttribute("src",   "https://i.postimg.cc/6QyTynzr/bulb-on.png");
    carregar = true
    let element0 = document.getElementById("butao");
    element0.style("text", "ligar")
    }
    else {
        console.log("desligado");
            let element = document.getElementById("lampada");
            element.setAttribute("src",   "https://i.postimg.cc/KjK1wL3c/bulb-off.png");
            carregar = false;
            element.style("butao", "ligar");

    }
  }

  


  document.getElementById("butao").addEventListener("click", TurnOn);

