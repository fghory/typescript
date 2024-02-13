import PromptSync from "prompt-sync";
let prompt = PromptSync();

let quesArr: string[] = ["What is the name of capital of Pakistan? \n 1.Karachi \n 2.Islamabad \n 3.Lahore",
"What is name of national flower of Pakistan? \n 1.Jasmine \n 2.Rose \n 3.Tulip",
"What is the name of Pakistani currency? \n 1.Dollar \n 2.Riyal \n 3.Rupee"];
let ansArr:(string) []= ["Islamabad", "Jasmine", "Rupee"];


function qNa() {
  let ans:string;
  let count:number = 0;
  let cques:number = 0;
  while (quesArr.length > 0) {
    //console.log(quesArr.length);
    let randNo:number = Math.floor(Math.random() * quesArr.length);
    console.log(randNo);
    if (randNo === 0) {
      console.log(quesArr[0]);
      ans = prompt("");
      cques++;
      if (ans === ansArr[0]) {
        console.log("Your answer is correct.");
        count++;
      } 
      else {
        console.log("Answer is wrong.");
      }
    } 
    else if (randNo === 1) {
      console.log(quesArr[1]);
      ans = prompt("");
      cques++;
      if (ans === ansArr[1]) {
        console.log("Your answer is correct.");
        count++;
      } 
      else {
        console.log("Answer is wrong.");
      }
    } 
    else if (randNo === 2) {
      console.log(quesArr[2]);
      ans = prompt("");
      cques++;
      if (ans === ansArr[2]) {
        console.log("Your answer is correct.");
        count++;
      } 
      else {
        console.log("Answer is wrong.");
      }
    }
    else {
        console.log("Wrong Answer!");
    }
        
    quesArr.splice(randNo, 1);
    ansArr.splice(randNo, 1);
    
  
    console.log(quesArr);
    console.log(ansArr);
  }
  console.log(`Your correct answers are : ${count} out of ${cques}`);
}
// for (let i = 0; i < quesArr.length; i++) {
//     qNa();
// }

qNa();
