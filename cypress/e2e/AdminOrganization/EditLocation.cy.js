describe('template spec', () => {
  it('passes', () => {
    cy.login()
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Naufal")
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Malang")
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    //edit location failed


  })
})