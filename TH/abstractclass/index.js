"use strict";
exports.__esModule = true;
var chicken_1 = require("./chicken");
var Tiger_1 = require("./Tiger");
var Apple_1 = require("./Apple");
var Orange_1 = require("./Orange");
console.log(" -----Animal------------");
var animals = []; // tao 1 mang animal rong
animals[0] = new Tiger_1.Tiger(); // khoi tao doi tuong tiger cho vao mang
animals[1] = new chicken_1.Chicken(); // khoi tao doi tuong chiken cho vao mang
animals.forEach(function (item, index) {
    console.log(item.makeSound());
    if (item instanceof chicken_1.Chicken) { // neu phan tu duyet qua co gia tri la chiken thi in them thuoc tinh howToeat
        console.log(item.howToEat());
    }
});
console.log("----Fruit-----");
var fruits = []; // tao mang trai cay rong
fruits[0] = new Apple_1.Apple(); // khoi tao doi tuong cho vao mang
fruits[1] = new Orange_1.Orange();
fruits.forEach(function (item, index) {
    console.log(item.howToEat());
});
