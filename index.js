// Hajime!

// Imports inquirer
const inquirer = require('inquirer');
// console.log(inquirer) <--- Works

// Reads and writes files
const fs = require('fs');
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

makeHTML();