import inquirer from "inquirer";

async function game() {
  let total: number = 0;

  for (let j = 3; j <= 7; j += 2) {
    let i: number = 0;
    let score: number = 0;
    console.log(i);
    for (let round = 1; round <= 3; round++) {
      console.log(`ROUND ${round}`);

      while (i < 3) {
        i++;
        //   console.log(i);

        let randno = Math.floor(Math.random() * j) + 1;

        console.log(randno);

        await inquirer
          .prompt([
            {
              type: "input",
              name: "guess",
              message: `Enter a number between 1 and ${j}: `,
              validate: (ans) => {
                if (ans === "" || ans > j || ans < 1) {
                  return "Enter valid input!";
                } else {
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
            } else {
              console.log("Please try again");
            }
          });
      }
      console.log(`Your round score is ${score}`);
      total += score;
    }
    console.log(`Your total points are ${total}`);
  }
}

game();
