//dichiaro una funzione

function saluta() {
    alert("to mare ca' vacca");
}
//richiamo la funzione
saluta();

var utente = "";

function getNome() {
    utente = prompt("Chiamare tu dimmi")
}
getNome();

function benvenuto() {
    var mess = "Ciao " + utente + ", malvenuto sulla piattaforma";
    var elBenv = document.getElementById("benvenuto");
    elBenv.innerHTML = mess;
}

benvenuto();