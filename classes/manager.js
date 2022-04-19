class Manager {
    constructor(name, id, email, officeNumber) {
        this.ManagerName = name;
        this.ManagerID = id;
        this.ManagerEmail = email;
        this.ManagerOfficeNumber = officeNumber;
    }

    logManagerValues = function() {
        console.log(`Your manager's info: \n
            ${this.ManagerName}\n
            ${this.ManagerID}\n
            ${this.ManagerEmail}\n
            ${this.ManagerOfficeNumber}\n
            ---------------------------
            `
        );
    };   
}

module.exports = Manager;