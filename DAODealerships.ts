import DAOInterface from './DAOInterface';
import Dealerships from './DealershipsClass';

class DAODealerships implements DAOInterface {

    nameTable:string = 'dealerships';

    public insert($object: Dealerships): boolean {

        return true;
    }

    public update($object: Dealerships): boolean {

        return true;
    }

    public delete($object: number): Dealerships {

        return new Dealerships('', []);
    }

    public select($object: number): Dealerships {

        return new Dealerships('', []);
    }

    public selectAll(): Array<any> {

        return [new Dealerships('', [])];
    }
}