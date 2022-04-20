// Hajime!
// RUN 'npm init -y', 'npm install inquirer', 'npm install jest', and 'npm i' if you must... DO ALL OF THIS FIRST
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const markdown = require('./markdown');

// Used to push all inputs in HERE to be added into markdown.js
myTeam = [];

// Prompt Here:
generateTeamCards = () => {

    // Generate Team Prompt Function
    // -----------------------------
    const newTeam = () => {
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'choice',
                    choices: ['Manager', 'Engineer', 'Intern', 'Create Team'],
                    message: 'Do you want to add a manager, engineer, intern, or are you finished?'
                }
            ])
            .then((choices) => {
                // IF input is equal to one of the choices...send to that function OR finish setup
                if (choices === 'Engineer') {
                    // Engineer Prompt Function
                } else if (choices === 'Intern') {
                    // Intern Prompt Function
                } else if (choices === 'Create Team') {
                    // Function call to createMarkdownHtml HERE
                }
            })
    };

    // Generate Manager Prompt Function
    // --------------------------------
    const generateManager = () => {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'managerName',
                    message: 'Manager name?'
                },
                {
                    type: 'input',
                    name: 'managerID',
                    message: 'Manager ID?'
                },
                {
                    type: 'input',
                    name: 'managerEmail',
                    message: 'Manager Email?'
                },
                {
                    type: 'input',
                    name: 'managerNumber',
                    message: 'Manager office number?'
                },
            ])
            .then((res) => {
                // Log result
                console.log(res);
                // Import data from Manager.js
                const newManager = new Manager(
                    res.name,
                    res.id,
                    res.email,
                    res.officeNumber
                );
                // Push data into empty array to be used in markdown.js (to generate index.html)
                myTeam.push(newManager);
                // 
            })      
    };

    // Generate Engineer Prompt Function
    // ---------------------------------
    const generateEngineer = () => {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'engineerName',
                    message: 'Engineer name?'
                },
                {
                    type: 'input',
                    name: 'engineerID',
                    message: 'Engineer ID?'
                },
                {
                    type: 'input',
                    name: 'engineerEmail',
                    message: 'Manager Email?'
                },
                {
                    type: 'input',
                    name: 'engineerGithub',
                    message: 'Manager GithHub?'
                },
            ])
            .then((res) => {
                // Log result
                console.log(res);
                // Import data from Manager.js
                const newEngineer = new Engineer(
                    res.name,
                    res.id,
                    res.email,
                    res.github
                );
                // Push data into empty array to be used in markdown.js (to generate index.html)
                myTeam.push(newEngineer);
            })      
    };

    // Generate Intern Prompt Function
    // -------------------------------
    const generateIntern = () => {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'internName',
                    message: 'Manager name?'
                },
                {
                    type: 'input',
                    name: 'internID',
                    message: 'Intern ID?'
                },
                {
                    type: 'input',
                    name: 'internEmail',
                    message: 'Intern Email?'
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'What school did this intern attend?'
                },
            ])
            .then((res) => {
                // Log result
                console.log(res);
                // Import data from Manager.js
                const newIntern = new Intern(
                    res.name,
                    res.id,
                    res.email,
                    res.school
                );
                // Push data into empty array to be used in markdown.js (to generate index.html)
                myTeam.push(newIntern);
            })      
    };
}

// Run parent function
generateTeamCards();
