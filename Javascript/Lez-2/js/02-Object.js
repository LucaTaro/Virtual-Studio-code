//notezione letterale
var Studente = {
    nome: "Luca",
    cognome: "Taro",
    matricola: 01,
    promosso: false,

    superaEsame: function() {
        //alert("ah ah sfigato");
        return "ah ah sfigato";
    }
};

console.log("Los studentes el chiama: " + Studente.nome + " " + Studente.cognome);
console.log("Matricolas " + Studente.matricola);
console.log("Tests esame locho " + Studente.promosso);
console.log(Studente.superaEsame());

var demo = document.getElementById("demo");

function stampaInfo (persona) {

   /* demo.innerHTML += persona.nome + "<br>";
    demo.innerHTML += persona.cognome + "<br>";
    demo.innerHTML += persona.matricola + "<br>";
    demo.innerHTML += persona.promosso + "<br>";*/
    for(const chiave in persona) {
        if(typeof persona[chiave] != "function") {
            demo.innerHTML += chiave + ": " + persona[chiave] + "<br>";
        }
    }
}

stampaInfo(Studente);