import PageEditEmployee from "../../support/PageObject/PageEditEmployee.cy"
const dataEmployee = require("../../fixtures/OrangeHrm/employee.json")

describe('Edit Employee Functionality', () => {
  const EditEmployee = new PageEditEmployee
  // it('Edit Employee Empty Firstname', () => {
  //   cy.login()
  //   cy.menuPim()
  //   EditEmployee.inputSearch(dataEmployee.firstName +' '+ dataEmployee.lastName)
  //   EditEmployee.clickSearch()
  //   EditEmployee.clickBtnList()
  //   EditEmployee.clickBtnEdit()
  //   EditEmployee.inputFirstname(' ')
  //   EditEmployee.inputLastname(dataEmployee.lastName)
  //   EditEmployee.inputNickname(dataEmployee.nickname)
  //   EditEmployee.inputOtherId(dataEmployee.otherId)
  //   EditEmployee.clickSave()
  //   //validasi
  //   EditEmployee.checkRequired()
  // })

  // it('Edit Employee Empty Lastname', () => {
  //   cy.login()
  //   cy.menuPim()
  //   EditEmployee.inputSearch(dataEmployee.firstName +' '+ dataEmployee.lastName)
  //   EditEmployee.clickSearch()
  //   EditEmployee.clickBtnList()
  //   EditEmployee.clickBtnEdit()
  //   EditEmployee.inputFirstname(dataEmployee.firstName)
  //   EditEmployee.inputLastname(' ')
  //   EditEmployee.inputNickname(dataEmployee.nickname)
  //   EditEmployee.inputOtherId(dataEmployee.otherId)
  //   EditEmployee.clickSave()
  //   //validasi
  //   EditEmployee.checkRequired2()
  // })

  it('Edit Employee Empty Firstname and Lastname', () => {
    cy.login()
    cy.menuPim()
    EditEmployee.inputSearch(dataEmployee.firstName +' '+ dataEmployee.lastName)
    EditEmployee.clickSearch()
    EditEmployee.clickBtnList()
    EditEmployee.clickBtnEdit()
    EditEmployee.inputFirstname(' ')
    EditEmployee.inputLastname(' ')
    EditEmployee.inputNickname(dataEmployee.nickname)
    EditEmployee.inputOtherId(dataEmployee.otherId)
    EditEmployee.clickSave()
    //validasi
    EditEmployee.checkRequired()
    EditEmployee.checkRequired2()
  })

  it('Edit Contact Employee', () => {
    cy.login()
    cy.menuPim()
    EditEmployee.inputSearch(dataEmployee.firstName +' '+ dataEmployee.lastName)
    EditEmployee.clickSearch()
    EditEmployee.clickBtnList()
    EditEmployee.clickBtnEdit()
    cy.get(':nth-child(2) > .orangehrm-tabs-item').click({force:true}) // menu contact
    cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Bandung') //city
    cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('0891234567') //no hp
    cy.get(':nth-child(9) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('mawar@gmail.com')
    cy.get('.oxd-form-actions > .oxd-button').click() //save
    //validasi
    cy.get('.oxd-toast').should('be.visible') // message succes
    cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.value','Bandung')

  })

  // it('Edit Emergency Employee', () => {
  //   cy.login()
  //   cy.menuPim()
  //   cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('Iris Rose') //Search name
  //   cy.get('.oxd-form-actions > .oxd-button--secondary').click({force:true}) //click search
  //   cy.get(':nth-child(1) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click({force:true})
  //   cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({force:true})
  //   // cy.get('.orangehrm-edit-employee-name > .oxd-text').should('have.text','Iris Rose')
  //   // cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').should('have.value','Iris')
  //   // cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').should('have.value','Rose')
  //   cy.get(':nth-child(3) > .orangehrm-tabs-item').click({force:true}) // menu emergancy contact
  //   cy.get(':nth-child(1) > .orangehrm-action-header > .oxd-button').click({force:true}) // add button
  //   cy.get(':nth-child(1) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Lion') //name contact
  //   cy.get(':nth-child(1) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Brother') //relationship
  //   cy.get(':nth-child(2) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('0573838')// telepon
  //   cy.get('.oxd-button--secondary').click({force:true}) //save
  //   cy.get('.oxd-toast').should('be.visible')
  //   cy.get('.oxd-table-row > :nth-child(2) > div').should('be.visible')
  //   cy.get('.oxd-table-row > :nth-child(4) > div').should('be.visible')

  // })

  // it('Edit Emergency Contact Employee Empty Name', () => {
  //   cy.login()
  //   cy.menuPim()
  //   cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('Iris Rose') //Search name
  //   cy.get('.oxd-form-actions > .oxd-button--secondary').click({force:true}) //click search
  //   cy.get(':nth-child(1) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click({force:true})
  //   cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({force:true})
  //   // cy.get('.orangehrm-edit-employee-name > .oxd-text').should('have.text','Iris Rose')
  //   // cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').should('have.value','Iris')
  //   // cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').should('have.value','Rose')
  //   cy.get(':nth-child(3) > .orangehrm-tabs-item').click({force:true}) // menu emergancy contact
  //   cy.get(':nth-child(1) > .orangehrm-action-header > .oxd-button').click({force:true}) // add button
  //   cy.get(':nth-child(1) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type(' ') //name contact
  //   cy.get(':nth-child(1) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Brother') //relationship
  //   cy.get(':nth-child(2) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('0573838')// telepon
  //   cy.get('.oxd-button--secondary').click({force:true}) //save
  //   cy.get('.oxd-input-group > .oxd-text').should('be.visible')

  // })

  // it('Edit Emergency Contact Employee Empty Relationship', () => {
  //   cy.login()
  //   cy.menuPim()
  //   cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('Iris Rose') //Search name
  //   cy.get('.oxd-form-actions > .oxd-button--secondary').click({force:true}) //click search
  //   cy.get(':nth-child(1) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click({force:true})
  //   cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({force:true})
  //   // cy.get('.orangehrm-edit-employee-name > .oxd-text').should('have.text','Iris Rose')
  //   // cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').should('have.value','Iris')
  //   // cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').should('have.value','Rose')
  //   cy.get(':nth-child(3) > .orangehrm-tabs-item').click({force:true}) // menu emergancy contact
  //   cy.get(':nth-child(1) > .orangehrm-action-header > .oxd-button').click({force:true}) // add button
  //   cy.get(':nth-child(1) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Lion') //name contact
  //   cy.get(':nth-child(1) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(' ') //relationship
  //   cy.get(':nth-child(2) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('0573838')// telepon
  //   cy.get('.oxd-button--secondary').click({force:true}) //save
  //   cy.get('.oxd-input-group > .oxd-text').should('be.visible')

  // })

  // it('Edit Emergency Contact Employee Empty Telphone', () => {
  //   cy.login()
  //   cy.menuPim()
  //   cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('Iris Rose') //Search name
  //   cy.get('.oxd-form-actions > .oxd-button--secondary').click({force:true}) //click search
  //   cy.get(':nth-child(1) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click({force:true})
  //   cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({force:true})
  //   // cy.get('.orangehrm-edit-employee-name > .oxd-text').should('have.text','Iris Rose')
  //   // cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').should('have.value','Iris')
  //   // cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').should('have.value','Rose')
  //   cy.get(':nth-child(3) > .orangehrm-tabs-item').click({force:true}) // menu emergancy contact
  //   cy.get(':nth-child(1) > .orangehrm-action-header > .oxd-button').click({force:true}) // add button
  //   cy.get(':nth-child(1) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Lion') //name contact
  //   cy.get(':nth-child(1) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Brother') //relationship
  //   cy.get(':nth-child(2) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type(' ')// telepon
  //   cy.get('.oxd-button--secondary').click({force:true}) //save
  //   cy.get('.oxd-input-group > .oxd-text').should('be.visible')
    
  // })

  // it('Edit Emergency Contact Employee Invalid Telphone', () => {
  //   cy.login()
  //   cy.menuPim()
  //   cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('Iris Rose') //Search name
  //   cy.get('.oxd-form-actions > .oxd-button--secondary').click({force:true}) //click search
  //   cy.get(':nth-child(1) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click({force:true})
  //   cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({force:true})
  //   // cy.get('.orangehrm-edit-employee-name > .oxd-text').should('have.text','Iris Rose')
  //   // cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').should('have.value','Iris')
  //   // cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').should('have.value','Rose')
  //   cy.get(':nth-child(3) > .orangehrm-tabs-item').click({force:true}) // menu emergancy contact
  //   cy.get(':nth-child(1) > .orangehrm-action-header > .oxd-button').click({force:true}) // add button
  //   cy.get(':nth-child(1) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Lion') //name contact
  //   cy.get(':nth-child(1) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Brother') //relationship
  //   cy.get(':nth-child(2) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('no 123')// telepon
  //   cy.get('.oxd-button--secondary').click({force:true}) //save
  //   cy.get('.oxd-input-group > .oxd-text').should('be.visible')
    
  // })


  // it('Success Edit Employee', () => {
  //   cy.login()
  //   cy.menuPim()
  //   cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('Iris Rose') //Search name
  //   cy.get('.oxd-form-actions > .oxd-button--secondary').click({force:true}) //click search
  //   cy.get(':nth-child(1) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click({force:true})
  //   cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({force:true})
  //   cy.get('.orangehrm-edit-employee-name > .oxd-text').should('have.text','Iris Rose')
  //   cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').should('have.value','Iris')
  //   cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').should('have.value','Rose')
  //   cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').clear().type('Bunga') //first name
  //   cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').clear().type('Mawar') //last name
  //   cy.get(':nth-child(1) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('Bunga')
  //   cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('10515174') //other ID
  //   cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()
  //   //validasi
  //   cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').should('be.visible')
  //   cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').should('have.value','Bunga')
  //   cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').should('have.value','Mawar')

  // })
})
