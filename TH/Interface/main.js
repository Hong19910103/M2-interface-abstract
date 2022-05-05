"use strict";
exports.__esModule = true;
var ComparableCircle_1 = require("./ComparableCircle");
var circles = [];
circles[0] = new ComparableCircle_1.ComparableCircle(6);
circles[1] = new ComparableCircle_1.ComparableCircle(12);
circles[2] = new ComparableCircle_1.ComparableCircle(4);
circles[3] = new ComparableCircle_1.ComparableCircle(20);
var result = circles[0].compareTo(circles[2]);
if (result === 1) {
    console.log("the current circle is larger");
}
else {
    console.log("the current circle smaller");
}
