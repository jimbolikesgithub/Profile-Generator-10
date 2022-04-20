const Employee = require('../lib/Employee');

describe('Constructor', () => {
    it('The variables inside of the Employee Class should exist', () => {
        expect(new Employee)
    });

    it('getnName should return true', () => {

        expect(getName()).toBe(true);
    })

    it('getnID should return true', () => {

        expect(getId()).toBe(true);
    })

    it('getnName should return true', () => {

        expect(getEmail()).toBe(true);
    })

    it('getnRole should return true', () => {

        expect(getEmail()).toBe(true);
    })
})
