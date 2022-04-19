// Hajime!

// Imports inquirer
const inquirer = require('inquirer');
// console.log(inquirer) <--- Works

// fs is a Node standard library package for reading and writing files
const fs = require('fs');
const Manager = require('./classes/manager')
// ______________________________________________________________________________________________________

const makeHTML = (answers) => {
    // DON'T FORGET THE RETURN!!!
    return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="author" content="James Edwards">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap Styling -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">

    <title>Team Profile Generator</title>
</head>
    <header class="jumbotron">
        <h1 class="display-3">My Team</h1>
    </header>
    
    <body>
    <!-- ADD CARDS HERE -->
    </body>
    <h1>${answers.ManagerName}</h1>

</html>`;
};
// ______________________________________________________________________________________________________

// note: REMEMBER, YOU DECIDE WHERE THE name's ARE GOING VIA TEMPLATE LITERALS
const userPrompt = () => {
return inquirer
    .prompt([
        {
            type: 'input',
            name: 'ManagerName',
            message: 'What is your managers name?',
        },
        {
            type: 'input',
            name: 'ManagerID',
            message: 'What is your managers ID?',
        },
        {
            type: 'input',
            name: 'ManagerEmail',
            message: 'What is your managers email?',
        },
        {
            type: 'input',
            name: 'ManagerOfficeNumber',
            message: 'What is your managers office number?',
        },
    ])
    // IF YOU COMMENT THIS OUT AND RUN node index.js
    // .then((res) => {
    //     console.log(res);
    //     const myManager = new Manager (
    //         res.ManagerName,
    //         res.ManagerID,
    //         res.ManagerEmail,
    //         res.ManagerOfficeNumber
    //     );
    //     console.log(myManager);
    //     myManager.logManagerValues();
    //     // MENU Prompt
    //     // inquirer

    // })
}
// ______________________________________________________________________________________________________

const init = () => {
    userPrompt()
    .then((answers) => {
        const HTMLContent = makeHTML(answers);

        fs.writeFile('index.html', HTMLContent, (err) =>
            err ? console.log(err) : console.log('Created your new team!')
        );

})};


init();



// {
//     type: 'expand',
//     name: 'ThreeChoices',
//     message: 'Any engineers, interns, or are you finished?',
//     choices: [
//         {
//             key: 'a',
//             name: 'Engineer',
//             value: 'EngineerChoice'
//         },
//         {
//             key: 'b',
//             name: 'Intern',
//             value: 'InternChoice'
//         },
//         {
//             key: 'c',
//             name: 'End',
//             value: 'EngineerChoice'
//         },
//     ]
// },