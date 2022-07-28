import {Bill} from "./Bills";


export class BillsManager {
    private bills: Bill[] = [];

    constructor() {
    }

    getAllBills(): Bill[] {
        return this.bills
    }

    creatNewBill(bill: Bill): void {
        this.bills.push(bill)
    }

    updateBill(electricmeterID: number, bill: Bill): void {
        let value = this.findIndexBill(electricmeterID);
        this.bills[value] = bill;
    }

    deleteBill(electricmeterID: number): void {
        let value = this.findIndexBill(electricmeterID);
        this.bills.splice(value, 1)
    }

    findIndexBill(electricmeterID: number): number {
        let value: number = -1;
        for (let i = 0; i < this.bills.length; i++) {
            if (this.bills[i].customer.electricmeterID == electricmeterID) {
                value = i;
                break;
            }
        }
        return value;
    }

    showBillFind(electricmeterID: number) {
        let value = this.findIndexBill(electricmeterID);
        return this.bills[value]
    }

    AmountToPay(electricmeterID: number): number {
        let value = this.findIndexBill(electricmeterID)
        return this.money(value);
    }

    private money(value: number) {
        if (value === -1) {
            return -1
        } else {
            let moneys = 1;
            console.log(value)
            moneys = ((this.bills[value].newindex) - (this.bills[value].oldindex)) * 750
            return moneys
        }
    }
}