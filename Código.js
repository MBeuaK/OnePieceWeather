var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
let msg = document.getElementById('msg')

function carregar(){
    console.log(msg)
    msg.value = `${hora}:${minutos} `
    if(hora>=6 && hora<12){
        document.body.style.background ="url('ImagemDaManhã.png')"
        
    } else if(hora>=12 && hora<=18){
        document.body.style.background ="url('ImagemDaTarde.png')"

    } else if(hora>18 && hora<6){
        document.body.style.background ="url('ImagemDaNoite.jpg')"
    } else{
        document.body.style.background ="url('ImagemDeFundo.png')"
    }
}

function abrirInfo(){
    window.open('https://github.com/MBeuaK/OnePieceWeather')
}

function DescobrirLocalizacao(){
    alert("Funcionou")
}