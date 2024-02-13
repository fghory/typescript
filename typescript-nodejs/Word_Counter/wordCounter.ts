import inquirer from "inquirer";
import chalk from "chalk";

// let paragraph: string = "Here is a, long story short.";
// let edited = paragraph.replace(/[^\s\w]/g, "");
// let edit = edited.split(" ");
// let done = edit.join("");
// console.log(done);
// console.log(done.length);

function countWordLetter(sentence: string) {
  let replaced: string = sentence.replace(/[^\s\w]/g, "");
  let replacedarr: string[] = replaced.split(" ");
  let joined: string = replacedarr.join("");
  console.log(`Word Count: ${replacedarr.length}`);
  console.log(`Letter Count: ${joined.length}`);
}

function textInput() {
  console.log(chalk.bgRgb(0, 0, 255).yellowBright.bold("\nWORD COUNTER\n"));
  inquirer
    .prompt([
      {
        type: "editor",
        name: "words",
        message: "Enter text for counting words and letter: ",
      },
    ])
    .then((text) => {
      countWordLetter(text.words);
    });
}
textInput();
