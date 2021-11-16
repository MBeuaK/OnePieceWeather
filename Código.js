var data = new Date()
var hota = data.getHours
var minutos = data.getMinutes
var msg = document.getElementById('msg')

function carregar(){
    var imagem= document.getElementById('fundo')
    msg = `${hora}+ ":" + ${minutos} `
    if(Hora>=6 && hora<12){
        imagem.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI_aBzsDt5jVaZrHdHrddU0zc9SqzDOMhh_Z233g8Xk1rWIPh0CUIBMHwPME1c1S4dtGM&usqp=CAU'
        
    } else if(hora>=12 && hora<=18){
        imagem.src='https://hanashir.files.wordpress.com/2013/06/923177_10152796901035554_1951289825_n.png'

    } else{
        imagem.src='https://images3.alphacoders.com/905/thumb-350-905410.jpg'
    }
}

function abrirInfo(){
    window.open('https://github.com/MBeuaK/OnePieceWeather')
}