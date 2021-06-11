var tabs = document.querySelectorAll('nav a')
contentPara = document.querySelector('.content')

//tabs.forEach((tab) => tab.addEventListener('click', makeActive))

function makeActive(event) {
  if (!event.target.matches('a')) return
  makeInactive()
  event.target.classList.add('active')
}
//event.preventDefault() - dont need to prevent degault because doesnt have pages that nagivate away. hash routing.

function makeInactive() {
  tabs.forEach((tab) => tab.classList.remove('active'))
}

function setContentAccordingToHash() {
  const type = window.location.hash.substring(1)
  contentPara.innerHTML = data[type]
}

function initializePage() {
  if (!window.location.hash) {
    window.location.hash = 'cuisines'
    document.querySelector('[href="#cuisines"]').classList.add('active')
  } else {
    document
      .querySelector(`[href="${window.location.hash}]"`)
      .classList.add('active')
  }
  setContentAccordingToHash()
}

document.addEventListener('click', makeActive)
window.addEventListener('hashchange', setContentAccordingToHash)

initializePage()
