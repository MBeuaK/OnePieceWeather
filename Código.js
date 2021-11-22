var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
let msg = document.getElementById('relogio')
function carregar(){
    msg.innerHTML = `${hora}:${minutos} `
    if(hora>=6 && hora<12){
        backgroundProperties('Imagens/ImagemDaManhã.png')
    } else if(hora>=12 && hora<=18){
        backgroundProperties('Imagens/ImagemDaTarde.png')
    } else if(hora>18 && hora<6){
        backgroundProperties('Imagens/ImagemDaNoite.png')
    } else{
        backgroundProperties('Imagens/ImagemDeFundo.png')
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

fetch("https://api.hgbrasil.com/weather")
.then(function (response){
    return response.json();
})

console.log(response.json)