"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PromptSync = require("prompt-sync");
let prompt = PromptSync();
// let operat:string;
// let inp1:number;
// let inp2:number;
// operat = prompt("Please input the desired operation: +, -, *, /. % ");
// inp1 = Number(prompt("First number: "));
// inp2 = Number(prompt("Second number: "));
// if(operat == "+"){
//     let result = inp1+inp2;
//     console.log(`Result is ${result}`);
// }else if(operat == "-"){
//     let result = inp1-inp2;
//     console.log(`Result is ${result}`);
// }else if(operat == "*"){
//     let result = inp1*inp2;
//     console.log(`Result is ${result}`);
// }else if(operat == "/"){
//     let result = inp1/inp2;
//     console.log(`Result is ${result}`);
// }else if(operat == "%"){
//     let result = inp1%inp2;
//     console.log(`Result is ${result}`);
// }else{
//     console.log("Please input a valid operator.");
// }           
let op = prompt("Please input the desired operation: +, -, *, /. %   ");
let i1 = Number(prompt("First number: "));
let i2 = Number(prompt("First number: "));
// function simpCal(inp1:number,inp2:number,operat:string){
// if(operat == "+"){
//     let result = inp1+inp2;
//     console.log(`Result is ${result}`);
// }else if(operat == "-"){
//     let result = inp1-inp2;
//     console.log(`Result is ${result}`);
// }else if(operat == "*"){
//     let result = inp1*inp2;
//     console.log(`Result is ${result}`);
// }else if(operat == "/"){
//     let result = inp1/inp2;
//     console.log(`Result is ${result}`);
// }else if(operat == "%"){
//     let result = inp1%inp2;
//     console.log(`Result is ${result}`);
// }else{
//     console.log("Please input a valid operator.");
// }           
// }
// simpCal(i1,i2,op);
let simpCal = (inp1, inp2, operat) => {
    if (operat == "+") {
        let result = inp1 + inp2;
        console.log(`Result is ${result}`);
    }
    else if (operat == "-") {
        let result = inp1 - inp2;
        console.log(`Result is ${result}`);
    }
    else if (operat == "*") {
        let result = inp1 * inp2;
        console.log(`Result is ${result}`);
    }
    else if (operat == "/") {
        let result = inp1 / inp2;
        console.log(`Result is ${result}`);
    }
    else if (operat == "%") {
        let result = inp1 % inp2;
        console.log(`Result is ${result}`);
    }
    else {
        console.log("Please input a valid operator.");
    }
};
simpCal(i1, i2, op);
