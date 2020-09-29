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
/******/ 	return __webpack_require__(__webpack_require__.s = "./code.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code.ts":
/*!*****************!*\
  !*** ./code.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_js_ItemDeal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src_js/ItemDeal */ \"./src_js/ItemDeal.ts\");\n/* harmony import */ var _src_js_random_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src_js/random_data */ \"./src_js/random_data.ts\");\n\n\nvar json = __webpack_require__(/*! ./src_js/data.json */ \"./src_js/data.json\");\nvar motivation_array = json.motivation_array, important_color = json.important_color, animation_intro = json.animation_intro, animation_out = json.animation_out, Month_Array = json.Month_Array;\nvar select = (document.getElementById(\"important\"));\nvar field = (document.querySelector(\"input\"));\nvar button = (document.querySelector(\".button_plus\"));\nvar deals = document.querySelector(\"#deals\");\nvar MotSpeech = (document.querySelector(\".Mot_speech\"));\nsetInterval(function () {\n    // смена цитат раз в три секунды\n    MotSpeech.textContent = motivation_array[Object(_src_js_random_data__WEBPACK_IMPORTED_MODULE_1__[\"getUniq\"])(motivation_array)];\n}, 3000);\nfunction addTask() {\n    var content = field.value;\n    if (content === \"\") {\n        return;\n    }\n    var todo = new _src_js_ItemDeal__WEBPACK_IMPORTED_MODULE_0__[\"default\"](content, parseInt(select.value) - 1);\n    var todo_to_JSON = JSON.stringify(todo);\n    localStorage.setItem(todo.stamp.getTime().toString(), todo_to_JSON);\n    GenerateDOM(todo, true);\n    field.value = \"\";\n    select.focus();\n}\nbutton.addEventListener(\"click\", addTask);\ndocument.addEventListener(\"keydown\", function (e) {\n    if (e.key === \"Enter\") {\n        addTask();\n    }\n});\n(function drawOnLoad() {\n    for (var i = 0; i < localStorage.length; i++) {\n        var lk_ley = localStorage.key(i);\n        var content = localStorage.getItem(lk_ley);\n        var todo = JSON.parse(content);\n        var tempo_data = Date.parse(todo.stamp);\n        todo.stamp = new Date(tempo_data);\n        GenerateDOM(todo);\n    }\n})();\nfunction GenerateDOM(obj, anim) {\n    if (anim === void 0) { anim = false; }\n    var text = obj.text, color = obj.color, stamp = obj.stamp;\n    deals.insertAdjacentHTML(\"afterbegin\", \"\\n  <div class=\\\"has-background-white \" + (anim\n        ? animation_intro[Object(_src_js_random_data__WEBPACK_IMPORTED_MODULE_1__[\"getRandom\"])(0, animation_intro.length)] +\n            \" animate__animated\"\n        : \"\") + \" wrap_task has-text-black \" + important_color[color] + \"\\\" id=\\\"\" + Number(stamp) + \"\\\"> \\n\\n  <p class=\\\" text_content is-size-4\\\" > \" + text + \" </p>\\n  <p>  \" + stamp.getDate() + \" \" + Month_Array[stamp.getMonth()] + \" </p>\\n\\n  <div> \\n    <i class=\\\"material-icons\\\" id=\\\"icon_edit\\\">edit</i>  \\n    <i class=\\\"material-icons\\\" id=\\\"icon_delete\\\">delete</i> \\n  </div>\\n\\n  </div>\");\n}\ndeals.addEventListener(\"click\", function (event) {\n    var target = event.target;\n    try {\n        var thrash = target.closest(\"#icon_delete\");\n        var wrap_task_1 = thrash.parentElement.parentElement;\n        localStorage.removeItem(wrap_task_1.getAttribute(\"id\"));\n        wrap_task_1.classList.add(\"animate__animated\");\n        wrap_task_1.classList.add(animation_out[Object(_src_js_random_data__WEBPACK_IMPORTED_MODULE_1__[\"getRandom\"])(0, animation_out.length)]);\n        setInterval(function () {\n            wrap_task_1.style.display = \"none\";\n        }, 1000);\n    }\n    catch (e) {\n        console.log(\"ты куда тыкаешь\");\n    }\n});\ndeals.addEventListener(\"click\", function (event) {\n    var target = event.target;\n    try {\n        var edit_1 = target.closest(\"#icon_edit\");\n        var text_content_1 = (edit_1.parentElement.parentElement.querySelector(\".text_content\"));\n        text_content_1.setAttribute(\"contenteditable\", \"true\");\n        var range = void 0, selection = void 0;\n        if (document.body.createTextRange) {\n            range = document.body.createTextRange();\n            range.moveToElementText(text_content_1);\n            range.select();\n        }\n        else if (window.getSelection) {\n            selection = window.getSelection();\n            range = document.createRange();\n            range.selectNodeContents(text_content_1);\n            selection.removeAllRanges();\n            selection.addRange(range);\n        }\n        text_content_1.focus();\n        text_content_1.style.outlineColor = \"red\";\n        text_content_1.addEventListener(\"keydown\", function (e) {\n            if (e.key == \"Enter\") {\n                console.log(text_content_1.textContent);\n                var content = localStorage.getItem(edit_1.parentElement.parentElement.id);\n                console.log(content);\n                var todo = JSON.parse(content);\n                todo.text = text_content_1.textContent;\n                localStorage.setItem(edit_1.parentElement.parentElement.id, JSON.stringify(todo));\n                text_content_1.setAttribute(\"contenteditable\", \"false\");\n            }\n        });\n        // localStorage.removeItem(wrap_task.getAttribute(\"id\"));\n        // wrap_task.classList.add(\"animate__animated\");\n        // wrap_task.classList.add(animation_out[getRandom(0, animation_out.length)]);\n        // setInterval(() => {\n        //   wrap_task.style.display = \"none\";\n        // }, 1000);\n    }\n    catch (e) {\n        console.log(\"ты куда тыкаешь\");\n    }\n});\nfunction ChangeColorSelect(el) {\n    switch (el.value) {\n        case \"1\":\n            console.log(el);\n            el.parentElement.className = \"select is-danger\";\n            break;\n        case \"2\":\n            el.parentElement.className = \"select is-warning\";\n            break;\n        case \"3\":\n            el.parentElement.className = \"select is-primary\";\n            break;\n        default:\n            break;\n    }\n}\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    ChangeColorSelect(select);\n    select.focus();\n});\nselect.onchange = function () {\n    ChangeColorSelect(select);\n};\nselect.addEventListener(\"keydown\", function (e) {\n    if (e.key === \"1\") {\n        select.value = \"1\";\n        ChangeColorSelect(select);\n    }\n    else if (e.key == \"2\") {\n        select.value = \"2\";\n        ChangeColorSelect(select);\n    }\n    else if (e.key == \"3\") {\n        select.value = \"3\";\n        ChangeColorSelect(select);\n    }\n});\n\n\n//# sourceURL=webpack:///./code.ts?");

