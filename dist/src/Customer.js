"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(name, numberhome, electricmeterID) {
        this._name = name;
        this._numberhome = numberhome;
        this._electricmeterID = electricmeterID;
    }
    getName() {
        return this._name;
    }
    setName(value) {
        this._name = value;
    }
    getNumberHome() {
        return this._numberhome;
    }
    setNumberHome(value) {
        this._numberhome = value;
    }
    getElectricmeterID() {
        return this._electricmeterID;
    }
    setElectricmeterID(value) {
        this._electricmeterID = value;
    }
}
exports.Customer = Customer;
