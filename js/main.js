const form = document.querySelector('.form'); // Выбираем форму по классу
const numberShow = document.querySelector('.show-number'); // Выбираем элемент для отображения случайных чисел по классу
const minInput = document.querySelector('.field-min'); // Выбираем поле ввода минимального числа по классу
const maxInput = document.querySelector('.field-max'); // Выбираем поле ввода максимального числа по классу

// Функция для генерации случайного числа в заданном диапазоне
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Функция для обновления отображаемого случайного числа
function updateNumberShow() {
    const min = parseInt(minInput.value, 10);
    const max = parseInt(maxInput.value, 10);
    const randomNumber = getRandomNumber(min, max);
    numberShow.textContent = randomNumber;
}

// Обработчик события для отправки формы
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Предотвращаем стандартное действие формы (перезагрузку страницы)

    setTimeout(() => {
        updateNumberShow(); // Запускаем обновление отображаемого случайного числа с небольшой задержкой
    }, 100);
});
