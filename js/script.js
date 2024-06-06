let nome =document.getElementById("nome")
let resposta = document.getElementById("resposta")

function enviar() 
{
    resposta.innerHTML = nome.value 
}

let conta1 = document.getElementById("conta1")
let conta2 = document.getElementById("conta2")
let conta3 = document.getElementById("conta3")
let erick = document.getElementById("razao")

function resultado()
{
    erick.innerHTML = parseInt(conta1.value) + parseInt(conta2.value) + parseInt(conta3.value) 
    
}


let metros = document.getElementById("metros")
let rep = document.getElementById("rep")

function converter()
{
    rep.innerHTML = parseInt(metros.value) *100

}

