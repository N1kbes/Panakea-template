var domReady = function(callback) {
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};


domReady(function() {

  var bttn = document.querySelector('.menu-button');
  var menu = document.querySelector('.main-menu');

  var showMenu = function(){
    menu.classList.toggle('active');
  };

  bttn.addEventListener("click", showMenu, false);

  //****  ANIMATIONS  ****
  //menu bar
  var menu_items = document.querySelectorAll('.main-menu li');

  TweenMax.from(menu_items, 1, {
     y: function(index) {
      return (index + 1) * 30
    }
  });

});
