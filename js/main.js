// WEB303 Assignment 2

var xhr = new XMLHttpRequest;






$('#prospect').on('click', function(){ 

    let el = document.getElementById("content");

if(el.innerHTML){
    $('#content').hide().empty();
}
    xhr.open('GET','prospect.html',true)
  xhr.onload = function(){
    if(xhr.status === 200)
    {
        el.innerHTML = xhr.responseText;
        $('#content').hide().slideToggle();
    }
    else{
        console.log("something gone wrong");    
    }
};
xhr.send("search=ardunio");

});


$('#convert').on('click', function(){
    
    let el = document.getElementById("content");

  if(el.innerHTML){
    $('#content').hide().empty();
  } 
    
    xhr.open('GET','convert.html',true)
xhr.onload = function(){
    if(xhr.status === 200)
    {
        el.innerHTML = xhr.responseText;
        $('#content').hide().slideToggle();
    }
    else{
        console.log("something gone wrong");    
    }
};
xhr.send("search=ardunio");

});

    
     $('#retain').on('click', function(){
        let el = document.getElementById("content");

        if(el.innerHTML){
            $('#content').hide().empty();
        }

        xhr.open('GET','retain.html',true)
        xhr.onload = function(){
            if(xhr.status === 200)
            {
                el.innerHTML = xhr.responseText;
                $('#content').hide().slideToggle();
            }
            else{
                console.log("something gone wrong");    
            }
        };
        xhr.send("search=ardunio");

});

