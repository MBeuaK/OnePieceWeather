var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
let msg = document.getElementById('relogio')
function carregar(){
    msg.innerHTML = `${hora}:${minutos} `
    if(hora>=6 && hora<12){
        document.body.style.background ="url('ImagemDaManhã2.png')"
        document.body.style.backgroundRepeat ="no-repeat" 
        document.body.style.backgroundSize="initial"


    } else if(hora>=12 && hora<=18){
        document.body.style.background ="url('ImagemDaTarde.png')"
        document.body.style.backgroundRepeat ="no-repeat" 
        document.body.style.objectFit="contain"

    } else if(hora>18 && hora<6){
        document.body.style.background ="url('ImagemDaNoite.png')"
        document.body.style.backgroundSize="cover"
    } else{
        document.body.style.background ="url('ImagemDeFundo.png')"
        document.body.style.backgroundSize="cover"
    }
}

function infoAutor(){
    open('https://www.linkedin.com/in/mbeuak/')
}

function repositorioGit(){
    window.open('https://github.com/MBeuaK/OnePieceWeather')
}

function DescobrirLocalizacao(){
    alert("Funcionou")
}