import PageAddEmployee from "../../support/PageObject/PageAddEmployee.cy"
const dataEmployee = require("../../fixtures/OrangeHrm/employee.json")

describe('Add Employee Fuctionality', () => { // test suite
  const AddEmployee = new PageAddEmployee
    it('Success Add Employee', () => { // test case
      cy.login() // panggil login
      cy.menuAddEmployee() // menuju halaman add employee
      AddEmployee.inputFirstName(dataEmployee.firstName) // input first name
      AddEmployee.inputMiddleName(dataEmployee.middleName) // input middle name
      AddEmployee.inputLastName(dataEmployee.lastName) // input last name
      AddEmployee.inputidEmployee(dataEmployee.idEmployee) // input id employee
      cy.get('.oxd-button--secondary').click() //save
      cy.get('.oxd-text--toast-message').should('be.visible') //message success
      cy.get('.orangehrm-edit-employee-name > .oxd-text').should('be.visible')//halaman profil
      cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').should('have.value', 'Iris'); //value txtfield firstname
      cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').should('have.value', 'Rose') //value txtfield lastname  
    })

    it('Add Employee Empty FirstName', () => {
      cy.login() // panggil login
      cy.menuAddEmployee() // menuju halaman add employee
      cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type(' ') //kosongkan firstname
      cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('Jasmine') //middleName
      cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Iris') //lastname
      cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('058881') //id employee
      cy.get('.oxd-button--secondary').click() //save
      cy.get('.--name-grouped-field > :nth-child(1) > .oxd-text').should('be.visible') //username required
      cy.url().should('include','/web/index.php/pim/addEmployee') //url form add employee
    })

    //   it('Add Employee Empty LastName', () => {
    //   cy.login() // panggil login
    //   cy.menuAddEmployee() // menuju halaman add employee
    //   cy.get('.orangehrm-card-container > .oxd-text--h6').should('be.visible') //halaman add employee
    //   cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Iris') //firtname
    //   cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('Jasmine') //middleName
    //   cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type(' ') //kosongkan lastname
    //   cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('058881') //id employee
    //   cy.get('.oxd-button--secondary').click() //save
    //   cy.get('.--name-grouped-field > :nth-child(3) > .oxd-text').should('be.visible') //lastname required
    //   cy.url().should('include','/web/index.php/pim/addEmployee') //url halaman add employee
    // })
  
  })
  
  
  