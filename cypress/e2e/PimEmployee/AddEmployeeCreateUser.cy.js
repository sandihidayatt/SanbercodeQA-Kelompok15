import PageAddEmployee from "../../support/PageObject/PageAddEmployee.cy"
import EmployeeCreateUser from "../../support/PageObject/PageAddEmployeeCreateUser.cy";
const dataEmployee = require("../../fixtures/OrangeHrm/employee.json") //memanggil json data employee

describe('Add Employee Functionality', () => {
  // Random adjectives
const adjectives = ['happy', 'sunny', 'clever', 'playful', 'brave', 'kind', 'creative','rainbow','rain','star','love','blue','pink','yellow','red','green'];
// Random nouns
const nouns = ['cat', 'dog', 'bird', 'flower', 'tree', 'mountain', 'river','jasmine', 'iris','mawar','melati','anggrek','cantik','indah','aurora','sukma','bumi'];
// Generate a random username
function generateRandomUsername() {
  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  return randomAdjective + '-' + randomNoun;
}
  const username = generateRandomUsername();
  const AddEmployee = new PageAddEmployee
  const CreateUser = new EmployeeCreateUser
  it('Add Employee with Create User', () => {
    cy.login() // panggil login
    cy.menuAddEmployee() //panggil halaman add employee
    AddEmployee.inputFirstName(dataEmployee.firstName) // input firstname
    AddEmployee.inputMiddleName(dataEmployee.middleName) // input middlename
    AddEmployee.inputLastName(dataEmployee.lastName) //input lastname
    AddEmployee.inputidEmployee(dataEmployee.idEmployee) // input id employee
    CreateUser.clickSwitch() //click swith button
    CreateUser.inputUsername(username) // input username
    CreateUser.inputPasword(dataEmployee.password) //input password
    CreateUser.inputConfirmPass(dataEmployee.password) //input confirm password
    AddEmployee.clickSave() // click save
    //validasi
    AddEmployee.messageSuccess() // check pesan success
    AddEmployee.checkProfil() // check profil
    AddEmployee.checkFirstName() // check value txtfield first name
    AddEmployee.checkLastName() // check value textfield last name
  })

  it('Add Employee Create User Invalid Username', () => {
    cy.login() // panggil login
    cy.menuAddEmployee() //panggil halaman add employee
    AddEmployee.inputFirstName(dataEmployee.firstName) // input firstname
    AddEmployee.inputMiddleName(dataEmployee.middleName) // input middlename
    AddEmployee.inputLastName(dataEmployee.lastName) //input lastname
    AddEmployee.inputidEmployee(dataEmployee.idEmployee) // input id employee
    CreateUser.clickSwitch() //click swith button
    CreateUser.inputUsername('Iris') // input username
    CreateUser.inputPasword(dataEmployee.password) //input password
    CreateUser.inputConfirmPass(dataEmployee.password) //input confirm password
    AddEmployee.clickSave() // click save
    //validasi
    CreateUser.checkMessageInvalid() // validasi message invalid user
    CreateUser.checkUrlAddEmployee() // check url
  })

  it('Add Employee Create User Invalid Password', () => {
    cy.login() // panggil login
    cy.menuAddEmployee() //panggil halaman add employee
    AddEmployee.inputFirstName(dataEmployee.firstName) // input firstname
    AddEmployee.inputMiddleName(dataEmployee.middleName) // input middlename
    AddEmployee.inputLastName(dataEmployee.lastName) //input lastname
    AddEmployee.inputidEmployee(dataEmployee.idEmployee) // input id employee
    CreateUser.clickSwitch() //click swith button
    CreateUser.inputUsername(username) // input username
    CreateUser.inputPasword('123') //input password
    CreateUser.inputConfirmPass('123') //input confirm password
    AddEmployee.clickSave() // click save
    //validasi
    CreateUser.checkMessageInvalidPass() // check message invalid password
    CreateUser.checkUrlAddEmployee() // check url
  })

  it ('Add Employee Create User Empty Username', () => {
    cy.login() // panggil login
    cy.menuAddEmployee() //panggil halaman add employee
    AddEmployee.inputFirstName(dataEmployee.firstName) // input firstname
    AddEmployee.inputMiddleName(dataEmployee.middleName) // input middlename
    AddEmployee.inputLastName(dataEmployee.lastName) //input lastname
    AddEmployee.inputidEmployee(dataEmployee.idEmployee) // input id employee
    CreateUser.clickSwitch() //click swith button
    CreateUser.inputUsername(" ") // input username
    CreateUser.inputPasword(dataEmployee.password) //input password
    CreateUser.inputConfirmPass(dataEmployee.password) //input confirm password
    AddEmployee.clickSave() // click save
    //validasi
    CreateUser.checkUrlAddEmployee() // check url
    CreateUser.checkRequired() // check required
  })

  it ('Add Employee Create User Empty Password', () => {
    cy.login() // panggil login
    cy.menuAddEmployee() //panggil halaman add employee
    AddEmployee.inputFirstName(dataEmployee.firstName) // input firstname
    AddEmployee.inputMiddleName(dataEmployee.middleName) // input middlename
    AddEmployee.inputLastName(dataEmployee.lastName) //input lastname
    AddEmployee.inputidEmployee(dataEmployee.idEmployee) // input id employee
    CreateUser.clickSwitch() //click swith button
    CreateUser.inputUsername(username) // input username
    CreateUser.inputPasword(" ") //input password
    CreateUser.inputConfirmPass(" ") //input confirm password
    AddEmployee.clickSave() // click save
    //validasi
    CreateUser.checkUrlAddEmployee() // check url
    cy.get('.user-password-cell > .oxd-input-group > .oxd-text').should('have.text','Required')
    cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('have.text','Required')
  })

  it ('Add Employee Create User Diferent Password and Confirm Password', () => {
    cy.login() // panggil login
    cy.menuAddEmployee() //panggil halaman add employee
    AddEmployee.inputFirstName(dataEmployee.firstName) // input firstname
    AddEmployee.inputMiddleName(dataEmployee.middleName) // input middlename
    AddEmployee.inputLastName(dataEmployee.lastName) //input lastname
    AddEmployee.inputidEmployee(dataEmployee.idEmployee) // input id employee
    CreateUser.clickSwitch() //click swith button
    CreateUser.inputUsername(username) // input username
    CreateUser.inputPasword('12345Iris') //input password
    CreateUser.inputConfirmPass('54321Iris') //input confirm password
    AddEmployee.clickSave() // click save
    //validasi
    CreateUser.checkUrlAddEmployee() // check url
    cy.get('.oxd-input-group > .oxd-text').should('be.visible')
  })
})