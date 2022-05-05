"use strict";
exports.__esModule = true;
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this._radius = radius;
    }
    Circle.prototype.getRadius = function () {
        return this._radius;
    };
    Circle.prototype.setRadius = function (radius) {
        this._radius = radius;
    };
    Circle.prototype.toString = function () {
        return "a circle with radius = ".concat(this._radius);
    };
    return Circle;
}());
exports.Circle = Circle;
