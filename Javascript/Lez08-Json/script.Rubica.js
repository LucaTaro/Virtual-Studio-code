$("#btn").click(function() {
    $.ajax({
        url: "https://randomuser.me/api/?results=10",
        type: "get",
        dataType: "json",
        success: function(data) {
            console.log(data);
            var nome = data.result[0].name.first;
            var cognome = data.result[0].name.last;
            $("#demo").html("<li>" + nome + " " + cognome + "</li>" + '<img src="' + data.result[0].picture.thumbnail + '">');
        }
    })
})