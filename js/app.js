


  $(document).ready(function(){
    $('.dropdown-trigger').dropdown();
    $('.collapsible').collapsible();
  	AOS.init();
  	$('.modal').modal();
    //$('#cookies').modal('open');

    $('select').formSelect();
    $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true,
  });


    setInterval(function() {
    $('.carousel').carousel('next');
  	}, 10000);
    



    $(window).scroll(function() {
      if ($(window).scrollTop()>100) {

        $('nav').addClass('header-nav-scrolled');
        $('nav').removeClass('header-nav');


      }else{
        $('nav').removeClass('header-nav-scrolled');
        $('nav').addClass('header-nav');

      }
    });


  });

  

   $(window).scroll(function() {
      if ($(window).scrollTop()>100) {

        $('nav').addClass('normal');
        $('nav').removeClass('scroll');


      }else{
        $('nav').removeClass('normal');
        $('nav').addClass('scroll');

      }
    });
