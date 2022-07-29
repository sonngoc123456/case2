"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bill = void 0;
class Bill {
    constructor(oldindex, newindex, customer) {
        this._oldindex = oldindex;
        this._newindex = newindex;
        this._customer = customer;
    }
    getOldIndex() {
        return this._oldindex;
    }
    setOldIndex(value) {
        this._oldindex = value;
    }
    getNewIndex() {
        return this._newindex;
    }
    setNewIndex(value) {
        this._newindex = value;
    }
    getCustomer() {
        return this._customer;
    }
    setCustomer(value) {
        this._customer = value;
    }
}
exports.Bill = Bill;
