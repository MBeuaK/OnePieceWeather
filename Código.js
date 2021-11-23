let msg = document.getElementById('relogio')
let hora;
let temp;
function carregar(){
    backgroundProperties('Imagens/ImagemDeFundo.png')
    let strings = hora.split(":");
    let horaCerta = strings[0];
    if(horaCerta >= 6 && horaCerta < 12){
        backgroundProperties('Imagens/ImagemDaManhã.png')
    } else if(hora>=12 && hora<=18){
        backgroundProperties('Imagens/ImagemDaTarde.png')
    } else if(hora>18 && hora<6){
        backgroundProperties('Imagens/ImagemDaNoite.png')
    } 
    
}
function backgroundProperties(image){
    document.body.style.background =`url('${image}')`
    document.body.style.backgroundRepeat ="no-repeat" 
    document.body.style.backgroundSize="cover"
}
function infoAutor(){
    open('https://www.linkedin.com/in/mbeuak/')
}
function repositorioGit(){
    open('https://github.com/MBeuaK/OnePieceWeather')
}
function DescobrirLocalizacao(){
    let url;
    navigator.geolocation.getCurrentPosition((pos) => {
      let lat = pos.coords.latitude;
      let long = pos.coords.longitude;
      url = `https://api.hgbrasil.com/weather?format=json-cors&key=2c973d52&lat=-23.682&lon=-46.875&user_ip=remote`;
      fetchApi(url);
    });

    function fetchApi(url) {
        fetch(url)
        .then((data) => {
          return data.json();
        })
        .then((data) => {
            temp = data.results.temp
            hora = data.results.time;
            msg.innerText = `${hora} ${temp} Cº`
            carregar();
        })

  }

}