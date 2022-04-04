$(document).ready(function(){

$('h1').append(`
    
`)
$('h1').append(`
<input type="text" id="myInput">
<table id="data-table">
        <thead>
            <tr>
                <th>first name</th>
                <th>last name</th>
                <th>movie name</th>
                <th>character name</th>
                <th>genre</th>
            </tr>
        </thead>
      
`);

$.ajax({
    url: 'array.json',
    dataType: 'json',
    success: function(data) {
        for (var i=0; i<data.length; i++) {
            var row = $('<tr><td>' + data[i].firstname+
             '</td><td>' + data[i].lastname +
              '</td><td>' + data[i].moviename +
              '</td><td>' + data[i].charactername +
              '</td><td>' + data[i].genre +
              '</td></tr>');
            $('#data-table').append(row);
        }
    }
});

$("#myInput").on("keyup", function() {
    var value = $(this).val()
    $("table tr").css("background-color", "white");

    $("table tr").each(function(index) {
       

        if (index !== 0) {

            $row = $(this);
            
            var id = $row.find("td:first").text();
            if (id.indexOf(value) !== 0) {
            $row.css("background-color", "white");
            
            }
            else {
           $row.css("background-color", "green");
           
            }
        }
        else{
            $("table tr").css("background-color", "white");
        }
    }); 
});

$("#first").click(function(e) {



     

  });

  
  $("#last").click(function(){
    


  });



  });