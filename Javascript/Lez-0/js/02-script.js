var imponibile = Number( prompt("Inserisci la cifra di cui vuoi calcolare l'iva"));

const IVA = 0.22;

var prezzoIvato = (imponibile * IVA) + imponibile;

var costoIVA = prezzoIvato - imponibile;

console.log("Prezzo ivato: " + prezzoIvato);

console.log("Costo iva: " + costoIVA);

var nomeUtente = prompt("Inserisci il tuo nome");

document.write("<p>Hello there " + nomeUtente + " questo di seguito è il resconto dei tuo acquisti </p>");

document.write("<p>Prezzo finale: " + prezzoIvato + " €</p>");

document.write("<p>Iva: " + costoIVA + " € </p>");