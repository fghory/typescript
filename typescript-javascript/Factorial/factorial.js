"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let prompt = (0, prompt_sync_1.default)();
let fact = Number(prompt("Enter the number for factorial: "));
let factorial = (f) => {
    let num = 1;
    let torial;
    for (let i = 1; i <= fact; i++) {
        torial = num *= i;
    }
    console.log(torial);
};
factorial(fact);
