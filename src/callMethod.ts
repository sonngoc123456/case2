import * as rl from "readline-sync";
import {Customer} from "./Customer";
import {Bill} from "./Bills";
import {BillsManager} from "./BillsManager";

let billsManager = new BillsManager();
let custumer1= new Customer("son",223323,"Pho vong",2)
let bill1 = new Bill(223,323,custumer1)
let custumer2= new Customer("nam",2,"Pho lang",8)
let bill2 = new Bill(323,523,custumer2)
billsManager.creatNewBill(bill2)
billsManager.creatNewBill(bill1)



export class CallMethod {

     inputCustomer() {
        let name = rl.question('Nhập tên khách hàng:');
        let homenumber = +rl.question('Nhập số nhà :');
        let address = rl.question('Nhập địa chỉ :');
        let electricmeterID = +rl.question('Nhập ID công tơ điện :');
        return new Customer(name,homenumber,address,electricmeterID);
    }

    inputBill(): Bill {

        let customer = this.inputCustomer();
        let oldindex = +rl.question('Nhập chỉ số điện cũ:');
        let newindex = +rl.question('Nhập chỉ số điện mới :');
        return new Bill(oldindex,newindex,customer);
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
        billsManager.updateNameInfo(electricmeterID,newNameCustomer);
        billsManager.getAllBills();
    }

     updateNewHomeNumber() {
        console.log('---Cập nhật tên khách hàng trên hóa đơn---');
        let electricmeterID = +rl.question('Nhập ID công tơ điện:');
        let newHomeNumberCustomer = +rl.question('Nhập số nhà mới của khách hàng:');
        billsManager.updateNumberHomeInfo(electricmeterID,newHomeNumberCustomer);
        billsManager.getAllBills();
    }

     updateNewElectricMeterID() {
        console.log('---Cập nhật tên khách hàng trên hóa đơn---');
        let electricmeterID = +rl.question('Nhập ID công tơ điện:');
        let newNewElectricMeterIDCustomer = +rl.question('Nhập số nhà mới của khách hàng:');
        billsManager.updateElectricMeterIDInfo(electricmeterID,newNewElectricMeterIDCustomer);
        billsManager.getAllBills();
    }

     updateOldIndex() {
        console.log('---Cập nhật tên khách hàng trên hóa đơn---');
        let electricmeterID = +rl.question('Nhập ID công tơ điện:');
        let OldIndexNew = +rl.question('Nhập số nhà mới của khách hàng:');
        billsManager.updateOldIndexInfo(electricmeterID,OldIndexNew);

        billsManager.getAllBills();
    }
     updateNewIndex() {
        console.log('---Cập nhật tên khách hàng trên hóa đơn---');
        let electricmeterID = +rl.question('Nhập ID công tơ điện:');
        let NewIndex = +rl.question('Nhập số nhà mới của khách hàng:');
        billsManager.updateNewIndexInfo(electricmeterID,NewIndex);
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
                Address : bills[i].getCustomer().getAddress(),
                ElectricMeterID: bills[i].getCustomer().getElectricmeterID(),
                OldIndex: bills[i].getOldIndex(),
                NewIndex: bills[i].getNewIndex(),
                Amount : billsManager.AmountToPay(electricmeterID)
            }
            container.push(data)
        }
        console.table(container);

    }

     displayList(bills: Bill[]) {
        let container = [];
        let data;
        for (let i = 0; i < bills.length; i++) {
            data = {
                CustomerName: bills[i].getCustomer().getName(),
                HomeNumber: bills[i].getCustomer().getNumberHome(),
                Address : bills[i].getCustomer().getAddress(),
                ElectricMeterID: bills[i].getCustomer().getElectricmeterID(),
                OldIndex: bills[i].getOldIndex(),
                NewIndex: bills[i].getNewIndex(),
            }
            container.push(data)
        }
        console.table(container);
    }

     softBills() {
        console.log('-----Sắp xếp hóa đơn-----');
        let bills = billsManager.softElectricMeterID()
            this.displayList(bills);
    }
}