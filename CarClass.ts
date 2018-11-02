import Vehicle from './VehicleClass';

export default class Car extends Vehicle {

    private numberDoors: number;

    constructor(model: string, numberDoors: number) {

        super();

        this.model = model;
        this.numberDoors = numberDoors;
        
        this.speedUp();
    }

    public getNumberDoors(): number {

        return this.numberDoors;
    }
}