(function($) {
    "use-strict"

    // data-bg-image
    $("[data-background]").each(function (){
        $(this).css("background-image", "url("+ $(this).attr("data-background") +  ")");
    });

    // magnific popup 
    $('.popup-image').magnificPopup({
      type: 'image'
      // other options
    });
    $('.popup-video').magnificPopup({
      type: 'iframe'
      // other options
    });

    /*** testimonial-slider js start***/
    var swiper = new Swiper(".rs-testimonial-active", {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
      },
        keyboard: {
          enabled: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".rs-swiper-testm-button-next",
          prevEl: ".rs-swiper-testm-button-prev",
        },
      });


    //**  brand-Animation js start  **//
      var swiper = new Swiper(".rs-brand-top-active", {
        slidesPerView: 'auto',
        spaceBetween: 80,
        freemode: true,
        centeredSlides: true,
        loop: true,
        speed: 4000,
        allowTachMode: false,
        autoplay: {
          delay: 1,
          disableOnInteraction: true,
        },
      });

      //**  team slider items **//
      var swiper = new Swiper(".rs-team-active", {
        slidesPerView: 4,
        spaceBetween: 30,
        keyboard: {
          enabled: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".rs-swiper-team-button-next",
          prevEl: ".rs-swiper-team-button-prev",
        },
        breakpoints: {
          300: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        },
      });

})(jQuery);