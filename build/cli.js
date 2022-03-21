
const inquirer = require("inquirer");
const path = require("path");
const fs = require('fs');
const shell = require("shelljs");

const dirPath = path.join(__dirname, '../');

(async () => {
    let module_files = fs.readdirSync(`${dirPath}/pages`);
    const modulesList = [
        {
            type: "list",
            message: "请选择启动的目录:",
            name: "vo",
            choices: [...module_files]
        }
    ];

    const { vo: module } = await inquirer.prompt(modulesList);
    let pageName_files = fs.readdirSync(`${dirPath}/pages/${module}/`);
    const pageNamesList = [
        {
            type: "list",
            message: "请选择启动的目录:",
            name: "vo",
            choices: [...pageName_files]
        }
    ];
    const { vo: pageName } = await inquirer.prompt(pageNamesList);

    const cmds = [];
    const action = process.argv[2];
    if (process.platform === "win32") {
        cmds.push(`set MODULES=${module}`);
        cmds.push(`set PAGE_NAME=${pageName}`);
        cmds.push(`set ACTION=${action}`);
    } else {
        cmds.push(`export MODULES=${module}`);
        cmds.push(`export PAGE_NAME=${pageName}`);
        cmds.push(`export ACTION=${action}`);
    }
    if (action == 'serve') {
        cmds.push("npm run start");
    } else if (action == 'build') {
        cmds.push("npm run build");
    }

    const cmd = cmds.join(" && ");
    const { code } = shell.exec(cmd);
    process.exit(code);
})();
