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
});