/***/ }),

/***/ "./src_js/ItemDeal.ts":
/*!****************************!*\
  !*** ./src_js/ItemDeal.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar ItemDeal = /** @class */ (function () {\n    /*\n      класс конструктор, собирает\n      нам объект todo с текстом,\n      цветом срочности, временем\n      */\n    function ItemDeal(text, color) {\n        this.text = text;\n        this.color = color;\n        this.stamp = new Date();\n    }\n    return ItemDeal;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (ItemDeal);\n\n\n//# sourceURL=webpack:///./src_js/ItemDeal.ts?");

/***/ }),

/***/ "./src_js/data.json":
/*!**************************!*\
  !*** ./src_js/data.json ***!
  \**************************/
/*! exports provided: motivation_array, important_color, animation_intro, animation_out, Month_Array, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"motivation_array\\\":[\\\"кто с утра встал, тот не выспался\\\",\\\"кто с утра встает, другим спать не дает\\\",\\\"в силикиновой долине недвижимость подешевела\\\",\\\"разработка сейчас выглядит так, что лучше даже не думать\\\",\\\"без труда не вытащишь даже рыбку без труда\\\"],\\\"important_color\\\":[\\\"has-background-danger  has-text-primary-light\\\",\\\"has-background-warning has-text-black-bis\\\",\\\"has-background-link has-text-primary-light\\\"],\\\"animation_intro\\\":[\\\"animate__fadeIn\\\",\\\"animate__zoomIn\\\",\\\"animate__flipInX\\\"],\\\"animation_out\\\":[\\\"animate__zoomOut\\\",\\\"animate__zoomOutLeft\\\",\\\"animate__flipOutX\\\"],\\\"Month_Array\\\":[\\\"Января\\\",\\\"Февраля\\\",\\\"Марта\\\",\\\"Апреля\\\",\\\"Мая\\\",\\\"Июня\\\",\\\"Июля\\\",\\\"Августа\\\",\\\"Сентября\\\",\\\"Октября\\\",\\\"Ноября\\\",\\\"Декабря\\\"]}\");\n\n//# sourceURL=webpack:///./src_js/data.json?");

/***/ }),

/***/ "./src_js/random_data.ts":
/*!*******************************!*\
  !*** ./src_js/random_data.ts ***!
  \*******************************/
/*! exports provided: getRandom, getUniq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandom\", function() { return getRandom; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUniq\", function() { return getUniq; });\nfunction getRandom(min, max) {\n    if (min === void 0) { min = 0; }\n    // получить случайное число от (min-0.5) до (max+0.5)\n    var rand = min - 0.5 + Math.random() * (max - min + 1);\n    return Math.round(rand);\n}\nfunction getUniq(arr) {\n    var pool = [];\n    function generatePool() {\n        for (var i = 0; i < arr.length; i++) {\n            pool[i] = i;\n        }\n        return pool;\n    }\n    pool = generatePool();\n    function getUniqRandom() {\n        if (pool.length == 0) {\n            pool = generatePool();\n            console.log(\"Перезапуск цепочки\");\n        }\n        var index = Math.floor(pool.length * Math.random());\n        var drawn = pool.splice(index, 1);\n        return drawn[0];\n    }\n    return getUniqRandom();\n}\n\n\n\n//# sourceURL=webpack:///./src_js/random_data.ts?");

/***/ })

/******/ });