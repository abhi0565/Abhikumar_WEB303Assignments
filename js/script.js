

 function jesonmethod(){
    $.getJSON("team.json",function(data){
        $(data.members).each(function(index,value){
            $('#team').append('<h2>' + value.name + '</h2>'
                      + '<h5>' + value.position+ '</h5>' + '<p> ' +value.bio + '</p>'    );
        })
    })
}


function ajaxmethod(){ 
    

    $.ajax({
        url:'team.json',
        datatype:'json',
        type:'get',

        beforeSend:function(){
             $('#team').html("loading");
         },
         error: function(data){
            $('#team').html('the content could not be retrieved!!!');
     },
        

    success: function (data){
        setTimeout(function(){
            $('#team').html('');
            $(data.members).each(function(index,value){
                $('#team').append('<h2>' + value.name + '</h2>'
                          + '<h5>' + value.position+ '</h5>' + '<p> ' +value.bio + '</p>');
        }) 
    },3000) 
        
    }

});

}

$( document ).ready(function() {
    ajaxmethod();
    //jesonmethod();
});

