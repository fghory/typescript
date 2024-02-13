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
function game() {
    return __awaiter(this, void 0, void 0, function* () {
        let total = 0;
        for (let j = 3; j <= 7; j += 2) {
            let i = 0;
            let score = 0;
            console.log(i);
            for (let round = 1; round <= 3; round++) {
                console.log(`ROUND ${round}`);
                while (i < 3) {
                    i++;
                    //   console.log(i);
                    let randno = Math.floor(Math.random() * j) + 1;
                    console.log(randno);
                    yield inquirer
                        .prompt([
                        {
                            type: "input",
                            name: "guess",
                            message: `Enter a number between 1 and ${j}: `,
                            validate: (ans) => {
                                if (ans === "" || ans > j || ans < 1) {
                                    return "Enter valid input!";
                                }
                                else {
                                    return true;
                                }
                            },
                        },
                    ])
                        .then((ans) => {
                        //   console.log(ans);
                        let user = Number(ans.guess);
                        console.log(user);
                        if (user == randno) {
                            score++;
                            console.log("You have guessed correctly");
                            // console.log(`Your score is ${score}`);
                        }
                        else {
                            console.log("Please try again");
                        }
                    });
                }
                console.log(`Your round score is ${score}`);
                total += score;
            }
            console.log(`Your total points are ${total}`);
        }
    });
}
game();
