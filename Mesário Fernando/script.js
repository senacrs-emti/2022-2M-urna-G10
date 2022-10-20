
var teclado = document.getElementById("teclado")
var tela = document.getElementById("tela")

FormarTeclado()

function FormarTeclado(){

    for(let i = 1; i <= 12; i++){
        if(i == 10){
            let botaoCorrige = document.createElement("button")
            botaoCorrige.classList.add("botao", "corrige")
            teclado.appendChild(botaoCorrige)
            let text = document.createTextNode("Corrige")
            botaoCorrige.appendChild(text)
            botaoCorrige.setAttribute("type", "button")
            botaoCorrige.onclick = function(){
                tela.innerHTML=""
            }
        }else if(i == 12){
            let botaoConfirma = document.createElement("button")
            botaoConfirma.classList.add("botao", "confirma")
            teclado.appendChild(botaoConfirma)
            let text = document.createTextNode("Confirma")
            botaoConfirma.appendChild(text)
            botaoConfirma.setAttribute("type", "button")
            botaoConfirma.onclick = function(){
                
            }
        }else{
            let botao = document.createElement("button")
            botao.classList.add("botao")
            teclado.appendChild(botao)
            if(i != 11){
                var text = document.createTextNode(i)
            }else{  
                var text = document.createTextNode("0")
            }
            botao.appendChild(text) 
            botao.setAttribute("type", "button")
            botao.onclick = function(){
                tela.innerHTML += botao.innerHTML
            }
        }   
        }
}





    

