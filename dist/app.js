"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CarClass_1 = __importDefault(require("./CarClass"));
var MotorcycleClass_1 = __importDefault(require("./MotorcycleClass"));
var DealershipsClass_1 = __importDefault(require("./DealershipsClass"));
var PeopleClass_1 = __importDefault(require("./PeopleClass"));
(function () {
    'use strict';
    var gol = new CarClass_1.default('Gol', 4);
    var veloster = new CarClass_1.default('Veloster', 3);
    var uno = new CarClass_1.default('Uno', 2);
    var parati = new CarClass_1.default('Parati', 4);
    var fusion = new CarClass_1.default('Fusion', 4);
    var listCars = [gol, veloster, uno, parati, fusion];
    var dealerships = new DealershipsClass_1.default('Rua Ouro Negro, nº 250, Salvador-PI', listCars);
    var client = new PeopleClass_1.default('Lucas', 'FUSION', 'Veloster');
    console.log("Carro favorito do cliente: " + client.getSayFavoriteCar());
    console.log('Buscando carro na concessionária...');
    dealerships.getListCars().map(function (element) {
        if (element.getModel().toLowerCase() == client.getSayFavoriteCar().toLowerCase()) {
            console.log('Carro encontrado! Fazendo o pedido...');
            client.buyCar();
            console.log('Carro comprado com sucesso!');
            console.log('Agende para retirada do veículo.');
            console.log(dealerships.operatingHours());
            return;
        }
    });
    var motorcycle = new MotorcycleClass_1.default();
    console.log("Velocidade da moto: " + motorcycle.currentSpeed());
})();
