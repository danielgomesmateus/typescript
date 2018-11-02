export default class Car {

    private model: string;
    private numberDoors: number;
    private velocity: number = 0;

    constructor(model: string, numberDoors: number) {

        this.model       = model;
        this.numberDoors = numberDoors;

        this.speedUp();
    }

    public getModel(): string {

        return this.model;
    }

    public getNumberDoors(): number {

        return this.numberDoors;
    }

    public speedUp(): void {

        this.velocity = this.velocity + 10;
    }

    public break(): void {

        this.velocity = 0;
    }

    public currentSpeed(): number {

        return this.velocity;
    }
}