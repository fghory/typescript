var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.black.bgWhite("\n*****     NUMBER GUESSING GAME      *****"));
console.log("\n DESCRIPTION \n 1. Game contains three rounds \n 2. Each round has three attempts each \n 3. Enter a number as per given instruction\n");
function game() {
    return __awaiter(this, void 0, void 0, function* () {
        let total = 0;
        for (let round = 1; round <= 3; round++) {
            let score = 0;
            let attempts;
            let j = 3;
            switch (round) {
                case 1:
                    attempts = j;
                    break;
                case 2:
                    attempts = j + 1;
                    break;
                case 3:
                    attempts = j + 2;
                    break;
                default:
                    attempts = j;
            }
            console.log(chalk.blue.bold(`*** ROUND ${round} ***`));
            for (let i = 0; i < 3; i++) {
                let randno = Math.floor(Math.random() * attempts) + 1;
                yield inquirer
                    .prompt([
                    {
                        type: "input",
                        name: "guess",
                        message: `Enter a number between 1 and ${attempts}: `,
                        validate: (ans) => {
                            if (ans === "" || ans > attempts || ans < 1) {
                                return "Enter a valid input!";
                            }
                            else {
                                return true;
                            }
                        },
                    },
                ])
                    .then((ans) => {
                    let user = Number(ans.guess);
                    if (user == randno) {
                        score++;
                        console.log("You have guessed correctly");
                    }
                    else {
                        console.log("Please try again");
                    }
                });
            }
            console.log(chalk.bold.yellow(`\nYour round ${round} score is ${score}`));
            total += score;
        }
        console.log(chalk.bold.green(`Your total points are ${total}`));
    });
}
game();
