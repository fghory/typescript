import inquirer from "inquirer";
import { atmData } from "./data.js";
// type ATM = {
//   userid: string;
//   userpin: string;
//   balance: number;
// };
// let atmData: ATM[] = [
//   {
//     userid: "fghory",
//     userpin: "2134",
//     balance: 2000,
//   },
//   {
//     userid: "zgohar",
//     userpin: "1234",
//     balance: 1000,
//   },
//   {
//     userid: "xcd19",
//     userpin: "4321",
//     balance: 10000,
//   },
// ];
console.log(atmData[1].userid);
await inquirer
    .prompt([
    {
        type: "input",
        name: "userid",
        message: "Please enter your userid: ",
    },
    {
        type: "input",
        name: "userpin",
        message: "Please enter your 4-digit pincode: ",
    },
])
    .then((ans) => {
    let response = "None";
    for (let i = 0; i < atmData.length; i++) {
        if (ans.userid === atmData[i].userid &&
            ans.userpin === atmData[i].userpin) {
            console.log("Matched!");
            response = ans.userid;
            break;
        }
        //   else {
        //     continue;
        //   }
    }
    if (response === "None") {
        console.log("Your UserId/PinCode is wrong");
    }
    else {
        console.log(response);
    }
});
