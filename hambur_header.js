  $(document).ready(function(){
    
   $( ".cross_top" ).hide();
  //$( ".menu-top" ).hide();
  $( ".hamburger_top" ).click(function() {
  $( ".top-menu" ).slideToggle( "slow", function() {
  $( ".hamburger_top" ).hide();
  $( ".auth" ).show(); 
  $( ".top-menu" ).show();  
  $( ".cross_top" ).show();
  $( ".cross_top" ).show();
  });
  });
  
  $( ".cross_top" ).click(function() {
  $( ".top-menu" ).slideToggle( "slow", function() {
  $( ".cross_top" ).hide();
  $( ".hamburger_top" ).show();
  $( ".auth" ).hide();
  $( ".top-menu" ).hide(); 
  });
  });
  
  
   $( ".cross_menu" ).hide();
  //$( ".menu-top" ).hide();
  $( ".hamburger_menu" ).click(function() {
  $( ".cat-menu ul" ).slideToggle( "slow", function() {
  $( ".hamburger_menu" ).hide();
  $( ".cross_menu" ).show();
  });
 });
  
  $( ".cross_menu" ).click(function() {
  $( ".cat-menu ul" ).slideToggle( "slow", function() {
  $( ".cross_top" ).hide();
  $( ".cross_menu" ).hide()
  $( ".hamburger_menu" ).show();
  });
  });
});  
  
  
  

    
  
    
    
  