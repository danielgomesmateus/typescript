export default class Dealerships {

    private address: string = '';
    private listCars: any;

    constructor(address: string, listCars: any) {
        
        this.address  = address;
        this.listCars = listCars;
    }

    public getAddress(): string {
        
        return this.address;
    }

    public getListCars(): any {

        return this.listCars;
    }
}