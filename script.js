/*
	WEB 303 Assignment 1 - jQuery
	{Abhikumar Narendrabhai Patel}
*/

$(document).ready(function(){

$("#percent").change(function(){
	var salary = $('#yearly-salary').val();
	var percentage = $('#percent').val();
   
	var result = (salary * percentage / 100).toFixed(2);
	var amount = $('#amount').text("$"+result);

  });





});