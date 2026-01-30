let contador = 1
let bola = document.querySelector("#bola1").checked = true

setInterval(function(){
    proxima();
},2000)

function proxima(){
    contador = contador + 1
    if(contador > 2){
        contador = 1
    }
    document.querySelector("#bola" + contador).checked = true
}



let sanduiche = document.querySelector("#sanduiche")
let valor = 0

sanduiche.addEventListener("change",comer)

function comer(){
    let escolha = sanduiche.value
    if(escolha == "Sanduiche 1"){
        valor = 0
        valor = valor + 25
    }
    if(escolha == "Sanduiche 2"){
        valor = 0
        valor = valor + 30
    }
    if(escolha == "Sanduiche 3"){
        valor = 0
        valor = valor + 35
    }
    if(escolha == "Sanduiche 4"){
        valor = 0
        valor = valor + 40
    }
    if(escolha == "Sanduiche 5"){
        valor = 0
        valor = valor + 45
    }
    if(escolha == "Sanduiche 6"){
        valor = 0
        valor = valor + 50
    }
    document.querySelector("#resposta").innerHTML = `O valor do se pedido é ${valor}`
}
