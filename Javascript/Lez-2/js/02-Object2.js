var demo = document.getElementById("demo");

//funzione costruzione
function Studente(nome, cognome, matricola, promosso, annoNascita) {
    this.nome = nome;
    this.cognome = cognome;
    this.matricola = matricola;
    this.promosso = promosso;
    this.annoNascita = annoNascita;

    this.info = function() {
        for(const chiave in this) {
            if(typeof this[chiave] != "function") {
                demo.innerHTML += chiave + ": " + this[chiave] + "<br>";
            }
        }
    }
}

var classe = [ 
    new Studente("Bobi", "Firminei", "01", false, 1997),
    new Studente("Luca", "Zavattaro", "02", true, 1993),
    new Studente("Sara", "Padona", "03", false, 1992),
]

for (var i = 0; i < classe.length; i++) {
    classe[i].info();
}