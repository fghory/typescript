import PromptSync from "prompt-sync";
let prompt = PromptSync();

let fact:number = Number(prompt("Enter the number for factorial: "));

let factorial = (f:number) => {
let num:number = 1;
let torial;

for (let i = 1; i <= fact; i++) {
    torial = num*=i;
    
    
}

console.log(torial);
}
factorial(fact);