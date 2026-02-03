let expandir = document.querySelector(".expandir")
let recolher = document.querySelector(".recolher")
console.log(expandir)

expandir.addEventListener("click",ex)

function ex(){
    expandir.classList.add("esconde")
    recolher.classList.remove("esconde")
    let g2 = document.querySelector(".alternativaP1")
    g2.classList.remove("esconde")
}

recolher.addEventListener("click",rec)

function rec(){
    recolher.classList.add("esconde")
    expandir.classList.remove("esconde")

    let g2 = document.querySelector(".alternativaP1")
    g2.classList.add("esconde")
}

let e1 = document.querySelector(".e1")

e1.addEventListener("click",ee1)

function ee1(){
    resposta1 = document.querySelector(".resposta1")
    resposta1.classList.remove("esconde")
    e1.classList.add("esconde")
    r1.classList.remove("esconde")
}

let r1 = document.querySelector(".r1")
r1.addEventListener("click",rr1)

function rr1(){
    resposta1 = document.querySelector(".resposta1")
    resposta1.classList.add("esconde")
    r1.classList.add("esconde")
    e1.classList.remove("esconde")
}



let e2 = document.querySelector(".e2")

e2.addEventListener("click",ee2)

function ee2(){
    resposta2 = document.querySelector(".resposta2")
    resposta2.classList.remove("esconde")
    e2.classList.add("esconde")
    r2.classList.remove("esconde")
}

let r2 = document.querySelector(".r2")
r2.addEventListener("click",rr2)

function rr2(){
    resposta2 = document.querySelector(".resposta2")
    resposta2.classList.add("esconde")
    r2.classList.add("esconde")
    e2.classList.remove("esconde")
}


let e3 = document.querySelector(".e3")

e3.addEventListener("click",ee3)

function ee3(){
    resposta3 = document.querySelector(".resposta3")
    resposta3.classList.remove("esconde")
    e3.classList.add("esconde")
    r3.classList.remove("esconde")
}

let r3 = document.querySelector(".r3")
r3.addEventListener("click",rr3)

function rr3(){
    resposta3 = document.querySelector(".resposta3")
    resposta3.classList.add("esconde")
    r3.classList.add("esconde")
    e3.classList.remove("esconde")
}