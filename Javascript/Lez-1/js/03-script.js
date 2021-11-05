function saluta() {
    //alert("Hello there general!" + nome)
    var elDemo = document.getElementById("demo");
    elDemo.innerHTML = "Hello there general " + nome;
}

var nome = prompt("Che general sei? ")