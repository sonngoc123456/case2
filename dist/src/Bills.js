"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bill = void 0;
class Bill {
    constructor(oldindex, newindex, customer) {
        this._oldindex = oldindex;
        this._newindex = newindex;
        this._customer = customer;
    }
    get oldindex() {
        return this._oldindex;
    }
    set oldindex(value) {
        this._oldindex = value;
    }
    get newindex() {
        return this._newindex;
    }
    set newindex(value) {
        this._newindex = value;
    }
    get customer() {
        return this._customer;
    }
    set customer(value) {
        this._customer = value;
    }
}
exports.Bill = Bill;
