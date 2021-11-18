var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
let msg = document.getElementById('relogio')
function carregar(){
    msg.innerHTML = `${hora}:${minutos} `
    if(hora>=6 && hora<12){
        backgroundProperties('ImagemDaManhã2.png')
    } else if(hora>=12 && hora<=18){
        backgroundProperties('ImagemDaTarde.png')

    } else if(hora>18 && hora<6){
        backgroundProperties('ImagemDaNoite.png')
    } else{
        backgroundProperties('ImagemDeFundo.png')
    }
}

function backgroundProperties(url){
    document.body.style.background =`url('${url}')`
    document.body.style.backgroundRepeat ="no-repeat" 
    document.body.style.backgroundSize="cover"

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