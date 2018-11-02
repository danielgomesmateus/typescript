import DealershipsInterface from './DealershipsInterface';
import Car from './CarClass';

export default class Dealerships implements DealershipsInterface {

    private address: string = '';
    private listCars: Array<Car>;

    constructor(address: string, listCars: Array<Car>) {
        
        this.address  = address;
        this.listCars = listCars;
    }

    public getAddress(): string {
        
        return this.address;
    }

    public getListCars(): Array<Car> {
        
        return this.listCars;
    }

    public operatingHours(): string {

        return 'Horário de funcionamento: 08:00 às 18:00';
    }
}