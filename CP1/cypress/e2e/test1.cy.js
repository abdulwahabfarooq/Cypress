/// <reference types = "cypress"/>

it('Google Search', () => {
    cy.visit('https://google.com')
    
    cy.get('#L2AGLb > .QS5gu')
      .click()

    cy.get('#APjFqb').type('Abdul Wahab Farooq LinkedIn{Enter}')
    
    cy.get('#rso > :nth-child(1) > .g > .N54PNb > .jGGQ5e > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb')
      .click()

   // cy.contains('Buscar con Google').click({force:true})
})