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
    EXIT = 0
}

let billsManager = new BillsManager();

function inputCustomer() {
    let name = rl.question('Nhập tên khách hàng:');
    let homenumber = +rl.question('Nhập số nhà :');
    let electricmeterID = +rl.question('Nhập công tơ điện :');
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
    let container=[];
    let data;
    for(let i = 0; i< bills.length;i++) {
        data = {
            CustomerName:bills[i].customer.name,
            HomeNumber:bills[i].customer.numberhome,
            ElectricMeterID:bills[i].customer.electricmeterID,
            OldIndex: bills[i].oldindex,
            NewIndex: bills[i].newindex,
        }
        container.push(data)
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
    let electricmeterID = +rl.question('Nhập vị công tơ mét:');
    let bill = inputBill();
    billsManager.updateBill(electricmeterID, bill);
}

function deleteBill() {
    console.log('---Xóa thông tin hóa đơn---');
    let electricmeterID = +rl.question('Nhập công tơ mét :');
    billsManager.deleteBill(electricmeterID);
}
function login(name:string,pass:number) {
    if(name=='admin' && pass == 123) {
        menu()
    }
}

function showfind() {
    console.log('---Tìm kiếm hóa đơn---');
    let electricmeterID = +rl.question('Nhập công tơ mét :');
    console.table(billsManager.showBillFind(electricmeterID))
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
        case BillChoice.CREATE_BILL: {
            creatNewBill();
            break;
        }
        case BillChoice.SHOW_LIST_BILL: {
            showListBill();
            break;
        }
        case BillChoice.UPDATE_BILL: {
            updateBill();
            break;
        }
        case BillChoice.DELETE_BILL: {
            deleteBill();
            break;
        }
        case BillChoice.FIND_BILL: {
            showfind();
            break;
        }
        default :
            console.log('-----Nhập lại lựa chọn------')
    }
} while (choice != BillChoice.EXIT);