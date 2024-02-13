import PromptSync = require("prompt-sync");
let prompt = PromptSync();

let engMrks:number = Number (prompt("Enter English Marks: "));
let urdMrks:number = Number (prompt("Enter Urdu Marks: "));
let avgMrks:number = (engMrks + urdMrks)/2;
console.log(`Average Score is ${avgMrks}`); 

if (avgMrks >= 80) {
    console.log("Overall Grade: A");
}
else if (avgMrks >= 70) {
    console.log("Overall Grade: B");
}
else if (avgMrks >= 60) {
    console.log("Overall Grade: C");
}
else if (avgMrks >= 50) {
    console.log("Overall Grade: D");
}
else {
    console.log("Failed");
}
