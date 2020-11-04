"use strict";
fetch("http://localhost:3000/deals")
  .then((response) => response.json())
  .then((json) => drawOnLoad(json));

import ItemDeal from "./ItemDeal";
import { getRandom, getUniq, json } from "./nordic_random";
// я тут комментарий написал
const {
  motivation_array,
  important_color,
  animation_in,
  animation_out,
  Month_Array,
} = json;

console.log(motivation_array.__proto__);

const mot_speech = document.querySelector(".Mot_speech");
console.log(mot_speech.__proto__);

const select = document.getElementById("important");

const field = document.querySelector("input");

const button = document.querySelector(".button_plus");

const deals = document.getElementById("deals");

//пишем смену наших цитат
setInterval(() => {
  mot_speech.innerHTML = motivation_array[getUniq()];
}, 5000);

function addTask() {
  let content = field.value;
  if (!content) {
    // если content == пустой строке
    //то пустая строка + ! = true
    //тогда логическое выражения выполнится и функция прервет работу
    return;
  }
  let todo = new ItemDeal(content, select.value - 1);

  fetch("http://localhost:3000/deals", {
    method: "POST",
    body: JSON.stringify({
      prioritet: todo.color,
      content: todo.text,
      create_date: `${todo.now.getFullYear()}-${todo.now.getMonth()}-${todo.now.getDate()}`,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => GenerateDOM(json));
  field.value = "";
}

button.addEventListener("click", addTask);
//дальше вешаем события на Enter
document.addEventListener("keypress", (event) => {
  console.log(event);
  if (event.key == "Enter") {
    addTask();
  }
});
//показать сохраненные дела - общая задача
//подзадачи
//нужно взять дела из localStorage - for
//парсим из JSON
//заново генерируем Date
//отобразить GenerateDOM
function drawOnLoad(arr) {
  for (let i = 0; i < arr.length; i++) {
    GenerateDOM(arr[i]);
  }
}

function GenerateDOM(obj) {
  // todo удалить pen
  //давайте сделайте деструктурализацию
  let { id, prioritet, content, create_date } = obj;
  deals.insertAdjacentHTML(
    "afterbegin",
    `
  <div class="wrap_task ${important_color[prioritet]} " id=${+id}> 

  <p class="todo_text"> ${content} </p>
  <p>  ${create_date.substring(0, 10)} </p>

  <div> 
   <!-- <i class="material-icons icon_edit">edit</i> -->
   
   <i class="material-icons icon_delete">delete</i> 
   </div>
  </div>`
  );
}

deals.addEventListener("click", (e) => {
  //  удаление дела
  let trash = e.target.closest(".icon_delete");
  let wrap_task = trash.parentNode.parentNode;

  fetch(`http://localhost:3000/deal/${wrap_task.id}`, {
    method: "DELETE",
    body: wrap_task.id,
  }).then((response) => console.log(response));
  wrap_task.remove();
});

deals.addEventListener("click", (e) => {
  try {
    console.log("adasd");
  } catch {}
  let todo_text = e.target.closest(".todo_text");
  let wrap_task = todo_text.parentNode;
  todo_text.contentEditable = "true";

  let selection = window.getSelection();
  selection.collapse(todo_text, 1);

  wrap_task.addEventListener("keypress", (e) => {
    console.log(e);
    if (e.key == "Enter") {
      let data = localStorage.getItem(wrap_task.id);
      let obj = JSON.parse(data);
      obj.text = todo_text.textContent;
      let obj_to_JSON = JSON.stringify(obj);
      localStorage.setItem(wrap_task.id, obj_to_JSON);
      todo_text.contentEditable = "false";
    }
  });
});
