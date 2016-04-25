function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a;
}
$(document).ready(function(){

 var table = [
   {
     name:'Hydrogen', 
     abv:'H'     
   },
  {
     name:'Silicon', 
     abv: 'Si'    
   },
  {
     name:'Aluminum', 
     abv: 'Al'    
   },
     {
     name:'Iron', 
     abv: 'Fe'    
   },
   {
     name:'Calcium', 
     abv: 'Ca'    
   },
  {
     name:'Sodium', 
     abv: 'Na'    
   },
  {
     name:'Magnesium', 
     abv: 'Mg'    
   },
     {
     name:'Potassium', 
     abv: 'K'    
   },
     {
     name:'Titanium', 
     abv: 'Ti'    
   },
       {
     name:'Radium', 
     abv: 'Ra'    
   }
 ];
 var matching = [];
 for (i=0; i<table.length; i++){
 
      var mn = "<div class='card hidden' n='"+table[i].abv+"'><span>"+table[i].name+" </span></div>";
      var ma = "<div class='card hidden' n='"+table[i].abv+"'><span>"+table[i].abv+" </span></div>";
     
     matching.push(mn);
     matching.push(ma);
   }
  matching = shuffle(matching);
  for(i=0;i<matching.length;i++){
    $('#matching').append(matching[i]);
  }
var click1 = false;
var click2 = false;
$('.card').click(function(){
 
          // Check if 3rd click
          if(click1 && click2)
          {
               $('.card').not('.disabled').addClass('hidden');           
                click1 = false;
                click2 = false;
          }
         // remove hidden class showing the span
         $(this).removeClass('hidden');
          
          // set click1 or click2 depending
         if(click1 == false){
           click1 = $(this).attr('n');          
         }
         else{
           click2 = $(this).attr('n');
         }
         if(click1 == click2){
           $('.card[n="'+click1+'"]').addClass('disabled');           
         }
         
});

});

