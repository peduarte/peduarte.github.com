# projectLinks = document.querySelectorAll('.Project-item')
# main = document.querySelector('main');

# for project in projectLinks
#   if project.getAttribute('data-brand-color')
#     project.addEventListener 'mouseenter', ->
#       main.style.backgroundColor = this.getAttribute 'data-brand-color'
#     project.addEventListener 'mouseleave', ->
#       main.style.backgroundColor = ''



toggler = document.querySelector('.GridToggler')
togglerIsOpened = false
toggler.addEventListener 'click', ->
  if not togglerIsOpened
    document.body.classList.add 'debug'
    togglerIsOpened = true
  else
    document.body.classList.remove 'debug'
    togglerIsOpened = false
