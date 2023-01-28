export default class Coupon {

    constructor(private _name:string, private _discount:number) {}

    public get discount(): number {
        return this._discount;
    }

    public get name(): string {
        return this._name;
    }

}