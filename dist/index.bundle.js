/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./code.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ItemDeal.js":
/*!*********************!*\
  !*** ./ItemDeal.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ItemDeal; });\nclass ItemDeal{\n    /*\n    класс конструктор, собирает \n    нам объект todo с текстом, \n    цветом срочности, временем\n\n    */\n    constructor(text, color){\n        this.text = text;\n        this.color = color;\n        this.now = new Date;\n    }\n}\n\n//# sourceURL=webpack:///./ItemDeal.js?");

/***/ }),

/***/ "./code.js":
/*!*****************!*\
  !*** ./code.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ItemDeal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemDeal */ \"./ItemDeal.js\");\n\n\n//  const ItemDeal = require('./ItemDeal').default;\n//  module.exports = ItemDeal;\n\n\nconst motivation_array = [\n  \"кто с утра, то не выспался\",\n  \"кто с утра встает, другим спать не дает\",\n  \"в силикиновой недвижимость подешевела\",\n];\n\nconst important_color = [\n  \"has-text-danger\",\n  \"has-text-warning\",\n  \"has-text-success\",\n];\n\nconst animation_array = [\n  \"animate__zoomOut\",\n  \"animate__zoomOutLeft\",\n  \"animate__flipOutX\",\n];\n\nconst select = document.getElementById(\"important\");\n\nconst field = document.querySelector(\"input\");\n\nconst button = document.querySelector(\".button_plus\");\n\nconst deals = document.getElementById(\"deals\");\n\nconst Month_Array = [\n  \"Января\",\n  \"Февраля\",\n  \"Марта\",\n  \"Апреля\",\n  \"Мая\",\n  \"Июня\",\n  \"Июля\",\n  \"Августа\",\n  \"Сентября\",\n  \"Октября\",\n  \"Ноября\",\n  \"Декабря\",\n];\n\n//получает из объект localStorage данные по ключу\n//ключ - время создания в Unix - времени\n// значение - экземпляр класса ItemDeal\n//getItem(key) – получить данные по ключу key\n//key(index) – получить ключ на заданной позиции.\n//setItem - в localStorage назначить значение\n\n//функция добавления дела\n// addTask - имя функции\n// Прочитать значние field, если не пустой input - проверка ввода\n// создаем объект todo\n// сохранение в JSON\n//сохраняем это в localStorage\n// вызвали функцию создания HTML\n//очистить field\n\nfunction addTask() {\n  let content = field.value;\n  if (!content) {\n    // если content == пустой строке\n    //то пустая строка + ! = true\n    //тогда логическое выражения выполнится и функция прервет работу\n    return;\n  }\n  let todo = new _ItemDeal__WEBPACK_IMPORTED_MODULE_0__[\"default\"](content, select.value - 1);\n  let todo_to_JSON = JSON.stringify(todo);\n  localStorage.setItem(+todo.now, todo_to_JSON);\n  GenerateDOM(todo);\n  field.value = '';\n}\n\nbutton.addEventListener(\"click\", addTask);\n//дальше вешаем события на Enter\ndocument.addEventListener(\"keypress\", (event) => {\n  if(event.code == 13){\n    addTask();\n    //https://keycode.info/\n  }\n})\n//показать сохраненные дела - общая задача\n//подзадачи\n//нужно взять дела из localStorage - for\n//парсим из JSON\n//заново генерируем Date \n//отобразить GenerateDOM\nfunction drawOnLoad(){\n  for (let i = 0; i < localStorage.length; i++) {\n    //Приняв число i, метод вернёт имя по номеру ключа в localStorage\n    let lk_ley = localStorage.key(i);\n    let content = localStorage.getItem(lk_ley);\n    let todo = JSON.parse(content);\n    let tempo_data = Date.parse(todo.now);\n    todo.now = new Date(tempo_data);\n    GenerateDOM(todo);\n  }\n}\ndrawOnLoad();\n\n\n\nfunction GenerateDOM(obj){\n  deals.insertAdjacentHTML('afterbegin', `\n  <div class=\"has-background-white wrap_task has-text-black\"> \n\n  <p class=\"${important_color[obj.color]} \"> ${obj.text} </p>\n  <p>  ${obj.now.getDate()} ${Month_Array[obj.now.getMonth()]} </p>\n\n  <div>  <i class=\"material-icons\">delete</i> </div>\n  </div>`);\n}\n\ndeals.addEventListener('click', (e)=>{\n  console.log(e);\n  let wrap_task = e.target.closest(\".wrap_task\");\n  wrap_task.remove();\n\n})\n\n\n//# sourceURL=webpack:///./code.js?");

/***/ })

/******/ });