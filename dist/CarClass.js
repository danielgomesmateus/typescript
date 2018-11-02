"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car = /** @class */ (function () {
    function Car(model, numberDoors) {
        this.velocity = 0;
        this.model = model;
        this.numberDoors = numberDoors;
        this.speedUp();
    }
    Car.prototype.getModel = function () {
        return this.model;
    };
    Car.prototype.getNumberDoors = function () {
        return this.numberDoors;
    };
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
exports.default = Car;
