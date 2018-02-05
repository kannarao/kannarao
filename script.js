
function window_resize() {
  $(".k-main").height($(window).height())
  $(".main-content").height($(".k-main").height()-40);
  $(".main-content").width($(".k-main").width()-40);
}
window_resize();
$( window ).resize(window_resize);

$( document ).ready(function() {

  setTimeout(function(){

    $('.k-loader').css('display', 'none');
    $('.k-main-image').fadeIn('slow', function() {
      $(".k-main-home").fadeIn('slow');
    });
  }, 3000);


  function open_menu() {

    $('.k-menu-image').fadeOut('fast', function() {
      $(".k-home").css('padding-right', '350px');
      $(".k-menu").css('width', '350px');
      $('.k-menu-content').fadeIn('slow');
      window_resize();
      image_resize();
    });
  }
  $(".k-menu-image").click(open_menu);

  function close_menu() {

    $('.k-menu-content').fadeOut('fast', function() {
      $(".k-home").css('padding-right', '50px');
      $(".k-menu").css('width', '50px');
      $('.k-menu-image').fadeIn('slow');
      window_resize();
      image_resize();
    });
  }
  $("#menu-close").click(close_menu);

  function image_resize() {


    if($(".gallery").is(":visible")) {

      var width = $(".main-content").width();
      width = width/4;
      $(".gallery .image").width(width);
      var height = $(".main-content").height();
      height = height/3;
      $(".gallery .image").height(height);
      close_full_image();
    } else if ($(".contact").is(":visible")) {

      my_map();
    }
  }

  function open_page(){

    var elem_class = $(this).attr('attr');
    if (elem_class != 'home') {

      $(".k-main-home").fadeOut('slow');
      if(!$("."+elem_class).is(":visible")) {

        $(".main-content").fadeOut('slow', function() {

          $(".main-content > div").css('display', 'none');
          $(".main-content").fadeIn('slow', function() {

            $("."+elem_class).fadeIn('slow');
            image_resize();
          });
        });
      }
    } else {

      $(".main-content").fadeOut('slow', function(){
        $(".k-main-home").fadeIn('slow');
      });
      $(".main-content > div").css('display', 'none');
    }
  }
  $(".menu-list li").click(open_page);


  function show_full_image() {
    $(".full-image img").attr('src', $(this).children('img').attr('src'))
    $(".full-image").fadeIn('slow');
  }
  $(".image").click(show_full_image);

  function close_full_image() {
    $(".full-image").fadeOut('slow');
  }
  $("#image-close").click(close_full_image);

  $( ".k-main-home" ).mousemove(function( event ) {
    console.log(event.pageX + ", " + event.pageY);

    $(".cursor-flw").css({'top': event.pageY-25, 'left': event.pageX-25});
  });

  function my_map() {
    var mapOptions = {
      center: new google.maps.LatLng(12.9221312, 77.6082717),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  }
})
