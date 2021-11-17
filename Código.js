var data = new Date()
var hota = data.getHours()
var minutos = data.getMinutes()
let msg = document.getElementById('msg')

function carregar(){
    console.log(hora)
    var imagem= document.getElementById('Fundo')
    msg = `${hora}+ ":" + ${minutos} `
    if(Hora>=6 && hora<12){
        imagem.src='ImagemDaManhã.png'
        
    } else if(hora>=12 && hora<=18){
        imagem.src='ImagemDaTarde.png'

    } else{
        imagem.src='ImagemDaNoite.jpg'
    }
}

function abrirInfo(){
    window.open('https://github.com/MBeuaK/OnePieceWeather')
}

function DescobrirLocalizacao(){
    alert("Funcionou")
}