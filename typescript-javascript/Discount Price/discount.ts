import PromptSync from "prompt-sync";
let prompt = PromptSync();

let prpric: number = Number(prompt("Please enter product price: "));
let dis: number = Number(prompt("Please enter percent discount: "));

function finProd(prodpric: number, discount:number) {
    
let discamount:number = prodpric * discount/100;
let finalpric: number = prodpric - discamount;

if (discount >= 50) {
    console.log("This discount is invalid!");
} else {
    console.log(` Product Price ${prodpric} \n Discount Percent ${discount} \n Total Discount ${discamount} \n Price after Discount ${finalpric} `);
}
}

finProd(prpric,dis);