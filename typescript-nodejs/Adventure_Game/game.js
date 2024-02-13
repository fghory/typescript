import inquirer from "inquirer";
import chalk from "chalk";
async function game() {
    //Game Variables
    let enemies = ["Skeleton", "Zombie", "Warrior", "Assassin"];
    const maxEnemyHealth = 75;
    const enemyAttackDamage = 25;
    //Player Variables
    let health = 100;
    let attackDamage = 50;
    let numHealthPotions = 3;
    let healthPotionHealAmount = 30;
    let healthPotionDropChance = 50; //Percentage
    let running = true;
    console.log(chalk.bold.bgYellow.green.bold.bold("\n\t# WELCOME TO THE DUNGEON! #"));
    GAME: while (running) {
        console.log("------------------------------------------------------------");
        let enemyHealth = Math.floor(Math.random() * maxEnemyHealth) + 1;
        let enemy = enemies[Math.floor(Math.random() * enemies.length)];
        console.log(`\t# ${enemy} has appeared #`);
        while (enemyHealth > 0) {
            console.log(`\t  Your HP: ${health} `);
            console.log(`\t  ${enemy}'s HP: ${enemyHealth}`);
            console.log("------------------------------------------------------------");
            const userquery = await inquirer.prompt([
                {
                    type: "list",
                    name: "game_options",
                    message: "What would you like to do?",
                    choices: ["Attack", "Drink Health Potion", "Run Away"],
                },
            ]);
            //console.log(userquery.game_options);
            if (userquery.game_options === "Attack") {
                let damageDealt = Math.floor(Math.random() * attackDamage) + 1;
                let damageTaken = Math.floor(Math.random() * enemyAttackDamage) + 1;
                enemyHealth -= damageDealt;
                health -= damageTaken;
                console.log(`\tYou strike the ${enemy} for ${damageDealt} damage.`);
                console.log(`\tYou recieve ${damageTaken} in retaliation`);
                if (health < 1) {
                    console.log(chalk.red.bold(`\t> You have taken too much damage, you are too weak to go on!`));
                    break;
                }
            }
            else if (userquery.game_options === "Drink Health Potion") {
                if (numHealthPotions > 0) {
                    health += healthPotionHealAmount;
                    numHealthPotions--;
                    console.log(`\t> You healed yourself for ${healthPotionHealAmount}`);
                    console.log(`\t> You now have ${health} HP.`);
                    console.log(`Your remaining health potions: ${numHealthPotions}`);
                }
                else {
                    console.log(chalk.yellow.bold(`You don't have any health postion left. Defeat enemy for a chance to get one!`));
                }
            }
            else if (userquery.game_options === "Run Away") {
                console.log(`\t You ran away from the ${enemy}!`);
                continue GAME;
            }
            else {
                console.log("Invalid Command!");
            }
        }
        if (health < 1) {
            console.log(chalk.red.bold(`\t> You limp out of the dungeon, too weak for battle`));
            break;
        }
        console.log("------------------------------------------------------------");
        console.log(chalk.bold.green(`\t # Hurray! ${enemy} was defeated #`));
        console.log(`\t # You have ${health} HP left #`);
        console.log("------------------------------------------------------------");
        let randno = Math.floor(Math.random() * 100) + 1;
        if (randno < healthPotionDropChance) {
            numHealthPotions++;
            console.log(`# The ${enemy} dropped a health potion`);
            console.log(`# You now have ${numHealthPotions} health potions. #`);
        }
        console.log("------------------------------------------------------------");
        const decision = await inquirer.prompt([
            {
                type: "list",
                name: "game_decision",
                message: "What would you like to do now?",
                choices: ["Continue Fighting", "Exit Dungeon"],
            },
        ]);
        if (decision.game_decision === "Continue Fighting") {
            console.log("Good Decison! Go on to fight for another day!");
        }
        else if (decision.game_decision === "Exit Dungeon") {
            console.log("See you next time!");
            break;
        }
    }
    console.log(chalk.bgCyanBright.rgb(0, 0, 255).bold(`\n\tTHANKS FOR PLAYING!`));
}
game();
