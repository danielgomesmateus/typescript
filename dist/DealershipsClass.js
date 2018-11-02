"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dealerships = /** @class */ (function () {
    function Dealerships(address, listCars) {
        this.address = '';
        this.address = address;
        this.listCars = listCars;
    }
    Dealerships.prototype.getAddress = function () {
        return this.address;
    };
    Dealerships.prototype.getListCars = function () {
        return this.listCars;
    };
    return Dealerships;
}());
exports.default = Dealerships;
