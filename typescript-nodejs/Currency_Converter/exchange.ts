import inquirer from "inquirer";
import chalk from "chalk";
import { rates } from "./rates.js";

async function exchange() {
  console.log(
    chalk.bgRgb(0, 0, 255).yellow.bold("\nCONSOLE CURRENCY EXCHANGE\n")
  );

  await inquirer
    .prompt([
      {
        type: "list",
        name: "exchange_from",
        message: "Select currency to exchange",
        choices: [
          "AUD - Australian Dollar",
          "AED - UAE Dirham",
          "BHD - Bahraini Dinar",
          "PKR - Pakistani Rupee",
          "USD - US Dollar",
          "EUR - EURO",
        ],
      },
      {
        type: "number",
        name: "amount",
        message: "Select amount to exchange",
      },
      {
        type: "list",
        name: "exchange_to",
        message: "Select desired currency",
        choices: [
          "AUD - Australian Dollar",
          "AED - UAE Dirham",
          "BHD - Bahraini Dinar",
          "PKR - Pakistani Rupee",
          "USD - US Dollar",
          "EUR - EURO",
        ],
      },
    ])
    .then((ans) => {
      let currencyfrom = ans.exchange_from.slice(0, 3);
      let currencyto = ans.exchange_to.slice(0, 3);
      let amount = ans.amount;
      let fromvalue: number = 0;
      let tovalue: number = 0;
      let finalvalue: number = 0;
      let exchangerate: number = 0;

      for (let [key, value] of Object.entries(rates)) {
        if (key === currencyfrom) {
          //console.log(`${key} = ${value}`);
          fromvalue = value;
        }
      }
      for (const [key, value] of Object.entries(rates)) {
        if (key === currencyto) {
          //console.log(`${key} = ${value}`);
          tovalue = value;
        }
      }
      exchangerate = (1 / fromvalue) * tovalue;
      finalvalue = amount * (1 / fromvalue) * tovalue;
      console.log(
        `Curent Exchange Rate: ${chalk.yellow.bold(
          `${currencyfrom}`
        )}  = ${chalk.greenBright.bold(
          `${exchangerate.toFixed(2)} ${currencyto}`
        )} `
      );
      console.log(
        `You will get ${chalk.greenBright.bold(
          `${finalvalue.toFixed(2)} ${currencyto}`
        )} for ${chalk.yellow.bold(`${amount} ${currencyfrom}`)}`
      );
    });
}
exchange();
