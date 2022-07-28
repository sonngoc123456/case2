"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(name, numberhome, electricmeterID) {
        this._name = name;
        this._numberhome = numberhome;
        this._electricmeterID = electricmeterID;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get numberhome() {
        return this._numberhome;
    }
    set numberhome(value) {
        this._numberhome = value;
    }
    get electricmeterID() {
        return this._electricmeterID;
    }
    set electricmeterID(value) {
        this._electricmeterID = value;
    }
}
exports.Customer = Customer;
