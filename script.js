// 1. Часы в заголовке страницы
setInterval(function () {
  document.title = new Date().toLocaleTimeString();
}, 1000);

// 2. Смена цвета фона
function changeColor(color) {
  document.body.style.background = color;
}

// 3. Текущая дата в pop-up
function showDate() {
  alert('Сегодня: ' + new Date().toLocaleDateString());
}
