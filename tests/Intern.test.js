const Intern = require('../lib/Intern');

describe('Constructor', () => {
    it('Intern extends Class should exist', () => {
        expect(new Intern)
    });

    it('getSchool should return true', () => {

        expect(getGithub()).toBe(true);
    })

    it('getRole should return true', () => {

        expect(getRole()).toBe(true);
    })
})