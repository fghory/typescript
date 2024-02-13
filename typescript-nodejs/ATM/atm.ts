import inquirer from "inquirer";
import { ATM, atmData } from "./data.js";
import { atmMenu } from "./menu.js";
import chalk from "chalk";

await inquirer
  .prompt([
    {
      type: "input",
      name: "userid",
      message: "Please enter your userid: ",
    },
    {
      type: "password",
      name: "userpin",
      message: "Please enter your 4-digit pincode: ",
      mask: "*",
    },
  ])

  .then((ans) => {
    let response: string = "None";
    let user: ATM = { userid: "", userpin: "", balance: 0 };

    console.log(chalk.bold.bgRgb(0, 0, 255).yellow("Welcome to Console ATM"));

    for (let i = 0; i < atmData.length; i++) {
      if (
        ans.userid === atmData[i].userid &&
        ans.userpin === atmData[i].userpin
      ) {
        user = atmData[i];

        response = ans.userid;

        break;
      }
    }
    if (response === "None") {
      console.log("Your UserId/PinCode is wrong");
    } else {
      atmMenu(user);
    }
  });
