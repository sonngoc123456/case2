import {Customer} from "./Customer";

export class Bill {
    private _oldindex : number;
    private _newindex : number;
    private _customer : Customer

    constructor(oldindex: number,
                newindex: number,
                customer: Customer) {
        this._oldindex = oldindex;
        this._newindex = newindex;
        this._customer = customer;
    }

    getOldIndex(): number {
        return this._oldindex;
    }

    setOldIndex(value: number) {
        this._oldindex = value;
    }

    getNewIndex(): number {
        return this._newindex;
    }

    setNewIndex(value: number) {
        this._newindex = value;
    }

    getCustomer(): Customer {
        return this._customer;
    }

    setCustomer(value: Customer) {
        this._customer = value;
    }
}