const Methods = {
  init() {
    window.addEventListener("load", () => {
      Methods.slideHomeMain();
      Methods.slideArticle();
      Methods.slideWebstories();
      Methods.slideMostRead();
    });
  },
  slideHomeMain() {
    const $slider = $(".carrousel");
    const $sliderMobile = $(".carrousel__mobile");

    if (!$slider.length) return;
    $slider.slick({
      autoplay: true,
      autoplaySpeed: 3000,
    });

    if (!$sliderMobile.length) return;

    $sliderMobile.slick({
      autoplay: false,
      arrows: true,
    });
  },

  slideArticle() {
    const $slider = $(".col-container");
    const $sliderItem = $(".col-container .col");

    if (!$sliderItem.length) return;

    $slider.slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      dots: $sliderItem.length > 4 ? true : false,

      responsive: [
        {
          breakpoint: 1138,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
          },
        },

        {
          breakpoint: 992,
          settings: {
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
          },
        },
        {
          breakpoint: 432,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            variableWidth: true,
          },
        },
      ],
    });

    let stHeight = $(".col-container .slick-track").height();

    $(".col-container .slick-slide").css("height", stHeight + "px");
  },

  slideWebstories() {
    const $slider = $(".carrousel_webstories");
    const $sliderItem = $(".carrousel_webstories .carrousel_webstories-item");

    if (!$sliderItem.length) return;

    if ($sliderItem.length > 0) {
      $slider.slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        dots: $sliderItem.length > 4 ? true : false,

        responsive: [
          {
            breakpoint: 1138,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              dots: true,
            },
          },

          {
            breakpoint: 992,
            settings: {
              arrows: false,
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true,
            },
          },
          {
            breakpoint: 432,
            settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              variableWidth: true,
            },
          },
        ],
      });
      let stHeight = $(".carrousel_webstories .slick-track").height();

      $(".carrousel_webstories .slick-slide").css("height", stHeight + "px");
    }

    let stHeight = $(".col-container .slick-track").height();

    $(".col-container .slick-slide").css("height", stHeight + "px");
  },

  slideMostRead() {
    const $slider = $(".card__sidebar-body-content.article__most-read");
    const mediaQuery = window.matchMedia("(max-width: 576px)");

    if (!$slider.length) return;

    console.log($slider);

    if (mediaQuery.matches) {
      $slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
        arrows: false,
      });
    }
  },
};

export default {
  init: Methods.init,
};
