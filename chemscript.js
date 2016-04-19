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
  function showHex(){
            var hex =  document.querySelector("#color_hex_value"),
                h1 = document.querySelector("h1");
        
            h1.style.color = document.querySelector("#color_picker").value;
		}
               
});
