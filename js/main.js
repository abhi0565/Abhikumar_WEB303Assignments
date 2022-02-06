// WEB303 Assignment 2

var xhr = new XMLHttpRequest;
xhr.onload = function(){
    if(xhr.status === 2000){
        let el = document.getElementById("ajax-data-wrapper");
        el.innerHTML = xhr.responseText;
    }
    else{
        console.log("something gone wrong");
    }
}

xhr.open('GET','convert.html',true);



