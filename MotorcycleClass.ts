import Vehicle from './VehicleClass';

export default class Motorcycle extends Vehicle {


    constructor() {

        super();

        this.speedUp();
    }

    public speedUp(): void {

        this.velocity += 15;
    }
}