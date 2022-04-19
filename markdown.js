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
        <!-- Manager Card -->
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h2 class="card-title">Name</h2>
            <h3 class="card-text">Manager</h3>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: </li>
            <li class="list-group-item">Email: </li>
            <li class="list-group-item">Office Number: </li>
            </ul>
        </div>

        <!-- Engineer Card -->
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h2 class="card-title">Name</h2>
            <h3 class="card-text">Engineer</h3>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: </li>
            <li class="list-group-item">Email: </li>
            <li class="list-group-item">GitHub: </li>
            </ul>
        </div>

        <!-- Engineer Card -->
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h2 class="card-title">Name</h2>
            <h3 class="card-text">Engineer</h3>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: </li>
            <li class="list-group-item">Email: </li>
            <li class="list-group-item">GitHub: </li>
            </ul>
        </div>

        <!-- Engineer Card -->
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h2 class="card-title">Name</h2>
            <h3 class="card-text">Engineer</h3>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: </li>
            <li class="list-group-item">Email: </li>
            <li class="list-group-item">GitHub: </li>
            </ul>
        </div>

        <!-- Intern Card -->
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h2 class="card-title">Name</h2>
            <h3 class="card-text">Intern</h3>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: </li>
            <li class="list-group-item">Email: </li>
            <li class="list-group-item">School: </li>
            </ul>
        </div>

        <!-- Intern Card -->
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h2 class="card-title">Name</h2>
            <h3 class="card-text">Intern</h3>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: </li>
            <li class="list-group-item">Email: </li>
            <li class="list-group-item">School: </li>
            </ul>
        </div>
    </body>

</html>`;
};

makeHTML();