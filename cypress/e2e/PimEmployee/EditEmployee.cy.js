import PageEditEmployee from "../../support/PageObject/PageEditEmployee.cy"
const dataEmployee = require("../../fixtures/OrangeHrm/employee.json")

describe('Edit Employee Functionality', () => {
  const EditEmployee = new PageEditEmployee
  it('Edit Employee Empty Firstname', () => {
    cy.login() // panggil login
    cy.menuPim() // panggil menu pim
    EditEmployee.inputSearch(dataEmployee.firstName +' '+ dataEmployee.lastName) // input nama
    EditEmployee.clickSearch() // click search
    EditEmployee.clickBtnList() // click list
    EditEmployee.clickBtnEdit() // click edit
    EditEmployee.inputFirstname(' ') // input empty first name
    EditEmployee.inputLastname(dataEmployee.lastName) // input lastname
    EditEmployee.inputNickname(dataEmployee.nickname) // input nickname
    EditEmployee.inputOtherId(dataEmployee.otherId) // input other id
    EditEmployee.clickSave() // click save
    //validasi
    EditEmployee.checkRequired() //check required
  })

  it('Edit Employee Empty Lastname', () => {
    cy.login() // panggil login
    cy.menuPim() // panggil menu pim
    EditEmployee.inputSearch(dataEmployee.firstName +' '+ dataEmployee.lastName) // input nama
    EditEmployee.clickSearch() // click search
    EditEmployee.clickBtnList() // click list
    EditEmployee.clickBtnEdit() //click edit
    EditEmployee.inputFirstname(dataEmployee.firstName) // input first name
    EditEmployee.inputLastname(' ') // input empty lastname
    EditEmployee.inputNickname(dataEmployee.nickname) // input nickname
    EditEmployee.inputOtherId(dataEmployee.otherId) // input other ID
    EditEmployee.clickSave() // click save
    //validasi
    EditEmployee.checkRequired2() // check reaured
  })

  it('Edit Employee Empty Firstname and Lastname', () => {
    cy.login() // panggil login
    cy.menuPim() // panggil menu pim
    EditEmployee.inputSearch(dataEmployee.firstName +' '+ dataEmployee.lastName) // input name
    EditEmployee.clickSearch() // click search
    EditEmployee.clickBtnList() // click list
    EditEmployee.clickBtnEdit() // click edit
    EditEmployee.inputFirstname(' ') // input empty firstname
    EditEmployee.inputLastname(' ') // input empty lastname
    EditEmployee.inputNickname(dataEmployee.nickname) // input nockname
    EditEmployee.inputOtherId(dataEmployee.otherId) // input other id
    EditEmployee.clickSave() // click save
    //validasi
    EditEmployee.checkRequired() // check required firstname
    EditEmployee.checkRequired2() // check required lastname
  })

  it('Edit Contact Employee', () => {
    cy.login() // panggil login
    cy.menuPim() // panggil menu pim
    EditEmployee.inputSearch(dataEmployee.firstName +' '+ dataEmployee.lastName) // input nama
    EditEmployee.clickSearch() // click search
    EditEmployee.clickBtnList() // click list
    EditEmployee.clickBtnEdit() // click edit
    EditEmployee.clickMenuContact() // click menu contact
    EditEmployee.inputKota(dataEmployee.ciy) // input city
    EditEmployee.inputHp(dataEmployee.hp) // input no hp
    EditEmployee.inputEmail(dataEmployee.email) // input email
    EditEmployee.clickSaveContact() // click save contact
    //validasi
    EditEmployee.checkValueCity() // check value textfield city
  })

  it('Success Edit Employee', () => {
    cy.login() // panggil login
    cy.menuPim() // panggil menu pim
    EditEmployee.inputSearch(dataEmployee.firstName +' '+ dataEmployee.lastName) // input nama
    EditEmployee.clickSearch() // click search
    EditEmployee.clickBtnList() // click list
    EditEmployee.clickBtnEdit() // click edit
    EditEmployee.inputFirstname('Bunga') //first name
    EditEmployee.inputLastname('Mawar') //last name
    EditEmployee.inputNickname(dataEmployee.nickname)
    EditEmployee.inputOtherId(dataEmployee.otherId) //other ID
    EditEmployee.clickSave() // click save
    //validasi
    EditEmployee.checkSucces() // check message success
    EditEmployee.checkValueFirst() //check value firstname
    EditEmployee.checkValueLast() // check value lastname
  })
})
