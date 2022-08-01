import {CallMethod} from "./src/callMethod";
import * as rl from 'readline-sync';
import {Menu} from "./src/Menu";
import {BillChoice} from "./src/Enum";
import {UpdateChoice} from "./src/Enum";

let menu = new Menu();

let callmethod = new CallMethod()
function login() {
    console.log("=====Đăng Nhập Hệ Thống=====")
    let email = rl.question('Nhap Email : ')
    let password = +rl.question('Nhap Password : ')
    if (email == "admin@gmail.com" && password == 123456) {
        menuManager();
    } else {
        console.log("---Nhap sai tài khoản hoặc passwod----")
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
            case BillChoice.CREATE_BILL:
                callmethod.creatNewBill();
                break;

            case BillChoice.SHOW_LIST_BILL:
                callmethod.showListBill();
                break;

            case BillChoice.UPDATE_BILL:
                menuUpdate()
                break;

            case BillChoice.DELETE_BILL:
                callmethod.deleteBill();
                break;

            case BillChoice.FIND_BILL:
                callmethod.showBillFind();
                break;

            case BillChoice.SOFT_BILL:
                callmethod.softBills();
                break;

            case BillChoice.Amout:
                callmethod.showAmout();
                break;

            case BillChoice.EXIT:
                break;

            default :
                console.log('-----Nhập lại lựa chọn------')
        }
    } while (choice != BillChoice.EXIT);
}
menuManager();

function menuUpdate() {
    let updatechoice = -1;
    do {
        menu.Update();
        updatechoice = +rl.question('Nhập lựa chọn của bạn:');
        switch (updatechoice) {
            case UpdateChoice.UPDATE_ALL_INFO_BILL:
                callmethod.updateBill();
                break;

            case UpdateChoice.UPDATE_NAME:
                callmethod.updateNewName();
                break;

            case UpdateChoice.UPDATE_HOMENUMBER:
                callmethod.updateNewHomeNumber();
                break;

            case UpdateChoice.UPDATE_ELECTRICMETERID:
                callmethod.updateNewElectricMeterID();
                break;

            case UpdateChoice.UPDATE_OLDINDEX:
                callmethod.updateOldIndex();
                break;

            case UpdateChoice.UPDATE_NEWINDEX:
                callmethod.updateNewIndex();
                break;

            case UpdateChoice.EXIT :
                break;

            default :
                console.log('-----Nhập lại lựa chọn------')
        }
    } while (updatechoice != UpdateChoice.EXIT);
}

