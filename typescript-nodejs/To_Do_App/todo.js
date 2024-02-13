import { task } from "./todoData.js";
import inquirer from "inquirer";
import chalk from "chalk";
async function todoList() {
    console.log(chalk.bgRgb(0, 0, 255).white.bold("\nTO DO APP \n"));
    do {
        await inquirer
            .prompt([
            {
                type: "list",
                name: "todoList",
                message: "Please select the desired operation: ",
                choices: ["View Tasks", "Add New Task", "Update Task", "Delete Task"],
            },
        ])
            .then((selection) => {
            //console.log(selection);
            let taskdetail;
            let showtask = [];
            if (selection.todoList === "View Tasks") {
                for (let i = 0; i < task.length; i++) {
                    showtask.push(task[i].taskname);
                    //console.log(showtask);
                }
                inquirer
                    .prompt([
                    {
                        type: "list",
                        name: "showtask",
                        message: "Please select the task for details:",
                        choices: showtask.map((item) => item),
                    },
                ])
                    .then((detail) => {
                    //console.log(detail);
                    for (let j = 0; j < task.length; j++) {
                        if (detail.showtask === task[j].taskname) {
                            console.log(`${chalk.bold.yellowBright("Task:")} ${task[j].taskname}`);
                            console.log(`${chalk.bold.yellowBright("Details:")} ${task[j].details}`);
                            console.log(`${chalk.bold.yellowBright("Due on:")} ${task[j].duedate}`);
                            console.log(`${chalk.bold.yellowBright("Status:")} ${task[j].state}`);
                        }
                    }
                });
            }
            else if (selection.todoList === "Add New Task") {
                inquirer
                    .prompt([
                    {
                        type: "input",
                        name: "taskname",
                        message: "Enter the name of new task: ",
                    },
                    {
                        type: "input",
                        name: "details",
                        message: "Enter task details: ",
                    },
                    {
                        type: "input",
                        name: "duedate",
                        message: "Enter due date (dd/mm/yyyy): ",
                    },
                    {
                        type: "list",
                        name: "state",
                        message: "Enter status: ",
                        choices: ["Pending", "In Process"],
                    },
                ])
                    .then((new_task) => {
                    task.push(new_task);
                    console.log(`${chalk.bold.yellowBright(`${new_task.taskname}`)} added`);
                });
            }
            else if (selection.todoList === "Delete Task") {
                inquirer
                    .prompt([
                    {
                        type: "list",
                        name: "deleteTask",
                        message: "Please select task to delete: ",
                        choices: task.map((item) => item.taskname),
                    },
                ])
                    .then((ans) => {
                    console.log(ans.deleteTask);
                    for (let k = 0; k < task.length; k++) {
                        if (ans.deleteTask === task[k].taskname) {
                            task.splice(k, 1);
                        }
                    }
                    console.log(`Task ${ans.deleteTask} deleted successfully. Updated list: `);
                    task.map((item) => {
                        console.log(`${item.taskname}`);
                    });
                });
            }
            else if (selection.todoList === "Update Task") {
                inquirer
                    .prompt([
                    {
                        type: "list",
                        name: "updatetask",
                        message: "Please select the task to update:",
                        choices: task.map((item) => item.taskname),
                    },
                ])
                    .then((updtask) => {
                    for (let i = 0; i < task.length; i++) {
                        if (updtask.updatetask === task[i].taskname) {
                            inquirer
                                .prompt([
                                {
                                    type: "input",
                                    name: "dtls",
                                    message: "Enter task details: ",
                                },
                                {
                                    type: "input",
                                    name: "dudte",
                                    message: "Enter due date (dd/mm/yyyy): ",
                                },
                                {
                                    type: "list",
                                    name: "stas",
                                    message: "Select task status: ",
                                    choices: ["Pending", "In Process", "Completed"],
                                },
                            ])
                                .then((updt) => {
                                task[i].details = updt.dtls;
                                task[i].duedate = updt.dudte;
                                task[i].state = updt.stas;
                                console.log(`${chalk.bold.yellowBright("Task:")} ${task[i].taskname}`);
                                console.log(`${chalk.bold.yellowBright("Details:")} ${task[i].details}`);
                                console.log(`${chalk.bold.yellowBright("Due on:")} ${task[i].duedate}`);
                                console.log(`${chalk.bold.yellowBright("Status:")} ${task[i].state}`);
                            });
                        }
                    }
                });
            }
        });
    } while (true);
}
todoList();
