const cypress = require("cypress")

describe('Testing something in google', () => {
    it('I can search something', () => {
        cy.visit('https://www.google.com')
        cy.get('input[title="Search"]').type('camasutra').type('{enter}')
    })
})