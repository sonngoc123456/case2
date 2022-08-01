"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateChoice = exports.BillChoice = void 0;
var BillChoice;
(function (BillChoice) {
    BillChoice[BillChoice["CREATE_BILL"] = 1] = "CREATE_BILL";
    BillChoice[BillChoice["SHOW_LIST_BILL"] = 2] = "SHOW_LIST_BILL";
    BillChoice[BillChoice["UPDATE_BILL"] = 3] = "UPDATE_BILL";
    BillChoice[BillChoice["DELETE_BILL"] = 4] = "DELETE_BILL";
    BillChoice[BillChoice["FIND_BILL"] = 5] = "FIND_BILL";
    BillChoice[BillChoice["SOFT_BILL"] = 6] = "SOFT_BILL";
    BillChoice[BillChoice["Amout"] = 7] = "Amout";
    BillChoice[BillChoice["EXIT"] = 0] = "EXIT";
})(BillChoice = exports.BillChoice || (exports.BillChoice = {}));
var UpdateChoice;
(function (UpdateChoice) {
    UpdateChoice[UpdateChoice["UPDATE_ALL_INFO_BILL"] = 1] = "UPDATE_ALL_INFO_BILL";
    UpdateChoice[UpdateChoice["UPDATE_NAME"] = 2] = "UPDATE_NAME";
    UpdateChoice[UpdateChoice["UPDATE_HOMENUMBER"] = 3] = "UPDATE_HOMENUMBER";
    UpdateChoice[UpdateChoice["UPDATE_ELECTRICMETERID"] = 4] = "UPDATE_ELECTRICMETERID";
    UpdateChoice[UpdateChoice["UPDATE_OLDINDEX"] = 5] = "UPDATE_OLDINDEX";
    UpdateChoice[UpdateChoice["UPDATE_NEWINDEX"] = 6] = "UPDATE_NEWINDEX";
    UpdateChoice[UpdateChoice["EXIT"] = 0] = "EXIT";
})(UpdateChoice = exports.UpdateChoice || (exports.UpdateChoice = {}));
