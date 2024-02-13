import inquirer from "inquirer";
import { ATM, atmData } from "./data.js";
import chalk from "chalk";

export async function atmMenu(useres: ATM) {
  //  let continueTransaction: boolean = true;
  // while (continueTransaction) {
  await inquirer
    .prompt([
      {
        type: "list",
        name: "atmmenu",
        message: "choose the desired operation",
        choices: [
          "Balance Inquiry",
          "Pin Change",
          "Cash Withdrawl",
          "Fast Cash",
          "Abort Operation",
        ],
      },
    ])

    .then((ans) => {
      if (ans.atmmenu === "Balance Inquiry") {
        console.log(`Your balance is ${useres.balance}`);
      } else if (ans.atmmenu === "Pin Change") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "new_pin",
              message: "Please enter new 4 digit pin: ",
            },
          ])
          .then((np) => {
            let idCheck = np.id;

            if (np.new_pin.length < 4 || np.new_pin.length > 4) {
              console.log(
                "You entered wrong userid or wrong value of new pin."
              );
            } else {
              useres.userpin = np.new_pin;
              console.log(
                `Your Pin Code has been changed to ${useres.userpin}`
              );
            }
          });
      } else if (ans.atmmenu === "Cash Withdrawl") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "withdrawl",
              message: "Please enter amount to withdraw: ",
            },
          ])
          .then((amount) => {
            let amt: number = Number(amount.withdrawl);

            let remaining_balance = useres.balance - amt;
            console.log(`Your remaining balance is Rs.${remaining_balance}`);
          });
      } else if (ans.atmmenu === "Fast Cash") {
        inquirer
          .prompt([
            {
              type: "list",
              name: "fastcash",
              message: "Please select amount to withdraw: ",
              choices: ["1000", "2000", "3000", "5000", "10000", "20000"],
            },
          ])
          .then((amount) => {
            let amt: number = Number(amount.fastcash);

            let remaining_balance = useres.balance - amt;
            console.log(`Your remaining balance is Rs.${remaining_balance}`);
          });
      } else if (ans.atmmenu === "Abort Operation") {
        console.log(chalk.bold.green("Thanks for using Console ATM"));
      }
    });

  //}
}

// async function end(transact: boolean) {
//   await inquirer
//     .prompt([
//       {
//         type: "confirm",
//         name: "continue",
//         message: "Do you want to perform another transaction?",
//         default: true,
//       },
//     ])
//     .then((contRes) => {
//       transact = contRes.continue;
//     });
// }
