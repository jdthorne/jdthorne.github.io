
$().ready(function() {
   
   var slideBackground = function() {
      $("#skybox").css("background-position-x", "0px");

      $("#skybox").animate({
         "background-position-x": "-1024px"
      }, 30000, "linear", function() { slideBackground(); } );
   };

   slideBackground();

   $("#header").click(function() {
      window.location = "https://itunes.apple.com/us/app/antex/id656352369?ls=1&mt=8";
   });

});
