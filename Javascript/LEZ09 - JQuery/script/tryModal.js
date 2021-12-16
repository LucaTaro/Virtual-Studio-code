
var utente = {
    username: "Admin",
    password: "12345"
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
                        $("#listaContatti").removeClass("d-none");
                        $("#formAddContact").removeClass("d-none");
                        $("#form").addClass("d-none");
                        $("#modalForm").removeClass("d-none");
                        $("#logOut").removeClass("d-none");
                        $("#titolo").removeClass("d-none");

                        
                        data.results.forEach(element => {
                       
                        $("#listaContatti").append('<div class="card text-white bg-secondary mb-3 text-end" data-bs-toggle="modal" data-bs-target="#' + element.name.first + element.name.last +'">' +
                        '<img src="' + element.picture.thumbnail + '" class="card-img-top"  alt="...">' +
                        '<div class="card-body">' +
                          '<p class="card-text m-1 text-nowrap">' + element.name.first + " " + element.name.last + '</p>' +
                          '</div>' +
                          '</div>' +
                          '<div class="modal fade text-dark" id="' + element.name.first + element.name.last +'" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
                            '<div class="modal-dialog modal-dialog-centered">' +
                              '<div class="modal-content">' +
                                '<div class="modal-header">' +
                                  '<h5 class="modal-title" id="exampleModalLabel">' + element.name.first + " " + element.name.last + '</h5>' +
                                  '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>' +
                                  
                                '</div>' +
                                '<div class="modal-body text-start">' +
                                '<h5 class="modal-text" id="exampleModalLabel">' + '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">' +
                                '<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>' +
                              '</svg>' + ' ' + element.email + '</h5><h5class="modal-text" id="exampleModalLabel">' + '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">' + 
                              '<path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>' +
                            '</svg>' + ' ' + element.cell + '</>' +
                            '<div class="modal-footer">' +
                            '<button type="button" class="btn btn-danger w-25" id="elimina'+ element.name.first + element.name.last +'">Elimina</button>' +
              
                             '</div>' +
                      
                                '</div>' +

                              '</div>' +
                            '</div>' +
                              
                          '</div>' 
                  
                  ); 
                 
                
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
                        $("#titolo").removeClass("d-none");
                        $("#listaContatti").removeClass("d-none");
                        $("#formAddContact").removeClass("d-none");
                        $("#modalForm").removeClass("d-none");
                        $("#form").addClass("d-none");
                        $("#logOut").removeClass("d-none");
                    if(Modernizr.sessionstorage){
                        var contattiOBJ = JSON.parse(sessionStorage.getItem("contatti"));
                    }

                   

                    contattiOBJ.forEach(element => {

                        

                        $("#listaContatti").append('<div class="card text-white bg-secondary mb-3 text-end" data-bs-toggle="modal" data-bs-target="#' + element.nome + element.cognome +'">' +
                        '<img src="' + element.picture + '" class="card-img-top" alt="...">' +
                        '<div class="card-body">' +
                          '<p class="card-text m-1 text-nowrap">' + element.nome + " " + element.cognome + '</p>' +
                          '</div>' +
                          '</div>' +
                          '<div class="modal fade text-dark" id="' + element.nome + element.cognome +'" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
                            '<div class="modal-dialog modal-dialog-centered">' +
                              '<div class="modal-content">' +
                                '<div class="modal-header">' +
                                  '<h5 class="modal-title" id="exampleModalLabel">' + element.nome + " " + element.cognome + '</h5>' +
                                  '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>' +
                                  
                                '</div>' +
                                '<div class="modal-body text-start">' +
                                '<h5 class="modal-text" id="exampleModalLabel">' + '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">' +
                                '<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>' +
                              '</svg>' + ' ' + element.email + '</h5><h5class="modal-text" id="exampleModalLabel">' + '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">' + 
                                '<path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>' +
                              '</svg>' + ' ' + element.numero + '</>' +
                                '</div>' +
                                '<div class="modal-footer">' +
                            '<button type="button" class="btn btn-danger w-25" id="elimina' + element.nome + element.cognome + '">Elimina</button>' +
              
                             '</div>' +
                              '</div>' +
                            '</div>' +
                          '</div>' 
                      ); 
                     
                     
                      
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
            
                    $("#listaContatti").append('<div class="card text-white bg-secondary mb-3 text-end" data-bs-toggle="modal" data-bs-target="#' + $("#nome").val() + $("#cognome").val() +'">' +
                    '<img src="img/contatto.png" class="card-img-top" alt="...">' +
                    '<div class="card-body">' +
                      '<p class="card-text m-1 text-nowrap">' + $("#nome").val() + " " + $("#cognome").val() + '</p>' +
                      '</div>' +
                      '</div>' +
                      '<div class="modal fade text-dark" id="' + $("#nome").val() + $("#cognome").val() +'" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
                        '<div class="modal-dialog modal-dialog-centered">' +
                          '<div class="modal-content">' +
                            '<div class="modal-header">' +
                              '<h5 class="modal-title" id="exampleModalLabel">' + $("#nome").val() + " " + $("#cognome").val() + '</h5>' +
                              '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>' +
                              
                            '</div>' +
                            '<div class="modal-body text-start">' +
                            '<h5 class="modal-text" id="exampleModalLabel">' + '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">' +
                            '<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>' +
                          '</svg>' + ' ' + $("#email").val() + '</h5><h5class="modal-text" id="exampleModalLabel">' + '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">' + 
                            '<path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>' +
                          '</svg>' + ' ' + $("#numero").val() + '</>' +
                            '</div>' +
                            '<div class="modal-footer">' +
                            '<button type="button" class="btn btn-danger w-25" id="elimina' + $("#nome").val() + $("#cognome").val() +'">Elimina</button>' +
              
                             '</div>' +
                          '</div>' +
                        '</div>' +
                      '</div>' 
              
              ); 

              

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
    $("#modalForm").addClass("d-none");
    $("#logOut").addClass("d-none");
    $("#listaContatti").addClass("d-none");
    $("#titolo").addClass("d-none");
})
            
           


// '<div class="card" data-bs-toggle="modal" data-bs-target="#exampleModal">' +
//       '<img src="' + element.picture.thumbnail + '" class="card-img-top" alt="...">' +
//       '<div class="card-body">' +
//         '<p class="card-text">' + element.nome + " " + element.cognome + '</p>' +
//       '</div>' +
//     '</div>' +

// '<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
//   '<div class="modal-dialog">' +
//     '<div class="modal-content">' +
//       '<div class="modal-header">' +
//         '<h5 class="modal-title" id="exampleModalLabel">' + element.nome + " " + element.cognome + '</h5>' +
//         '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>' +
//       '</div>' +
//       '<div class="modal-body">' +
//       '<h5 class="modal-text" id="exampleModalLabel">' + element.email + '</h5><h5class="modal-text" id="exampleModalLabel">' + element.numero + '</>' +
//       '</div>' +

//     '</div>' +
//   '</div>' +
// '</div>'




// function rain(){
//     let amount = 200;
//     let body = document.querySelector("body");
//     let i = 0;
//     while(i<amount){
//         let drop = document.createElement("i");
        
//         let size = Math.random()*5;
//         let posX = Math.floor(Math.random()*window.innerWidth);
//         let delay = Math.random() * -20;
//         let duration = Math.random() * 5;

//         drop.style.width= 0.2+size+"px";
//         drop.style.left= posX + "px";
//         drop.style.animationDelay= delay +"s";
//         drop.style.animationDuration= 1+ duration + "s;"

//         body.appendChild(drop);
//         i++
//     }

// }
// rain();

