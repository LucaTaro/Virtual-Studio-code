
var utente = {
    username: "Admin",
    password: "d10porcodi0"
}

var contatti = [];

$().ready(function(){
    $('#form').validate({
    //definisco le regole per i singoli campi    
    rules: {
        //nome del campo da validare
        username:{
            required: true
        },
       
        password:{
            required: true,
            minlength: 5   
        }

        },

        messages:{
            username: "Compila il campo username",
            password: {
                required: "Il campo e' vuoto",
                minlength: "Password troppo corta"
            }
        },

        submitHandler: function() {

            if($("#username").val() == utente.username && $("#password").val() == utente.password){
              if(!sessionStorage["contatti"]){
                $.ajax({
                    
                    url: "https://randomuser.me/api/?results=10",
                    type: "GET",
                    dataType: "json",
                    success: function(data){
                        $("#listaContatti").html("");
                        $("#formAddContact").removeClass("d-none");
                        $("#form").addClass("d-none");
                        
                        data.results.forEach(element => {
                       
                        $("#listaContatti").append('<div class="card">' + 
                                '<img src="' + element.picture.thumbnail + '" class="card-img-top" alt="...">' +
                                '<div class="card-body">' +
                                  '<h5 class="card-text">' + element.name.first + " " + element.name.last + '</h5>' +
                                  '<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop' + element.name.first + element.name.last +'">' +
                                         'Mostra' +
                                    '</button>' +
                                        '<div class="modal fade" id="staticBackdrop' + element.name.first + element.name.last +'" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">' +
                                        '<div class="modal-dialog">' +
                                            '<div class="modal-content">' +
                                            '<div class="modal-header">' +
                                                '<h5 class="modal-title" id="exampleModalLabel">' + element.name.first + " " + element.name.last + '</h5>' +
                                                '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>' +
                                            '</div>' +
                                            '<div class="modal-body">' +
                                            
                                            '<h5 class="modal-text" id="exampleModalLabel">' + element.email + '</h5><h5class="modal-text" id="exampleModalLabel">' + element.cell + '</>' +
                                            '</div>' +
                                            '<div class="modal-footer">' +
                                                '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>' +
                                                '<button type="button" class="btn btn-primary">Understood</button>' +
                                            '</div>' +
                                            '</div>' +
                                        '</div>' +
                                        '</div>' + 
                                '</div>' +
                                '</div>'); 
        
                                contatti.push({
                                    picture: element.picture.thumbnail,
                                    nome : element.name.first,
                                    cognome: element.name.last,
                                    email : element.email,
                                    numero : element.cell,
                                });
            
                        });
                        if(Modernizr.sessionstorage){
                            sessionStorage.setItem("contatti", JSON.stringify(contatti));
                        }
                        
                      
                    }
                })
                }
                else {
                   
                        $("#formAddContact").removeClass("d-none");
                        $("#form").addClass("d-none");
                    if(Modernizr.sessionstorage){
                        var contattiOBJ = JSON.parse(sessionStorage.getItem("contatti"));
                    }

                    contattiOBJ.forEach(element => {

                        $("#listaContatti").append('<div class="card">' + 
                                '<img src="' + element.picture + '" class="card-img-top" alt="...">' +
                                '<div class="card-body">' +
                                  '<h5 class="card-text">' + element.nome + " " + element.cognome + '</h5>' +
                                  '<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop' + element.nome + element.cognome +'">' +
                                         'Mostra' +
                                    '</button>' +
                                        '<div class="modal fade" id="staticBackdrop' + element.nome + element.cognome +'" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">' +
                                        '<div class="modal-dialog">' +
                                            '<div class="modal-content">' +
                                            '<div class="modal-header">' +
                                                '<h5 class="modal-title" id="exampleModalLabel">' + element.nome + " " + element.cognome + '</h5>' +
                                                '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>' +
                                            '</div>' +
                                            '<div class="modal-body">' +
                                            
                                            '<h5 class="modal-text" id="exampleModalLabel">' + element.email + '</h5><h5class="modal-text" id="exampleModalLabel">' + element.numero + '</>' +
                                            '</div>' +
                                            '<div class="modal-footer">' +
                                                '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>' +
                                                '<button type="button" class="btn btn-primary">Understood</button>' +
                                            '</div>' +
                                            '</div>' +
                                        '</div>' +
                                        '</div>' + 
                                '</div>' +
                                '</div>'); 

                    })


                }
            }

        }
    })
})

$().ready(function(){
    $('#formAddContact').validate({
    //definisco le regole per i singoli campi    
    rules: {
        //nome del campo da validare
        nome:{
            required: true
        },
       
        cognome:{
            required: true,
            
        },

        email:{
            required: true,
            email:true
        },
        
        numero:{
            required: true,
            maxlength: 15,
            number: true
        }

        },

        messages:{
            nome: "Inserisci il nome",
            cognome: "Inserisci il cognome",
            email:{
                required: "inserisci la email",
                email: "formato non esistente"
                },
            numero:{
                required: "inserisci il numero",
                numero: "Inserisci un formato corretto",
                maxlength:"Il numero è troppo lungo"
            }
        },

        submitHandler: function() {
            
                    $("#listaContatti").append('<div class="card" style="width: 18rem;">' + 
                            '<img src="img/contatto.png" class="card-img-top" alt="...">' +
                            '<div class="card-body">' +
                              '<h5 class="card-text">' + $("#nome").val() + " " + $("#cognome").val() + '</h5>' +
                              '<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop' + $("#nome").val() + $("#cognome").val() +'">' +
                                     'Mostra' +
                                '</button>' +
                                    '<div class="modal fade" id="staticBackdrop' + $("#nome").val() + $("#cognome").val() +'" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">' +
                                    '<div class="modal-dialog">' +
                                        '<div class="modal-content">' +
                                        '<div class="modal-header">' +
                                            '<h5 class="modal-title" id="exampleModalLabel">' + $("#nome").val() + " " + $("#cognome").val() + '</h5>' +
                                            '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>' +
                                        '</div>' +
                                        '<div class="modal-body">' +
                                        
                                        '<h5 class="modal-text" id="exampleModalLabel">' + $("#email").val() + '</h5><h5class="modal-text" id="exampleModalLabel">' + $("#numero").val() + '</>' +
                                        '</div>' +
                                        '<div class="modal-footer">' +
                                            '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>' +
                                            '<button type="button" class="btn btn-primary">Understood</button>' +
                                        '</div>' +
                                        '</div>' +
                                    '</div>' +
                                    '</div>' + 
                            '</div>' +
                            '</div>)'); 

                            contatti.push({
                                picture: "img/contatto.png",
                                nome : $("#nome").val(),
                                cognome: $("#cognome").val(),
                                email : $("#email").val(),
                                numero : $("#numero").val()
                            })

                            console.log(contatti);
                            if(Modernizr.sessionstorage){
                                sessionStorage.setItem("contatti", JSON.stringify(contatti)); //condaddy
                            }


                            $("#nome").val("");
                            $("#cognome").val("");
                            $("#numero").val("");
                            $("#email").val("");
        }
    })
})


$("#logOut").on("click",function(){
    $("#form").removeClass("d-none");
    $("#formAddContact").addClass("d-none");
    $("#listaContatti").html("");
})
            
           