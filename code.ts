import ItemDeal from "./src_js/ItemDeal";
import { getRandom, getUniq } from "./src_js/random_data";

const json = require("./src_js/data.json");
let {
  motivation_array,
  important_color,
  animation_intro,
  animation_out,
  Month_Array,
} = json;

const select: HTMLSelectElement = <HTMLSelectElement>(
  document.getElementById("important")
);

const field: HTMLInputElement = <HTMLInputElement>(
  document.querySelector("input")
);

const button: HTMLButtonElement = <HTMLButtonElement>(
  document.querySelector(".button_plus")
);

const deals: HTMLDivElement = <HTMLDivElement>document.querySelector("#deals");

const MotSpeech: HTMLDivElement = <HTMLDivElement>(
  document.querySelector(".Mot_speech")
);

setInterval(() => {
  // смена цитат раз в три секунды

  MotSpeech.textContent = motivation_array[getUniq(motivation_array)];
}, 3000);

function addTask() {
  let content: string = field.value;
  if (content === "") {
    return;
  }
  let todo: ItemDeal = new ItemDeal(content, parseInt(select.value) - 1);
  let todo_to_JSON = JSON.stringify(todo);
  localStorage.setItem(todo.stamp.getTime().toString(), todo_to_JSON);
  GenerateDOM(todo, true);
  field.value = "";
  select.focus();
}

button.addEventListener("click", addTask);
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

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

function GenerateDOM(obj: ItemDeal, anim: boolean = false) {
  let { text, color, stamp } = obj;
  deals.insertAdjacentHTML(
    "afterbegin",
    `
  <div class="has-background-white ${
    anim
      ? animation_intro[getRandom(0, animation_intro.length)] +
        " animate__animated"
      : ""
  } wrap_task has-text-black" id="${Number(stamp)}"> 

  <p class="${important_color[color]} "> ${text} </p>
  <p>  ${stamp.getDate()} ${Month_Array[stamp.getMonth()]} </p>

  <div>  <i class="material-icons">delete</i> </div>
  </div>`
  );
}

deals.addEventListener("click", (event) => {
  const target = event.target as HTMLTextAreaElement;
  try {
    let thrash = <HTMLDivElement>target.closest(".material-icons");

    let wrap_task = thrash.parentElement.parentElement;

    localStorage.removeItem(wrap_task.getAttribute("id"));
    wrap_task.classList.add("animate__animated");
    wrap_task.classList.add(animation_out[getRandom(0, animation_out.length)]);
    setInterval(() => {
      wrap_task.style.display = "none";
    }, 1000);
  } catch (e) {
    console.log("ты куда тыкаешь");
  }
});

function ChangeColorSelect(el) {
  switch (el.value) {
    case "1":
      console.log(el);
      el.parentElement.className = "select is-danger";
      break;
    case "2":
      el.parentElement.className = "select is-warning";
      break;
    case "3":
      el.parentElement.className = "select is-primary";
      break;

    default:
      break;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ChangeColorSelect(select);
  select.focus();
});
select.onchange = () => {
  ChangeColorSelect(select);
};
select.addEventListener("keydown", (e) => {
  if (e.key === "1") {
    select.value = "1";
    ChangeColorSelect(select);
  } else if (e.key == "2") {
    select.value = "2";
    ChangeColorSelect(select);
  } else if (e.key == "3") {
    select.value = "3";
    ChangeColorSelect(select);
  }
});
