import PageDeleteEmployee from "../../support/PageObject/PageDeleteEmployee.cy"
const dataEmployee = require ("../../fixtures/OrangeHrm/employee.json")

describe('Delete Employee Functionality', () => { // test suite
    const DeleteEmployee = new PageDeleteEmployee
    it('Cancle Delete Employee', () => { // test case
      cy.login() // panggil login
      cy.menuPim() // panggil menu pim
      DeleteEmployee.inputSearch(dataEmployee.firstName) // input nama di txtfield search
      DeleteEmployee.clickSearch() //click search button
      DeleteEmployee.clickList() // click data di list tabel
      DeleteEmployee.clickCancle() // click cancle button
    })

    it('Data Employee No Found', () => {
      cy.login() // panggil login
      cy.menuPim() // panggil menu pim
      DeleteEmployee.inputSearch(dataEmployee.dataTestNotFound) // input search data not found
      DeleteEmployee.clickSearch() // click search button
      // validasi
      DeleteEmployee.checkNotFound() // check not found
    })
    
    it('Delete Employee', () => {
      cy.login() // panggil login
      cy.menuPim() // panggil menu pim
      DeleteEmployee.inputSearch(dataEmployee.firstName +' '+ dataEmployee.lastName) // input nama di txtfield search
      DeleteEmployee.clickSearch() //click search button
      DeleteEmployee.clickList() // click data di list tabel
      DeleteEmployee.clickDeleteBtn() // click delete 
      // validasi
      DeleteEmployee.checkMessage() // check message succes delete
    })
  
   
  })