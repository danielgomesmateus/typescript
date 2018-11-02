export default class People {

    private name: string        = '';
    private favoriteCar: string = ''
    private car: string         = ''; 

    constructor(name: string, favoriteCar: string, car: string) {

        this.name        = name;
        this.favoriteCar = favoriteCar;
        this.car         = car;
    }

    public getSayName(): string {

        return this.name;
    }

    public getSayFavoriteCar(): string {

        return this.favoriteCar;
    }

    public getCar(): string {

        return this.car;
    }

    public buyCar(): boolean {

        return true;
    }
}