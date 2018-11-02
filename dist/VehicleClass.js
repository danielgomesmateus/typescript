"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vehicle = /** @class */ (function () {
    function Vehicle() {
        this.model = '';
        this.velocity = 0;
    }
    Vehicle.prototype.getModel = function () {
        return this.model;
    };
    Vehicle.prototype.speedUp = function () {
        this.velocity = this.velocity + 10;
    };
    Vehicle.prototype.break = function () {
        this.velocity = 0;
    };
    Vehicle.prototype.currentSpeed = function () {
        return this.velocity;
    };
    return Vehicle;
}());
exports.default = Vehicle;
