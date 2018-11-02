// Carrega as classes
import Car from './CarClass';
import Dealerships from './DealershipsClass';
import People from './PeopleClass';

(function(){

    'use strict';

    let gol      = new Car('Gol', 4);
    let veloster = new Car('Veloster', 3);
    let uno      = new Car('Uno', 2);
    let parati   = new Car('Parati', 4);
    let fusion   = new Car('Fusion', 4);

    let listCars: Array<Car> = [gol, veloster, uno, parati, fusion];

    let dealerships = new Dealerships('Rua Ouro Negro, nº 250, Salvador-PI', listCars);

    let client = new People('Lucas', 'FUSION', 'Veloster');

    console.log(`Carro favorito do cliente: ${client.getSayFavoriteCar()}`);
    console.log('Buscando carro na concessionária...');

    dealerships.getListCars().map((element: Car) => {

        if(element.getModel().toLowerCase() == client.getSayFavoriteCar().toLowerCase()) {

            console.log('Carro encontrado! Fazendo o pedido...');
            client.buyCar();
            console.log('Carro comprado com sucesso!');
            return;
        }
    });
})();