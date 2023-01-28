export default class Product {

    constructor(private _price:number, private _description: string) {}

    get price(): number {
        return this._price
    }

    get description(): string {
        return this._description;
    }

}