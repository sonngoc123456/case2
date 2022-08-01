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
const callMethod_1 = require("./src/callMethod");
const rl = __importStar(require("readline-sync"));
const Menu_1 = require("./src/Menu");
const Enum_1 = require("./src/Enum");
const Enum_2 = require("./src/Enum");
let menu = new Menu_1.Menu();
let callmethod = new callMethod_1.CallMethod();
function login() {
    console.log("=====Đăng Nhập Hệ Thống=====");
    let email = rl.question('Nhap Email : ');
    let password = +rl.question('Nhap Password : ');
    if (email == "admin@gmail.com" && password == 123456) {
        menuManager();
    }
    else {
        console.log("---Nhap sai tài khoản hoặc passwod----");
        login();
    }
}
login();
function menuManager() {
    let choice = -1;
    do {
        menu.Manager();
        choice = +rl.question('Nhập lựa chọn của bạn:');
        switch (choice) {
            case Enum_1.BillChoice.CREATE_BILL:
                callmethod.creatNewBill();
                break;
            case Enum_1.BillChoice.SHOW_LIST_BILL:
                callmethod.showListBill();
                break;
            case Enum_1.BillChoice.UPDATE_BILL:
                menuUpdate();
                break;
            case Enum_1.BillChoice.DELETE_BILL:
                callmethod.deleteBill();
                break;
            case Enum_1.BillChoice.FIND_BILL:
                callmethod.showBillFind();
                break;
            case Enum_1.BillChoice.SOFT_BILL:
                callmethod.softBills();
                break;
            case Enum_1.BillChoice.Amout:
                callmethod.showAmout();
                break;
            case Enum_1.BillChoice.EXIT:
                break;
            default:
                console.log('-----Nhập lại lựa chọn------');
        }
    } while (choice != Enum_1.BillChoice.EXIT);
}
menuManager();
function menuUpdate() {
    let updatechoice = -1;
    do {
        menu.Update();
        updatechoice = +rl.question('Nhập lựa chọn của bạn:');
        switch (updatechoice) {
            case Enum_2.UpdateChoice.UPDATE_ALL_INFO_BILL:
                callmethod.updateBill();
                break;
            case Enum_2.UpdateChoice.UPDATE_NAME:
                callmethod.updateNewName();
                break;
            case Enum_2.UpdateChoice.UPDATE_HOMENUMBER:
                callmethod.updateNewHomeNumber();
                break;
            case Enum_2.UpdateChoice.UPDATE_ELECTRICMETERID:
                callmethod.updateNewElectricMeterID();
                break;
            case Enum_2.UpdateChoice.UPDATE_OLDINDEX:
                callmethod.updateOldIndex();
                break;
            case Enum_2.UpdateChoice.UPDATE_NEWINDEX:
                callmethod.updateNewIndex();
                break;
            case Enum_2.UpdateChoice.EXIT:
                break;
            default:
                console.log('-----Nhập lại lựa chọn------');
        }
    } while (updatechoice != Enum_2.UpdateChoice.EXIT);
}
