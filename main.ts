import {BillsManager} from "./src/BillsManager";
import {Customer} from "./src/Customer";
import {Bill} from "./src/Bills";
import * as rl from 'readline-sync';


let choice = -1;

enum BillChoice {
    CREATE_BILL = 1,
    SHOW_LIST_BILL = 2,
    UPDATE_BILL = 3,
    DELETE_BILL = 4,
    FIND_BILL = 5,
    SOFT_BILL = 6,
    EXIT = 0
}

enum UpdateChoice {
    UPDATE_ALL_INFO_BILL = 1,
    UPDATE_NAME = 2,
    UPDATE_HOMENUMBER = 3,
    UPDATE_ELECTRICMETERID = 4,
    UPDATE_OLDINDEX = 5,
    UPDATE_NEWINDEX = 6,
    EXIT = 0
}

let billsManager = new BillsManager();

function inputCustomer() {
    let name = rl.question('Nhập tên khách hàng:');
    let homenumber = +rl.question('Nhập số nhà :');
    let electricmeterID = +rl.question('Nhập ID công tơ điện :');
    return new Customer(name,homenumber,electricmeterID);
}

function inputBill(): Bill {
    let customer = inputCustomer();
    let oldindex = +rl.question('Nhập chỉ số điện cũ:');
    let newindex = +rl.question('Nhập chỉ số điện mới :');
    return new Bill(oldindex,newindex,customer);
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
    billsManager.updateNameInfo(electricmeterID,newNameCustomer);
    billsManager.getAllBills();
}

function updateNewHomeNumber() {
    console.log('---Cập nhật tên khách hàng trên hóa đơn---');
    let electricmeterID = +rl.question('Nhập ID công tơ điện:');
    let newHomeNumberCustomer = +rl.question('Nhập số nhà mới của khách hàng:');
    billsManager.updateNumberHomeInfo(electricmeterID,newHomeNumberCustomer);
    billsManager.getAllBills();
}

function updateNewElectricMeterID() {
    console.log('---Cập nhật tên khách hàng trên hóa đơn---');
    let electricmeterID = +rl.question('Nhập ID công tơ điện:');
    let newNewElectricMeterIDCustomer = +rl.question('Nhập số nhà mới của khách hàng:');
    billsManager.updateElectricMeterIDInfo(electricmeterID,newNewElectricMeterIDCustomer);
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
    let bills = billsManager.showBillFind(electricmeterID)
    displayList(bills);
}

function displayList(bills: Bill[]) {
    let container = [];
    let data;
    for (let i = 0; i < bills.length; i++) {
        data = {
            CustomerName: bills[i].getCustomer().getName(),
            HomeNumber: bills[i].getCustomer().getNumberHome(),
            ElectricMeterID: bills[i].getCustomer().getElectricmeterID(),
            OldIndex: bills[i].getOldIndex(),
            NewIndex: bills[i].getNewIndex(),
        }
        container.push(data)
    }
    console.table(container);
}

function softBills() {
    console.log('-----Sắp xếp hóa đơn-----');
    let bills = billsManager.softElectricMeterID()
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
    Update();
    choice = +rl.question('Nhập lựa chọn của bạn:');
    switch (choice) {
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

            break;

        case BillChoice.SOFT_BILL:
            softBills();
            break;

        default :
            console.log('-----Nhập lại lựa chọn------')
    }
} while (choice != BillChoice.EXIT);

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

        default :
            console.log('-----Nhập lại lựa chọn------')
    }
} while (choice != BillChoice.EXIT);