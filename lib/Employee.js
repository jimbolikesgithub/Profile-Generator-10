class Employee {
    constructor(name, id, email) {
        // this value equals the newly created instance
        this.name = name;
        this.id = id;
        this.email = email;
} 

    // Method will return the name which was input
    getName() {
        return this.name;
    }

    // Method will return the id which was input
    getId() {
        return this.id
    }

    // Method will return the email which was input
    getEmail() {
        return this.email
    }

    getRole() {
        return Employee;
    }

    

}

// Inherits from Parent the constructor, fields, and methods
// class GetRole extends Employee {
//     constructor(name, id, email) {
//         super(name, id, email)
//         this.name = name;
//         this.id = id;
//         this.email = email;
//     }
//     // returns Employee;

//     // --- TEST -- WORKS --- //
//     // useGetRole() {
//     //     console.log(`This is the id: ${this.id}`)
//     // }
//     // --- TEST -- WORKS --- //
// }

// --- TEST -- WORKS --- //
// const newRole = new GetRole('Bob', 26, 'something.something@bruh.com');

// newRole.useGetRole();
// --- TEST -- WORKS --- //

module.exports = Employee;

// Just a lil ASK BCS advice:
// A little tip: I throw the word explained into my searches. It often helps me find really helpful explanations of topics