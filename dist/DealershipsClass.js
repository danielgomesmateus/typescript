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
    Dealerships.prototype.operatingHours = function () {
        return 'Horário de funcionamento: 08:00 às 18:00';
    };
    return Dealerships;
}());
exports.default = Dealerships;
