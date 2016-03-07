$(document).ready(function(){
  $(".box").click(function(){
      $( "#shadowbox" ).show();
       $( "#overlay" ).show();
    var name=$(this).attr("name");
    $("#sbname").text(name);
    var am=$(this).attr("am");
    $("#sbam").text(am);
  });
  $("#overlay").click(function(){
       $( "#shadowbox" ).hide();
       $( "#overlay" ).hide();
  });
               
});
