(function() {
  var toggler, togglerIsOpened;

  toggler = document.querySelector('.GridToggler');

  togglerIsOpened = false;

  toggler.addEventListener('click', function() {
    if (!togglerIsOpened) {
      document.body.classList.add('debug');
      return togglerIsOpened = true;
    } else {
      document.body.classList.remove('debug');
      return togglerIsOpened = false;
    }
  });

}).call(this);

 //# sourceMappingURL=main.js.map