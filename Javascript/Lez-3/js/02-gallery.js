var elFoto = document.getElementById("foto");
var locandine = [
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg",
    "img/6.jpg",
];

var contatore = 0;

var primaImg = "<img id='miaImg' src='" + locandine[0] + "' />";

elFoto.innerHTML = primaImg;

function ruotoFoto() {
    if(contatore < locandine.length-1) {
        ++contatore;
    } else {
        contatore = 0;
    }
    document.getElementById("miaImg").src = locandine[contatore];
}