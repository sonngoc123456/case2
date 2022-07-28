import {Customer} from "./Customer";

export class Bill {
    private _oldindex : number;
    private _newindex : number;
    private _customer : Customer

    constructor(oldindex: number, newindex: number, customer: Customer) {
        this._oldindex = oldindex;
        this._newindex = newindex;
        this._customer = customer;
    }


    get oldindex(): number {
        return this._oldindex;
    }

    set oldindex(value: number) {
        this._oldindex = value;
    }

    get newindex(): number {
        return this._newindex;
    }

    set newindex(value: number) {
        this._newindex = value;
    }

    get customer(): Customer {
        return this._customer;
    }

    set customer(value: Customer) {
        this._customer = value;
    }
}