  $(document).ready(function(){
    alert("111");
    
  $( "cross_top" ).hide();
  //$( ".menu-top" ).hide();
  $( ".hamburger_top" ).click(function() {
  $( ".menu-top" ).slideToggle( "slow", function() {
  $( ".hamburger_top" ).hide();
  $( ".auth" ).hide();
  $( ".top-menu" ).hide(); 
  });

  $( "cross_top" ).click(function() {
  $( ".menu-top" ).slideToggle( "slow", function() {
  $( "cross_top" ).hide();
  $( ".hamburger_top" ).show();
  $( ".auth" ).show();
  $( ".top-menu" ).show(); 
  });
  });
  
  
   $( "cross_menu" ).hide();
  //$( ".menu-top" ).hide();
  $( ".cross_menu" ).click(function() {
  $( ".menu-top" ).slideToggle( "slow", function() {
  $( ".cross_menu" ).hide();
  $( ".auth" ).hide();
  $( ".cat-menu ul" ).hide(); 
  });

  $( "cross_top" ).click(function() {
  $( ".menu-top" ).slideToggle( "slow", function() {
  $( "cross_top" ).hide();
  $( ".cross_menu" ).show();
  $( ".auth" ).show();
  $( ".cat-menu ul" ).show(); 
  });
  });
  
  
  
  
  });
    
  
    
    
  