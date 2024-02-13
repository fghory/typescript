"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let prompt = (0, prompt_sync_1.default)();
let prpric = Number(prompt("Please enter product price: "));
let dis = Number(prompt("Please enter percent discount: "));
function finProd(prodpric, discount) {
    let discamount = prodpric * discount / 100;
    let finalpric = prodpric - discamount;
    if (discount >= 50) {
        console.log("This discount is invalid!");
    }
    else {
        console.log(` Product Price ${prodpric} \n Discount Percent ${discount} \n Total Discount ${discamount} \n Price after Discount ${finalpric} `);
    }
}
finProd(prpric, dis);
