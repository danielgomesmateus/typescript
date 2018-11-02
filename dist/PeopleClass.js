"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var People = /** @class */ (function () {
    function People(name, favoriteCar, car) {
        this.name = '';
        this.favoriteCar = '';
        this.car = '';
        this.name = name;
        this.favoriteCar = favoriteCar;
        this.car = car;
    }
    People.prototype.getSayName = function () {
        return this.name;
    };
    People.prototype.getSayFavoriteCar = function () {
        return this.favoriteCar;
    };
    People.prototype.getCar = function () {
        return this.car;
    };
    People.prototype.buyCar = function () {
    };
    return People;
}());
exports.default = People;
