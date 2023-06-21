import("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js");

// Dynamically import and load the second script
import("https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js");


// Nav Menu

document.addEventListener('DOMContentLoaded', function() {
  var navMenuItems = document.querySelectorAll('.nav-menu-items li');
  var navMenuSubItems = document.querySelectorAll('.nav-menu-sub-items');

  navMenuItems.forEach(function(item) {
    item.addEventListener('mouseover', function() {
      var target = item.dataset.target;
      var subItem = document.querySelector(target);

      navMenuSubItems.forEach(function(sub) {
        sub.style.display = 'none';
      });

      subItem.style.display = 'block';
    });
  });
});


// Slider


    // Swiper js

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      pagination: {
      el: ".swiper-pagination",
      clickable: true,
      },
      breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
      },
      });


