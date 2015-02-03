projectLinks = document.querySelectorAll('.Project-item')
main = document.querySelector('main');

for project in projectLinks
  if project.getAttribute('data-brand-color')
    project.addEventListener 'mouseenter', ->
      main.style.backgroundColor = this.getAttribute 'data-brand-color'
    project.addEventListener 'mouseleave', ->
      main.style.backgroundColor = ''


