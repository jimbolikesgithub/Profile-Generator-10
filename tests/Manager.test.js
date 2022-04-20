const Manager = require('../lib/Manager');

describe('Constructor', () => {
    it('Manager extends Class should exist', () => {
        expect(new Manager)
    });

    it('managerInfo() should return true', () => {

        expect(managerInfo()).toBe(true);
    })

    it('getRole should return true', () => {

        expect(getRole()).toBe(true);
    })
})