"use strict";
exports.__esModule = true;
var Circle_1 = require("./Circle");
var Square_1 = require("./Square");
var Rectangle_1 = require("./Rectangle");
var Cylinder_1 = require("./Cylinder");
var Shapes = [];
Shapes[0] = new Circle_1.Circle("tron", 8);
Shapes[1] = new Square_1.Square("vuong", 9);
Shapes[2] = new Rectangle_1.Rectangle(8, 4, "tron");
Shapes[3] = new Cylinder_1.Cylinder("tru", 8, 9);
Shapes.forEach(function (item, index) {
    console.log(item.calculateArea());
    if (item instanceof Square_1.Square) {
        console.log(item.howToColor());
    }
});
