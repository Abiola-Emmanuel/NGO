function darkMode() {
  const body = document.getElementById('body');
  const modeIcon = document.querySelector('.mode i');
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    modeIcon.className = 'fa fa-moon-o';
  } else {
    body.classList.add('dark');
    modeIcon.className = 'fa fa-sun-o';
  }
}

const menuOverlay = document.getElementById('menuOverlay');

function showMenu() {
  menuOverlay.style.width = '300px';
}

function closeMenu() {
  menuOverlay.style.width = '0';
}

const date = new Date;
const newDate = date.getFullYear()
const footDate = document.getElementById('date')
footDate.innerHTML = newDate