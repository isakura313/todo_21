"use strict";

//  const ItemDeal = require('./ItemDeal').default;
//  module.exports = ItemDeal;
import ItemDeal from "./ItemDeal";

const motivation_array = [
  "кто с утра, то не выспался",
  "кто с утра встает, другим спать не дает",
  "в силикиновой недвижимость подешевела",
];

const important_color = [
  "has-text-danger",
  "has-text-warning",
  "has-text-success",
];

const animation_array = [
  "animate__zoomOut",
  "animate__zoomOutLeft",
  "animate__flipOutX",
];

const select = document.getElementById("important");

const field = document.querySelector("input");

const button = document.querySelector(".button_plus");

const deals = document.getElementById("deals");

const Month_Array = [
  "Января",
  "Февраля",
  "Марта",
  "Апреля",
  "Мая",
  "Июня",
  "Июля",
  "Августа",
  "Сентября",
  "Октября",
  "Ноября",
  "Декабря",
];

//получает из объект localStorage данные по ключу
//ключ - время создания в Unix - времени
// значение - экземпляр класса ItemDeal
//getItem(key) – получить данные по ключу key
//key(index) – получить ключ на заданной позиции.
//setItem - в localStorage назначить значение

//функция добавления дела
// addTask - имя функции
// Прочитать значние field, если не пустой input - проверка ввода
// создаем объект todo
// сохранение в JSON
//сохраняем это в localStorage
// вызвали функцию создания HTML
//очистить field

function addTask() {
  let content = field.value;
  if (!content) {
    // если content == пустой строке
    //то пустая строка + ! = true
    //тогда логическое выражения выполнится и функция прервет работу
    return;
  }
  let todo = new ItemDeal(content, select.value - 1);
  let todo_to_JSON = JSON.stringify(todo);
  localStorage.setItem(+todo.now, todo_to_JSON);
  GenerateDOM(todo);
  field.value = '';
}

button.addEventListener("click", addTask);
//дальше вешаем события на Enter
document.addEventListener("keypress", (event) => {
  if(event.code == 13){
    addTask();
    //https://keycode.info/
  }
})
//показать сохраненные дела - общая задача
//подзадачи
//нужно взять дела из localStorage - for
//парсим из JSON
//заново генерируем Date 
//отобразить GenerateDOM
function drawOnLoad(){
  for (let i = 0; i < localStorage.length; i++) {
    //Приняв число i, метод вернёт имя по номеру ключа в localStorage
    let lk_ley = localStorage.key(i);
    let content = localStorage.getItem(lk_ley);
    let todo = JSON.parse(content);
    let tempo_data = Date.parse(todo.now);
    todo.now = new Date(tempo_data);
    GenerateDOM(todo);
  }
}
drawOnLoad();



function GenerateDOM(obj){
  deals.insertAdjacentHTML('afterbegin', `
  <div class="has-background-white wrap_task has-text-black"> 

  <p class="${important_color[obj.color]} "> ${obj.text} </p>
  <p>  ${obj.now.getDate()} ${Month_Array[obj.now.getMonth()]} </p>

  <div>  <i class="material-icons">delete</i> </div>
  </div>`);
}

deals.addEventListener('click', (e)=>{
  console.log(e);
  let wrap_task = e.target.closest(".wrap_task");
  wrap_task.remove();

})
