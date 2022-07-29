"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillsManager = void 0;
class BillsManager {
    constructor() {
        this.bills = [];
    }
    getAllBills() {
        return this.bills;
    }
    creatNewBill(bill) {
        this.bills.push(bill);
    }
    updateBill(electricmeterID, bill) {
        let value = this.findIndexBill(electricmeterID);
        this.bills[value] = bill;
    }
    deleteBill(electricmeterID) {
        let value = this.findIndexBill(electricmeterID);
        this.bills.splice(value, 1);
    }
    findIndexBill(electricmeterID) {
        let value = -1;
        for (let i = 0; i < this.bills.length; i++) {
            if (this.bills[i].customer.electricmeterID == electricmeterID) {
                value = i;
                break;
            }
        }
        return value;
    }
    showBillFind(electricmeterID) {
        let list = [];
        let value = this.findIndexBill(electricmeterID);
        list.push(this.bills[value]);
        return list;
    }
    AmountToPay(electricmeterID) {
        let value = this.findIndexBill(electricmeterID);
        return this.money(value);
    }
    softElectricMeterID() {
        for (let i = 0; i < this.bills.length; i++) {
            for (let j = 0; j < this.bills.length - i - 1; j++) {
                if (this.bills[j].customer.electricmeterID > this.bills[j + 1].customer.electricmeterID) {
                    this.swap(j);
                }
            }
        }
        return this.bills;
    }
    swap(j) {
        let temp = this.bills[j];
        this.bills[j] = this.bills[j + 1];
        this.bills[j + 1] = temp;
    }
    money(value) {
        if (value === -1) {
            return -1;
        }
        else {
            let moneys = 1;
            console.log(value);
            moneys = ((this.bills[value].newindex) - (this.bills[value].oldindex)) * 750;
            return moneys;
        }
    }
}
exports.BillsManager = BillsManager;
