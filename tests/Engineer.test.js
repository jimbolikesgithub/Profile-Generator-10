const Engineer = require('../lib/Engineer');

describe('Constructor', () => {
    it('Engineer extends Class should exist', () => {
        expect(new Engineer)
    });

    it('getGithub should return true', () => {

        expect(getGithub()).toBe(true);
    })

    it('getRole should return true', () => {

        expect(getRole()).toBe(true);
    })
})