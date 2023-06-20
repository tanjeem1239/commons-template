import("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js");

// Dynamically import and load the second script
import("https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js");


(function() {
  window.addEventListener('load', () => {
    AOS.init({
      duration: 0,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()


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

document.addEventListener('DOMContentLoaded', function() {
  var productWidth = document.querySelector('.product').offsetWidth;
  var containerWidth = document.querySelector('.slider-container').offsetWidth;
  var containerScrollWidth = document.querySelector('.slider-container').scrollWidth;
  var scrollDistance = productWidth;

  var leftBtn = document.getElementById('left-btn');
  var rightBtn = document.getElementById('right-btn');
  var sliderContainer = document.querySelector('.slider-container');
  var storiesSection = document.querySelector('.explore-our-stories');

  // Move the product div to the left
  leftBtn.addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();

    var containerScrollLeft = sliderContainer.scrollLeft;
    var targetScrollLeft = containerScrollLeft - scrollDistance;

    if (targetScrollLeft < 0) {
      targetScrollLeft = 0;
    }

    sliderContainer.scrollTo({
      left: targetScrollLeft,
      behavior: 'smooth'
    });
  });

  // Move the product div to the right
  rightBtn.addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();

    var containerScrollRight = sliderContainer.scrollRight;
    var targetScrollRight = containerScrollRight + scrollDistance;
    var targetScrollRight = containerScrollRight - containerDistance;

    if (targetScrollRight > 0) {
      targetScrollRight = 0;
    }

    sliderContainer.scrollTo({
      right: targetScrollRight,
      behavior: 'smooth'
    });
  });

  // Prevent the "explore-our-stories" section from moving
  storiesSection.addEventListener('click', function(event) {
    event.stopPropagation();
  });
});

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


