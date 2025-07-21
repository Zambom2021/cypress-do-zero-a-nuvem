Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
    cy.get('#firstName').type('Joao')
    cy.get('#lastName').type('das Neves')
    cy.get('#email').type('joaodasneves@gmail.com')
    cy.get('#open-text-area').type ('Teste!!!')
    cy.contains('button', 'Enviar').click()
})

Cypress.Commands.add('fillMandatoryFieldsAndSubmit_2', data => {
    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(data.text)
    cy.contains('button', 'Enviar').click()
})

Cypress.Commands.add('fillMandatoryFieldsAndSubmit_3', (data = {
    firstName: 'Jhon',
    lastName: 'Wick',
    email: 'jhonwick@killers.com',
    text: 'Murder'
}) => {

    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(data.text)
    cy.contains('button', 'Enviar').click()
})