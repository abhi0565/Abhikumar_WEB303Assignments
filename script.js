/*
    Assignment 05
*/

$(document).ready(function () {
    // your code here

    let items = class {


        constructor(id,name,description,genre){
          this.id = id;
          this.name = name;
          this.description = description;
          this.genre = genre;
        }
       updateContentItem(id,name,description,genre){
          if(id===this.id && name != {} && description != {} && genre != {}){

          }else{
              
          }
        } 

     tostring() {
        $('#content-item-list').append(
            '<div class ="content-item-wrapper"id= "content-item-' +this.id +'">'+
             '<h4>name:- '+ this.name+'</h4>'+
             '<p>description :- '+ this.description+' </p>'+
             '<div>genre :- '+ this.genre+' </div>'+
              '</div>');
     
        
    }


    
    
    };


    
   let allitems = [
        {
            id : '1',
        name : 'laptop',
        description : 'dell',
        genre : 'i5' 
      },
      {
        id : '2',
        name : 'pc',
        description : 'samsumg',
        genre : 'i3' 
      },
      {
        id : '3',
        name : 'laptop',
        description : 'samsung',
        genre : 'i5' 
    },
      {
          id : '4',
        name : 'laptop',
        description : 'thinkpad',
        genre : 'i5' 
    },
      {
          id : '5',
          name : 'pc',
        description : 'acer',
        genre : 'i7' 
      }
    ]

    for(i = 0; i < allitems.length; i++){
        $('#content-item-list').append(
    '<div class ="content-item-wrapper"id= "content-item-' +allitems[i].id +'">'+
     '<h4>name:- '+ allitems[i].name+'</h4>'+
     '<p>description :- '+ allitems[i].description+' </p>'+
     '<div>genre :- '+ allitems[i].genre+' </div>'+
      '</div>');
    };
   

    
});


