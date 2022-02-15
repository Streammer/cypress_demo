describe("My first test", () => {
    it("Visit the onliner", () => {
        cy.visit('https://www.onliner.by/')
            // cy.contains('type').click()
            //     // Should be on a new URL which includes '/commands/actions'
            // cy.url().should('include', '/commands/actions')
        cy.get('.fast-search__input').click()



    })
})