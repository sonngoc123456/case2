"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(name, numberhome, address, electricmeterID) {
        this._name = name;
        this._numberhome = numberhome;
        this._address = address;
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
    getAddress() {
        return this._address;
    }
    setAddress(value) {
        this._address = value;
    }
}
exports.Customer = Customer;
