# HW 10 TO-DOs

1. Install Inquirer and Jest before ANYTHING ELSE
    - Make sure you check package.json to confirm their presence
    - You must also have a package-lock.json once installing (it should be there automatically)
2. Create a prompt
    - Use console.log to check the prompt works...
    - ...BEFORE appending the data to generateHTML function
    - Will include the following formatted team roster:
        <!--  -->
        * WHEN node manager.js --> Team Manager's name, Employee ID, Email Address, Office Number...
            + ...THEN presented w/option to add an engineer OR intern OR finish building team
        * WHEN engineer option --> Engineer's Name, Employee ID, Email Address, GitHub username...
            + ...THEN taken back to menu
        * WHEN intern option --> Intern's Name, Employee ID, Email Address, School...
            + ...THEN taken back to menu
        * WHEN decided to finish building team...
            + ...THEN exit application; HTML is generated
3. Create generateHTML function
    - This will create separate boxes which will hold the aformentioned data inside of it