"use strict";

import ItemDeal from "./ItemDeal";
import { getRandom, getUniq, json } from "./nordic_random";

const {
  motivation_array,
  important_color,
  animation_in,
  animation_out,
  Month_Array,
} = json;

const mot_speech = document.querySelector(".Mot_speech");

const select = document.getElementById("important");

const field = document.querySelector("input");

const button = document.querySelector(".button_plus");

const deals = document.getElementById("deals");

//пишем смену наших цитат
setInterval(() => {
  mot_speech.innerHTML = motivation_array[getUniq()];
}, 5000);

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
  field.value = "";
}

button.addEventListener("click", addTask);
//дальше вешаем события на Enter
document.addEventListener("keypress", (event) => {
  console.log(event);
  if (event.key == "Enter") {
    addTask();
    //https://keycode.info/
  }
});
//показать сохраненные дела - общая задача
//подзадачи
//нужно взять дела из localStorage - for
//парсим из JSON
//заново генерируем Date
//отобразить GenerateDOM
function drawOnLoad() {
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

function GenerateDOM(obj) {
  deals.insertAdjacentHTML(
    "afterbegin",
    `
  <div class="wrap_task ${important_color[obj.color]} " id=${+obj.now}> 

  <p class="todo_text"> ${obj.text} </p>
  <p>  ${obj.now.getDate()} ${Month_Array[obj.now.getMonth()]} </p>

  <div> 
    <i class="material-icons icon_edit ">edit</i> 
   <i class="material-icons icon_delete">delete</i> 
   </div>
  </div>`
  );
}

deals.addEventListener("click", (e) => {
  let trash = e.target.closest(".icon_delete");
  let wrap_task = trash.parentNode.parentNode;
  wrap_task.remove();
  localStorage.removeItem(wrap_task.getAttribute("id"));
});

deals.addEventListener("click", (e) => {
  let pen = e.target.closest(".icon_edit");
  let wrap_task = pen.parentNode.parentNode;
  let todo_text = wrap_task.querySelector(".todo_text");
  todo_text.contentEditable = "true";

  let data = localStorage.getItem(wrap_task.id);
  let obj = JSON.parse(data);
  obj.text = todo_text.textContent;
  let obj_to_JSON = JSON.stringify(obj);
  localStorage.setItem(wrap_task.id, obj_to_JSON);
});
