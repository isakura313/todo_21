'use strict'
//  const ItemDeal = require('./ItemDeal').default;
//  module.exports = ItemDeal;

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

    
let select = document.getElementById("#important");

let field = document.querySelector("input");

let button = document.querySelector(".button_plus");

let deals = document.getElementById("#deals");


//получает из объект localStorage данные по ключу
//ключ - время создания в Unix - времени
// значение - экземпляр класса ItemDeal

function (params) {
  
}