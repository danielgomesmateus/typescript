"use strict";
var Car = /** @class */ (function () {
    function Car() {
        this.model = '';
        this.numberDoors = 0;
        this.velocity = 0;
    }
    Car.prototype.speedUp = function () {
        this.velocity = this.velocity + 10;
    };
    Car.prototype.break = function () {
        this.velocity = 0;
    };
    Car.prototype.currentSpeed = function () {
        return this.velocity;
    };
    return Car;
}());
