$( document ).ready(function() {
    $(".show-menu-mobile").click(function(){
      $(".menu-mobile").addClass('active');
      $(".shadow-menu").addClass('active');
    });

    $(".shadow-menu").click(function(){
      $(".menu-mobile").removeClass('active');
      $(".shadow-menu").removeClass('active');
    });

    $(".close-menu").click(function(){
      $(".menu-mobile").removeClass('active');
      $(".shadow-menu").removeClass('active');
    });
});
