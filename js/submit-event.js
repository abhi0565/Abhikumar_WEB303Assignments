(function(){ 
  var form = document.getElementById('form');       // Get form element

  addEvent(form, 'submit', function(e) {             // When user submits form
    e.preventDefault();                              // Stop it being sent
    var elements = this.elements;                    // Get all form elements
    var username = elements.uname.value;          // Select username entered
    var ccode = elements.count.value;
    var msg      = 'Welcome ' + username+'The country code you selected is' +ccode ;            // Create welcome message
    document.getElementById('main').textContent = msg; // Write welcome message
  });
}());