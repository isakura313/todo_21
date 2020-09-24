import ItemDeal from "./ItemDeal";

const motivation_array: string[] = [
  "кто с утра, то не выспался",
  "кто с утра встает, другим спать не дает",
  "в силикиновой недвижимость подешевела",
];

const important_color: string[] = [
  "has-text-danger",
  "has-text-warning",
  "has-text-success",
];

const animation_array: string[] = [
  "animate__zoomOut",
  "animate__zoomOutLeft",
  "animate__flipOutX",
];

const select: HTMLSelectElement = <HTMLSelectElement>(
  document.getElementById("important")
);

const field: HTMLInputElement = <HTMLInputElement>(
  document.querySelector("input")
);

const button: HTMLButtonElement = document.querySelector(".button_plus");

const deals: HTMLElement = document.getElementById("deals");

const MotSpeech: HTMLDivElement = document.querySelector(".Mot_speech");

const Month_Array: string[] = [
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

setInterval(() => {
  MotSpeech.textContent = motivation_array[getRandom(motivation_array.length)];
}, 3000);

function addTask() {
  let content: string = field.value;
  if (content === "") {
    return;
  }
  let todo: ItemDeal = new ItemDeal(content, parseInt(select.value) - 1);
  let todo_to_JSON = JSON.stringify(todo);
  localStorage.setItem(todo.stamp.getTime().toString(), todo_to_JSON);
  GenerateDOM(todo);
  field.value = "";
}

button.addEventListener("click", addTask);
document.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    addTask();
  }
});

//показать сохраненные дела - общая задача
//подзадачи
//нужно взять дела из localStorage - for
//парсим из JSON
//заново генерируем Date
//отобразить GenerateDOM
(function drawOnLoad() {
  for (let i = 0; i < localStorage.length; i++) {
    let lk_ley = localStorage.key(i);
    let content = localStorage.getItem(lk_ley);
    let todo = JSON.parse(content);
    let tempo_data = Date.parse(todo.stamp);
    todo.stamp = new Date(tempo_data);
    GenerateDOM(todo);
  }
})();

function GenerateDOM(obj: ItemDeal) {
  deals.insertAdjacentHTML(
    "afterbegin",
    `
  <div class="has-background-white wrap_task has-text-black" id="${Number(
    obj.stamp
  )}"> 

  <p class="${important_color[obj.color]} "> ${obj.text} </p>
  <p>  ${obj.stamp.getDate()} ${Month_Array[obj.stamp.getMonth()]} </p>

  <div>  <i class="material-icons">delete</i> </div>
  </div>`
  );
}

deals.addEventListener("click", (event) => {
  const target = event.target as HTMLTextAreaElement;
  let wrap_task = <HTMLDivElement>target.closest(".wrap_task");
  localStorage.removeItem(wrap_task.getAttribute("id"));
  wrap.setInterval(() => {
    wrap_task.style.display = "none";
  }, 1000);
});

function getRandom(max: number) {
  return Math.ceil(Math.random() * max - 1);
}
