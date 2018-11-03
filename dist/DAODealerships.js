"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DealershipsClass_1 = __importDefault(require("./DealershipsClass"));
var DAODealerships = /** @class */ (function () {
    function DAODealerships() {
        this.nameTable = 'dealerships';
    }
    DAODealerships.prototype.insert = function ($object) {
        return true;
    };
    DAODealerships.prototype.update = function ($object) {
        return true;
    };
    DAODealerships.prototype.delete = function ($object) {
        return new DealershipsClass_1.default('', []);
    };
    DAODealerships.prototype.select = function ($object) {
        return new DealershipsClass_1.default('', []);
    };
    DAODealerships.prototype.selectAll = function () {
        return [new DealershipsClass_1.default('', [])];
    };
    return DAODealerships;
}());
