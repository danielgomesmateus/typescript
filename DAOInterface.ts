export default interface DAOInterface {

    nameTable: string;

    insert(object: any): boolean;
    update(object: any): boolean;
    delete(object: number): any;
    select(object: number): any;
    selectAll(): Array<any>;
}