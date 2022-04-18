(function(){
  var form      = document.getElementById('form');  // The form
  var uname  = document.getElementById('uname');     // uname input
  var password  = document.getElementById('password');     // uname input
  var confpassword  = document.getElementById('confpassword');     // uname input
  var count  = document.getElementById('count');     // uname input
  var checkbox = document.getElementById('checkbox')
  var submit    = document.getElementById('submit');  // Submit button

  var submitted = false;                            // Has form been submitted?
  submit.disabled = true;                           // Disable submit button
  submit.className = 'disabled';                    // Style submit button
 // console.log(submit.className);
  
  // On input: Check whether or not to enable the submit button
 var a = addEvent(uname, 'input', function(e) {         // On input of uname
    var target = e.target || e.srcElement;          // Target of event
    submit.disabled = submitted || !target.value;   // Set disabled property
    // If form has been submitted or pwd has no value set CSS to disabled
    submit.className = (submitted || !target.value) ? 'disabled' : 'enabled';
  }); 
 var b =  addEvent(password, 'input', function(e) {         // On input of uname
    var target = e.target || e.srcElement;          // Target of event
    submit.disabled = submitted || !target.value;   // Set disabled property
    // If form has been submitted or pwd has no value set CSS to disabled
    submit.className = (submitted || !target.value) ? 'disabled' : 'enabled';
  }); 
 var c =  addEvent(confpassword, 'input', function(e) {         // On input of uname
    var target = e.target || e.srcElement;          // Target of event
    submit.disabled = submitted || !target.value;   // Set disabled property
    // If form has been submitted or pwd has no value set CSS to disabled
    submit.className = (submitted || !target.value) ? 'disabled' : 'enabled';
  }); 
 var d =  addEvent(count, 'input', function(e) {         // On input of uname
    var target = e.target || e.srcElement;          // Target of event
    submit.disabled = submitted || !target.value;   // Set disabled property
    // If form has been submitted or pwd has no value set CSS to disabled
    submit.className = (submitted || !target.value) ? 'disabled' : 'enabled';
  }); 
 var e = addEvent(checkbox, 'input', function(e) {         // On input of uname
    var target = e.target || e.srcElement;          // Target of event
    submit.disabled = submitted || !target.value;   // Set disabled property
    // If form has been submitted or pwd has no value set CSS to disabled
      if (checkbox.checked) {
        submit.className = (submitted || !target.value) ? 'disabled' : 'enabled';
      }else{
        submit.className = (submitted || !target.value) ? 'enabled' : 'disabled';
      }
  }); 


  if(a&&b&&c&&d&&e){
    console.log('hello');
  }

  // On submit: Disable the form so it cannot be submitted again
  addEvent(form, 'submit', function(e) {            // On submit
    if (submit.disabled || submitted) {             // If disabled OR sent
      e.preventDefault();                           // Stop form submitting
      return;                                       // Stop processing function
    }                                               // Otherwise continue...
    submit.disabled = true;                         // Disable submit button
    submitted = true;                               // Update submitted var
    submit.className = 'disabled';                  // Update style

    // Demo purposes only: What would have been sent & show submit is disabled
    e.preventDefault();                             // Stop form submitting
   // alert('uname is ' + uname.value);         // Show the text
  });
}());