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
  
      var containerScrollLeft = sliderContainer.scrollLeft;
      var targetScrollLeft = containerScrollLeft + scrollDistance;
      var maxScrollLeft = containerScrollWidth - containerWidth;
  
      if (targetScrollLeft > maxScrollLeft) {
        targetScrollLeft = maxScrollLeft;
      }
  
      sliderContainer.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth'
      });
    });
  
    // Prevent the "explore-our-stories" section from moving
    storiesSection.addEventListener('click', function(event) {
      event.stopPropagation();
    });
  });
  
  