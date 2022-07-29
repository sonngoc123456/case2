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
var UpdateChoice;
(function (UpdateChoice) {
    UpdateChoice[UpdateChoice["UPDATE_ALL_INFO_BILL"] = 1] = "UPDATE_ALL_INFO_BILL";
    UpdateChoice[UpdateChoice["UPDATE_NAME"] = 2] = "UPDATE_NAME";
    UpdateChoice[UpdateChoice["UPDATE_HOMENUMBER"] = 3] = "UPDATE_HOMENUMBER";
    UpdateChoice[UpdateChoice["UPDATE_ELECTRICMETERID"] = 4] = "UPDATE_ELECTRICMETERID";
    UpdateChoice[UpdateChoice["UPDATE_OLDINDEX"] = 5] = "UPDATE_OLDINDEX";
    UpdateChoice[UpdateChoice["UPDATE_NEWINDEX"] = 6] = "UPDATE_NEWINDEX";
    UpdateChoice[UpdateChoice["EXIT"] = 0] = "EXIT";
})(UpdateChoice || (UpdateChoice = {}));
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
    displayList(bills);
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
function updateNewName() {
    console.log('---Cập nhật tên khách hàng trên hóa đơn---');
    let electricmeterID = +rl.question('Nhập ID công tơ điện:');
    let newNameCustomer = rl.question('Nhập tên mới của khách hàng:');
    billsManager.updateNameInfo(electricmeterID, newNameCustomer);
    billsManager.getAllBills();
}
function updateNewHomeNumber() {
    console.log('---Cập nhật tên khách hàng trên hóa đơn---');
    let electricmeterID = +rl.question('Nhập ID công tơ điện:');
    let newHomeNumberCustomer = +rl.question('Nhập số nhà mới của khách hàng:');
    billsManager.updateNumberHomeInfo(electricmeterID, newHomeNumberCustomer);
    billsManager.getAllBills();
}
function updateNewElectricMeterID() {
    console.log('---Cập nhật tên khách hàng trên hóa đơn---');
    let electricmeterID = +rl.question('Nhập ID công tơ điện:');
    let newNewElectricMeterIDCustomer = +rl.question('Nhập số nhà mới của khách hàng:');
    billsManager.updateElectricMeterIDInfo(electricmeterID, newNewElectricMeterIDCustomer);
    billsManager.getAllBills();
}
function updateOldIndex() {
    console.log('---Cập nhật tên khách hàng trên hóa đơn---');
    let electricmeterID = +rl.question('Nhập ID công tơ điện:');
    let OldIndexNew = +rl.question('Nhập số nhà mới của khách hàng:');
    billsManager.updateOldIndexInfo(electricmeterID, OldIndexNew);
    billsManager.getAllBills();
}
function updateNewIndex() {
    console.log('---Cập nhật tên khách hàng trên hóa đơn---');
    let electricmeterID = +rl.question('Nhập ID công tơ điện:');
    let NewIndex = +rl.question('Nhập số nhà mới của khách hàng:');
    billsManager.updateNewIndexInfo(electricmeterID, NewIndex);
    billsManager.getAllBills();
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
    displayList(bills);
}
function displayList(bills) {
    let container = [];
    let data;
    for (let i = 0; i < bills.length; i++) {
        data = {
            CustomerName: bills[i].getCustomer().getName(),
            HomeNumber: bills[i].getCustomer().getNumberHome(),
            ElectricMeterID: bills[i].getCustomer().getElectricmeterID(),
            OldIndex: bills[i].getOldIndex(),
            NewIndex: bills[i].getNewIndex(),
        };
        container.push(data);
    }
    console.table(container);
}
function softBills() {
    console.log('-----Sắp xếp hóa đơn-----');
    let bills = billsManager.softElectricMeterID();
    displayList(bills);
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
function Update() {
    console.log('---Chỉnh sửa thông tin trên hóa đơn---');
    console.log('1. Chỉnh sửa toàn bộ thông tin');
    console.log('2. Chỉnh sửa tên khách hàng');
    console.log('3. Chỉnh sửa số nhà khách hàng');
    console.log('4. Chỉnh sửa ID công tơ điện');
    console.log('5. Chỉnh sửa chỉ số điện cũ');
    console.log('6. Chỉnh sửa chỉ số điện mới');
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
            let updatechoice = -1;
            do {
                Update();
                updatechoice = +rl.question('Nhập lựa chọn của bạn:');
                switch (updatechoice) {
                    case UpdateChoice.UPDATE_ALL_INFO_BILL:
                        updateBill();
                        break;
                    case UpdateChoice.UPDATE_NAME:
                        updateNewName();
                        break;
                    case UpdateChoice.UPDATE_HOMENUMBER:
                        updateNewHomeNumber();
                        break;
                    case UpdateChoice.UPDATE_ELECTRICMETERID:
                        updateNewElectricMeterID();
                        break;
                    case UpdateChoice.UPDATE_OLDINDEX:
                        updateOldIndex();
                        break;
                    case UpdateChoice.UPDATE_NEWINDEX:
                        updateNewIndex();
                        break;
                    default:
                        console.log('-----Nhập lại lựa chọn------');
                }
            } while (updatechoice != UpdateChoice.EXIT);
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
