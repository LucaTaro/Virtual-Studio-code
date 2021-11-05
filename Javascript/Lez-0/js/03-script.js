var nomeUtente = prompt("Inserisci il nome");

var nomeCognome = prompt("Inserisci il cognome");

var annoNascita = prompt("Inserisci l'anno di nascita");

var eta = 2021 - annoNascita;

document.write ("<h1>Hello, " + nomeUtente + " " + nomeCognome + "</h1>");
document.write ("<p>Hai " + eta + " compiuti</p>");