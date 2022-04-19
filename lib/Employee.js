const inquirer = require('inquirer')
// console.log(inquirer)

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    } 

    // Will return the name which was input
    getName() {
        return this.name;
    }

    // Will return the id which was input
    getId() {
        return this.id
    }

    // Will return the email which was input
    getEmail() {
        return this.email
    }

    class GetRole extends Employee {
        constructor(name, id, email) {
            super(name, id, email)
            this.name = name;
            this.id = id;
            this.email = email;
        }
    }
    
}


module.exports = Employee;