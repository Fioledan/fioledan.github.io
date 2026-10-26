// Скрипт 1: идущие часики в заголовке (Title)
const pageTitle = document.title;

function updateTitle() {
  const time = new Date().toLocaleTimeString('ru-RU');
  document.title = time + ' — ' + pageTitle;
}

updateTitle();
setInterval(updateTitle, 1000);

// Скрипт 2: изменение цвета фона при нажатии на кнопки
const colorButtons = document.querySelectorAll('[data-color]');

colorButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    document.body.style.background = button.dataset.color;
  });
});

// Скрипт 3: вывод текущей даты в pop-up по нажатию на кнопку
const dateButton = document.getElementById('date');

if (dateButton) {
  dateButton.addEventListener('click', function () {
    const today = new Date().toLocaleDateString('ru-RU', {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    });
    alert('Сегодня ' + today);
  });
}
