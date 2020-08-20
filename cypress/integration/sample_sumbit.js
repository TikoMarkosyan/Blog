describe("form check ",() => {
    beforeEach(() => {
        // seed a post in the DB that we control from our tests
        cy.request('POST', 'http://localhost:3000/contact', {
            email: 'First Post',
            name: "dfdd",
            lastname: '...'
        })

        // seed a user in the DB that we can control from our tests
    })
    it('successfully loads', () => {

        cy.visit('http://localhost:3000/contact')
        cy.server();
        cy.route('POST', 'http://localhost:3000/contact', '').as('userSuccess')
        cy.get('input[name="firstName"]')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com');


    })
})