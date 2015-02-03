(function() {
  var main, project, projectLinks, _i, _len;

  projectLinks = document.querySelectorAll('.Project-item');

  main = document.querySelector('main');

  for (_i = 0, _len = projectLinks.length; _i < _len; _i++) {
    project = projectLinks[_i];
    if (project.getAttribute('data-brand-color')) {
      project.addEventListener('mouseenter', function() {
        return main.style.backgroundColor = this.getAttribute('data-brand-color');
      });
      project.addEventListener('mouseleave', function() {
        return main.style.backgroundColor = '';
      });
    }
  }

}).call(this);

 //# sourceMappingURL=main.js.map