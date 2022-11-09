$(document).ready(function() {
   $("#loginLink").click(function( event ){
          event.preventDefault();
          $(".modal").fadeToggle("fast");
    });

    $("#loginLink2").click(function( event ){
      event.preventDefault();
      $(".modal").fadeToggle("fast");
   });

   $(".overlayLink").click(function(event){
       event.preventDefault();
       var action = $(this).attr('data-action');

       $("#loginTarget").load("ajax/" + action);

       $(".modal").fadeToggle("fast");
   });

   $(".modal__close").click(function(){
       $(".modal").fadeToggle("fast");
   });

   $(document).keyup(function(e) {
       if(e.keyCode == 27 && $(".modal").css("display") != "none" ) { 
           event.preventDefault();
           $(".modal").fadeToggle("fast");
       }
   });
});