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
const BillsManager_1 = require("./src/BillsManager");
const Customer_1 = require("./src/Customer");
const Bills_1 = require("./src/Bills");
const rl = __importStar(require("readline-sync"));
let choice = -1;
var BillChoice;
(function (BillChoice) {
    BillChoice[BillChoice["CREATE_BILL"] = 1] = "CREATE_BILL";
    BillChoice[BillChoice["SHOW_LIST_BILL"] = 2] = "SHOW_LIST_BILL";
    BillChoice[BillChoice["UPDATE_BILL"] = 3] = "UPDATE_BILL";
    BillChoice[BillChoice["DELETE_BILL"] = 4] = "DELETE_BILL";
    BillChoice[BillChoice["FIND_BILL"] = 5] = "FIND_BILL";
    BillChoice[BillChoice["SOFT_BILL"] = 6] = "SOFT_BILL";
    BillChoice[BillChoice["EXIT"] = 0] = "EXIT";
})(BillChoice || (BillChoice = {}));
let billsManager = new BillsManager_1.BillsManager();
function inputCustomer() {
    let name = rl.question('Nhập tên khách hàng:');
    let homenumber = +rl.question('Nhập số nhà :');
    let electricmeterID = +rl.question('Nhập ID công tơ điện :');
    return new Customer_1.Customer(name, homenumber, electricmeterID);
}
function inputBill() {
    let customer = inputCustomer();
    let oldindex = +rl.question('Nhập chỉ số điện cũ:');
    let newindex = +rl.question('Nhập chỉ số điện mới :');
    return new Bills_1.Bill(oldindex, newindex, customer);
}
function showListBill() {
    console.log('-----Danh sách hóa đơn-------');
    let bills = billsManager.getAllBills();
    let container = [];
    let data;
    for (let i = 0; i < bills.length; i++) {
        data = {
            CustomerName: bills[i].customer.name,
            HomeNumber: bills[i].customer.numberhome,
            ElectricMeterID: bills[i].customer.electricmeterID,
            OldIndex: bills[i].oldindex,
            NewIndex: bills[i].newindex,
        };
        container.push(data);
    }
    console.table(container);
}
function creatNewBill() {
    console.log('-----Thêm hóa đơn mới-----');
    let bill = inputBill();
    billsManager.creatNewBill(bill);
}
function updateBill() {
    console.log('---Cập nhật thông tin hóa đơn---');
    let electricmeterID = +rl.question('Nhập ID công tơ điện:');
    let bill = inputBill();
    billsManager.updateBill(electricmeterID, bill);
}
function deleteBill() {
    console.log('---Xóa thông tin hóa đơn---');
    let electricmeterID = +rl.question('Nhập ID công tơ điện :');
    billsManager.deleteBill(electricmeterID);
}
function showBillFind() {
    console.log('---Tìm kiếm hóa đơn---');
    let electricmeterID = +rl.question('Nhập ID công tơ điện :');
    let bills = billsManager.showBillFind(electricmeterID);
    let container = [];
    let data;
    for (let i = 0; i < bills.length; i++) {
        data = {
            CustomerName: bills[i].customer.name,
            HomeNumber: bills[i].customer.numberhome,
            ElectricMeterID: bills[i].customer.electricmeterID,
            OldIndex: bills[i].oldindex,
            NewIndex: bills[i].newindex,
        };
        container.push(data);
    }
    console.table(container);
}
function softBills() {
    console.log('-----Sắp xếp hóa đơn-----');
    let bills = billsManager.softElectricMeterID();
    let container = [];
    let data;
    for (let i = 0; i < bills.length; i++) {
        data = {
            CustomerName: bills[i].customer.name,
            HomeNumber: bills[i].customer.numberhome,
            ElectricMeterID: bills[i].customer.electricmeterID,
            OldIndex: bills[i].oldindex,
            NewIndex: bills[i].newindex,
        };
        container.push(data);
    }
    console.table(container);
}
function menu() {
    console.log('---Quản lý hóa đơn tiền điện---');
    console.log('1. Tạo hóa đơn mới');
    console.log('2. Hiển thị tất cả hóa đơn');
    console.log('3. Chỉnh sửa hóa đơn');
    console.log('4. Xóa hóa đơn');
    console.log('5. Tìm kiếm hóa đơn');
    console.log('6. Sắp xếp hóa đơn');
    console.log('0. Thoát chương trình');
}
do {
    menu();
    choice = +rl.question('Nhập lựa chọn của bạn:');
    switch (choice) {
        case BillChoice.CREATE_BILL:
            creatNewBill();
            break;
        case BillChoice.SHOW_LIST_BILL:
            showListBill();
            break;
        case BillChoice.UPDATE_BILL:
            updateBill();
            break;
        case BillChoice.DELETE_BILL:
            deleteBill();
            break;
        case BillChoice.FIND_BILL:
            showBillFind();
            break;
        case BillChoice.SOFT_BILL:
            softBills();
            break;
        default:
            console.log('-----Nhập lại lựa chọn------');
    }
} while (choice != BillChoice.EXIT);
