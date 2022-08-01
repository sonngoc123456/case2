"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallMethod = void 0;
const rl = __importStar(require("readline-sync"));
const Customer_1 = require("./Customer");
const Bills_1 = require("./Bills");
const BillsManager_1 = require("./BillsManager");
let billsManager = new BillsManager_1.BillsManager();
let custumer1 = new Customer_1.Customer("son", 223323, "Pho vong", 2);
let bill1 = new Bills_1.Bill(223, 323, custumer1);
let custumer2 = new Customer_1.Customer("nam", 2, "Pho lang", 8);
let bill2 = new Bills_1.Bill(323, 523, custumer2);
billsManager.creatNewBill(bill2);
billsManager.creatNewBill(bill1);
class CallMethod {
    inputCustomer() {
        let name = rl.question('Nhập tên khách hàng:');
        let homenumber = +rl.question('Nhập số nhà :');
        let address = rl.question('Nhập địa chỉ :');
        let electricmeterID = +rl.question('Nhập ID công tơ điện :');
        return new Customer_1.Customer(name, homenumber, address, electricmeterID);
    }
    inputBill() {
        let customer = this.inputCustomer();
        let oldindex = +rl.question('Nhập chỉ số điện cũ:');
        let newindex = +rl.question('Nhập chỉ số điện mới :');
        return new Bills_1.Bill(oldindex, newindex, customer);
    }
    showListBill() {
        console.log('-----Danh sách hóa đơn-------');
        let bills = billsManager.getAllBills();
        this.displayList(bills);
    }
    creatNewBill() {
        console.log('-----Thêm hóa đơn mới-----');
        let bill = this.inputBill();
        billsManager.creatNewBill(bill);
    }
    updateBill() {
        console.log('---Cập nhật thông tin hóa đơn---');
        let electricmeterID = +rl.question('Nhập ID công tơ điện:');
        let bill = this.inputBill();
        billsManager.updateBill(electricmeterID, bill);
    }
    updateNewName() {
        console.log('---Cập nhật tên khách hàng trên hóa đơn---');
        let electricmeterID = +rl.question('Nhập ID công tơ điện:');
        let newNameCustomer = rl.question('Nhập tên mới của khách hàng:');
        billsManager.updateNameInfo(electricmeterID, newNameCustomer);
        billsManager.getAllBills();
    }
    updateNewHomeNumber() {
        console.log('---Cập nhật tên khách hàng trên hóa đơn---');
        let electricmeterID = +rl.question('Nhập ID công tơ điện:');
        let newHomeNumberCustomer = +rl.question('Nhập số nhà mới của khách hàng:');
        billsManager.updateNumberHomeInfo(electricmeterID, newHomeNumberCustomer);
        billsManager.getAllBills();
    }
    updateNewElectricMeterID() {
        console.log('---Cập nhật tên khách hàng trên hóa đơn---');
        let electricmeterID = +rl.question('Nhập ID công tơ điện:');
        let newNewElectricMeterIDCustomer = +rl.question('Nhập số nhà mới của khách hàng:');
        billsManager.updateElectricMeterIDInfo(electricmeterID, newNewElectricMeterIDCustomer);
        billsManager.getAllBills();
    }
    updateOldIndex() {
        console.log('---Cập nhật tên khách hàng trên hóa đơn---');
        let electricmeterID = +rl.question('Nhập ID công tơ điện:');
        let OldIndexNew = +rl.question('Nhập số nhà mới của khách hàng:');
        billsManager.updateOldIndexInfo(electricmeterID, OldIndexNew);
        billsManager.getAllBills();
    }
    updateNewIndex() {
        console.log('---Cập nhật tên khách hàng trên hóa đơn---');
        let electricmeterID = +rl.question('Nhập ID công tơ điện:');
        let NewIndex = +rl.question('Nhập số nhà mới của khách hàng:');
        billsManager.updateNewIndexInfo(electricmeterID, NewIndex);
        billsManager.getAllBills();
    }
    deleteBill() {
        console.log('---Xóa thông tin hóa đơn---');
        let electricmeterID = +rl.question('Nhập ID công tơ điện :');
        billsManager.deleteBill(electricmeterID);
    }
    showBillFind() {
        console.log('---Tìm kiếm hóa đơn---');
        let electricmeterID = +rl.question('Nhập ID công tơ điện :');
        let bills = billsManager.showBillFind(electricmeterID);
        this.displayList(bills);
    }
    showAmout() {
        console.log('---Tiền---');
        let electricmeterID = +rl.question('Nhập ID công tơ điện :');
        let bills = billsManager.showBillFind(electricmeterID);
        let container = [];
        let data;
        for (let i = 0; i < bills.length; i++) {
            data = {
                CustomerName: bills[i].getCustomer().getName(),
                HomeNumber: bills[i].getCustomer().getNumberHome(),
                Address: bills[i].getCustomer().getAddress(),
                ElectricMeterID: bills[i].getCustomer().getElectricmeterID(),
                OldIndex: bills[i].getOldIndex(),
                NewIndex: bills[i].getNewIndex(),
                Amount: billsManager.AmountToPay(electricmeterID)
            };
            container.push(data);
        }
        console.table(container);
    }
    displayList(bills) {
        let container = [];
        let data;
        for (let i = 0; i < bills.length; i++) {
            data = {
                CustomerName: bills[i].getCustomer().getName(),
                HomeNumber: bills[i].getCustomer().getNumberHome(),
                Address: bills[i].getCustomer().getAddress(),
                ElectricMeterID: bills[i].getCustomer().getElectricmeterID(),
                OldIndex: bills[i].getOldIndex(),
                NewIndex: bills[i].getNewIndex(),
            };
            container.push(data);
        }
        console.table(container);
    }
    softBills() {
        console.log('-----Sắp xếp hóa đơn-----');
        let bills = billsManager.softElectricMeterID();
        this.displayList(bills);
    }
}
exports.CallMethod = CallMethod;
