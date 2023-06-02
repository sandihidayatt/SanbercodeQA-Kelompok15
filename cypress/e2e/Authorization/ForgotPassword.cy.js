describe('Reset Password Functionality', () => {
  it('successResetPassword', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('.orangehrm-login-forgot > .oxd-text').click()
    cy.get('.oxd-input').type("Admin")
    cy.get('.oxd-button--secondary').click()
    cy.get('.oxd-text--h6').should('be.visible')
  })
  it('resetEmptyPassword', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('.orangehrm-login-forgot > .oxd-text').click()
    cy.get('.oxd-input').type(" ")
    cy.get('.oxd-button--secondary').click()
    cy.get('.oxd-text--h6').should('be.visible')
  })
  it('resetInvalidPassword', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('.orangehrm-login-forgot > .oxd-text').click()
    cy.get('.oxd-input').type("Sandi")
    cy.get('.oxd-button--secondary').click()
    cy.get('.oxd-text--h6').should('be.visible')
  })
})