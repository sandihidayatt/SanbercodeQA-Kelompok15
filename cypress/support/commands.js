// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
Cypress.Commands.add('ketik', (locator,value) =>{
    cy.get(locator)
    .should('be.visible')
    .type(value)
})
// untuk memanggil login -> cy.login()
Cypress.Commands.add('login', ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin') //username
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123') //password
    cy.get('.oxd-button').click() //login button
})
// untuk ke menu PIM -> cy.menuPim()
Cypress.Commands.add('menuPim', ()=>{
    cy.get(':nth-child(2) > .oxd-main-menu-item').click() //menu pim
})
// untuk ke menu Add Employee -> cy.menuAddEmploye()
Cypress.Commands.add('menuAddEmployee', ()=>{
    cy.get(':nth-child(2) > .oxd-main-menu-item').click() //menu pim
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click() //menu add employee
})

// Yang lainnya buat disini sesuai kebutuhan masing-masing




//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })