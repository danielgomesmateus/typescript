class Car {

    private model: string       = '';
    private numberDoors: number = 0;
    private velocity: number    = 0;

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