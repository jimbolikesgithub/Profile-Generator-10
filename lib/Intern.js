const inquirer = require('inquirer')
// console.log(inquirer)
const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    // Overriden to return Engineer
    getRole() {
        return Intern;
    }
}

module.exports = Intern;