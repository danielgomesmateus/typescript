export default class Vehicle {

    protected model: string = '';
    protected velocity: number = 0;

    public getModel(): string {

        return this.model;
    }

    public speedUp(): void {

        this.velocity += 10;
    }

    public break(): void {

        this.velocity = 0;
    }

    public currentSpeed(): number {

        return this.velocity;
    }
}