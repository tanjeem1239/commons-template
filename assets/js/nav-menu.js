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
  