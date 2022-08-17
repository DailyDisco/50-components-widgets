// bring all the html panels into the javascript
const panels = document.querySelectorAll('.panel')
// thanks to the All in .querySelectorAll we can return all the panels in an array/object called a node list.

// loop through each panel
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
  })
})

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}