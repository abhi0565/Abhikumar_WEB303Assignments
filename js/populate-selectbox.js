$( document ).ready(function() {
 
  var drop = document.getElementById('count');
  for (let i = 0; i < countries.length; i++) {
      drop.innerHTML += '<option value="' + countries[i].code + '">' + countries[i].name + '</option>';

    
  }

});