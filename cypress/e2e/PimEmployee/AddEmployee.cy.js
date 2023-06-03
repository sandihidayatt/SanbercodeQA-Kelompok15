import PageAddEmployee from "../../support/PageObject/PageAddEmployee.cy" //memanggil file PageAddEmployee
const dataEmployee = require("../../fixtures/OrangeHrm/employee.json") //memanggil json data employee

describe('Add Employee Fuctionality', () => { // test suite
  const AddEmployee = new PageAddEmployee
    it('Success Add Employee', () => { // test case
      cy.login() // panggil login
      cy.menuAddEmployee() // menuju halaman add employee
      AddEmployee.inputFirstName(dataEmployee.firstName) // input first name
      AddEmployee.inputMiddleName(dataEmployee.middleName) // input middle name
      AddEmployee.inputLastName(dataEmployee.lastName) // input last name
      AddEmployee.inputidEmployee(dataEmployee.idEmployee) // input id employee
      AddEmployee.clickSave() // click save
      // validasi
      AddEmployee.messageSuccess() // check pesan success
      AddEmployee.checkProfil() // check profil
      AddEmployee.checkFirstName() // check value txtfield first name
      AddEmployee.checkLastName() // check value textfield last name
    })

    it('Add Employee Empty FirstName', () => {
      cy.login() // panggil login
      cy.menuAddEmployee() // menuju halaman add employee
      AddEmployee.inputFirstName(dataEmployee.emptyFirstName) // input empty first name
      AddEmployee.inputMiddleName(dataEmployee.middleName) // input middle name
      AddEmployee.inputLastName(dataEmployee.lastName) // input last name
      AddEmployee.inputidEmployee(dataEmployee.idEmployee) // input id employee
      AddEmployee.clickSave() // click btn save
      // validasi
      AddEmployee.checkRequiredFirstName()// check required firstname
      AddEmployee.checkUrl() //check url
    })

      it('Add Employee Empty LastName', () => {
      cy.login() // panggil login
      cy.menuAddEmployee() // menuju halaman add employee
      AddEmployee.inputFirstName(dataEmployee.firstName) // input first name
      AddEmployee.inputMiddleName(dataEmployee.middleName) // input middle name
      AddEmployee.inputLastName(dataEmployee.emptyLastName) // input empty last name
      AddEmployee.inputidEmployee(dataEmployee.idEmployee) // input id employee
      AddEmployee.clickSave() // click btn save
      // validasi
      AddEmployee.checkRequiredLastName()// check required lastname
      AddEmployee.checkUrl() //check url
    })

    it('Add Employee Empty FirstName and LastName', () => {
      cy.login() // panggil login
      cy.menuAddEmployee() // menuju halaman add employee
      AddEmployee.inputFirstName(dataEmployee.emptyFirstName) // input empty first name
      AddEmployee.inputMiddleName(dataEmployee.middleName) // input middle name
      AddEmployee.inputLastName(dataEmployee.emptyLastName) // input empty last name
      AddEmployee.inputidEmployee(dataEmployee.idEmployee) // input id employee
      AddEmployee.clickSave() // click btn save
      // validasi
      AddEmployee.checkRequiredFirstName()// check required firstname
      AddEmployee.checkRequiredLastName()// check required lastname
      AddEmployee.checkUrl() //check url
    })

    it('Cancle Add Employee', () => {
      cy.login() // panggil login
      cy.menuAddEmployee() // menuju halaman add employee
      AddEmployee.inputFirstName(dataEmployee.firstName) // input empty first name
      AddEmployee.inputMiddleName(dataEmployee.middleName) // input middle name
      AddEmployee.inputLastName(dataEmployee.lastName) // input empty last name
      AddEmployee.inputidEmployee(dataEmployee.idEmployee) // input id employee
      AddEmployee.clickCancle() // click btn cancle
      // validasi
      AddEmployee.checkUrlCancle() //check url
    })
  })
  
  
  