const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github; //GitHub Username
    }

    getGithub() {
        return this.github;
    }

    // Overriden to return Engineer
    getRole() {
        return Engineer;
    }
}

module.exports = Engineer;