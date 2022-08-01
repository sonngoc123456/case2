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

    updateNameInfo(electricmeterID: number, newName: string): void {
        for (let i = 0; i < this.bills.length; i++) {
            if (this.bills[i].getCustomer().getElectricmeterID() === electricmeterID) {
                this.bills[i].getCustomer().setName(newName)
            }
        }
    }

    updateNumberHomeInfo(electricmeterID: number, newNumberHome: number): void {
        for (let i = 0; i < this.bills.length; i++) {
            if (this.bills[i].getCustomer().getElectricmeterID() === electricmeterID) {
                this.bills[i].getCustomer().setNumberHome(newNumberHome);
            }
        }
    }

    updateElectricMeterIDInfo(electricmeterID: number, newElectricMeterID: number): void {
        for (let i = 0; i < this.bills.length; i++) {
            if (this.bills[i].getCustomer().getElectricmeterID() === electricmeterID) {
                this.bills[i].getCustomer().setElectricmeterID(newElectricMeterID);
            }
        }
    }

    updateOldIndexInfo(electricmeterID: number, newOldIndex: number): void {
        for (let i = 0; i < this.bills.length; i++) {
            if (this.bills[i].getCustomer().getElectricmeterID() === electricmeterID) {
                this.bills[i].setOldIndex(newOldIndex);
            }
        }
    }

    updateNewIndexInfo(electricmeterID: number, newNewIndex: number): void {
        for (let i = 0; i < this.bills.length; i++) {
            if (this.bills[i].getCustomer().getElectricmeterID() === electricmeterID) {
                this.bills[i].setNewIndex(newNewIndex);
            }
        }
    }


    deleteBill(electricmeterID: number): void {
        let value = this.findIndexBill(electricmeterID)

        this.bills.splice(value, 1)
    }

    findIndexBill(electricmeterID: number): number {
        let value: number = -1;
        for (let i = 0; i < this.bills.length; i++) {
            if (this.bills[i].getCustomer().getElectricmeterID() == electricmeterID) {
                value = i;
                break;
            }
        }
        return value;
    }

    showBillFind(electricmeterID: number) {
        let list = []
        let value = this.findIndexBill(electricmeterID);
        list.push(this.bills[value])
        return list
    }

    AmountToPay(electricmeterID: number): number {
        let value = this.findIndexBill(electricmeterID)
        if (value === -1) {
            return -1
        } else {
            let moneys = 1;
            moneys = ((this.bills[value].getNewIndex()) - (this.bills[value].getOldIndex())) * 750
            return moneys
        }
    }

    softElectricMeterID() {
        for (let i = 0; i  < this.bills.length; i++) {
            for (let j = 0; j < this.bills.length - i -1; j++) {
                if(this.bills[j].getCustomer().getElectricmeterID() > this.bills[j + 1].getCustomer().getNumberHome()) {
                    this.swap(j);
                }
            }
        }
        return this.bills;
    }

    private swap(j: number) {
        let temp = this.bills[j];
        this.bills[j] = this.bills[j + 1];
        this.bills[j + 1] = temp;
    }


}