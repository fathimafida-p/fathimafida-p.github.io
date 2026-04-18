$('.screen-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '0px',
  arrows: true,
  autoplay: true,
  autoplaySpeed: 1000,
  cssEase: 'linear',
  prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      }
    }
  ]
});

$('.slide').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 1000,
  cssEase: 'linear',
  prevArrow: '<button type="button" class="slick-prev"><i class="bi bi-caret-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="bi bi-caret-right"></i></i></button>',
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
      }
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      }
    }
  ]
});

const sortBtn = document.getElementById("sortToggle");
const container = document.querySelector(".sort-container");

sortBtn.addEventListener("click", () => {
  container.classList.toggle("sort-open");
});






AOS.init();