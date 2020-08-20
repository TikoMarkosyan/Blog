describe('My First Test', function (prop){
    console.log(prop)
    it('Visits the kitchen sink', function (){
        cy.visit('http://localhost:3000/');
        cy.url().should('include','/');
    })
    it('should ', function () {
        cy.visit('http://localhost:3000/contact')
        cy.get('input[name=firstName]').type("tikomarkosyan@gmail.com").should('exist','tiko@gdhdgdg.com')

    });

});
