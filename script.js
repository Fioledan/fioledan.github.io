setInterval(function () {
  document.title = new Date().toLocaleTimeString();
}, 1000);

function changeColor(color) {
  document.body.style.background = color;
}

function showDate() {
  alert('Сегодня: ' + new Date().toLocaleDateString());
}
