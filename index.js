import inquirer from 'inquirer';
import * as fs from 'fs'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const choices = fs.readdirSync(`${__dirname}/templates`)

const questions = [
    {
        name: 'project-choice',
        type: 'list',
        message: 'What project template would you like to generate?',
        choices: choices
    },
    {
        name: 'name',
        type: 'input',
        message: 'Project name:',
        default: 'my-app',
        validate: function (input) {
            if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
            else return 'Project name may only include letters, numbers, underscores and hashes.';
        }
    },
    {
        name: "CSS",
        type: "confirm",
        message: "Would you like to use CSS?",
        default: true
    },
];

inquirer.prompt(questions).then(answers => {
    const projectChoice = answers['project-choice']
    const projectName = answers['name']
    const templatePath = `${__dirname}/templates/${projectChoice}`

    fs.mkdirSync(`${process.cwd()}/${projectName}`)

    createDirectoryContents(templatePath, projectName)
}
);

function createDirectoryContents(templatePath, newProjectPath) {
    const filesToCreate = fs.readdirSync(templatePath)

    filesToCreate.forEach(file => {
        const origFilePath = `${templatePath}/${file}`

        const stats = fs.statSync(origFilePath)

        if (stats.isFile()) {
            const contents = fs.readFileSync(origFilePath, 'utf8')

            const writePath = `${process.cwd()}/${newProjectPath}/${file}`

            fs.writeFileSync(writePath, contents, 'utf8')
        } else if (stats.isDirectory()) {
            fs.mkdirSync(`${process.cwd()}/${newProjectPath}/${file}`)

            createDirectoryContents(`${templatePath}/${file}`, `${newProjectPath}/${file}`)
        }
    })
}






