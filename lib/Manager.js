const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }

    managerInfo = function () {
        console.log(
            
            `Your manager's card includes: \n
            ${this.name} \n
            ${this.id} \n
            ${this.email} \n
            ${this.officeNumber} \n
            -----
            `
        );
    }

    // Overriden to return Engineer
    getRole() {
        return Manager;
    }
}

module.exports = Manager;