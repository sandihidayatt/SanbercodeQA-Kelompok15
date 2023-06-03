import PageAddEmployee from "../../support/PageObject/PageAddEmployee.cy"
import EmployeeCreateUser from "../../support/PageObject/PageAddEmployeeCreateUser.cy";
const dataEmployee = require("../../fixtures/OrangeHrm/employee.json") //memanggil json data employee

describe('Add Employee Functionality', () => {
  // Random adjectives
const adjectives = ['happy', 'sunny', 'clever', 'playful', 'brave', 'kind', 'creative','rainbow','rain','star','love'];
// Random nouns
const nouns = ['cat', 'dog', 'bird', 'flower', 'tree', 'mountain', 'river','jasmine', 'iris','mawar','melati','anggrek','cantik'];
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
    AddEmployee.messageSuccess() // check pesan success
    AddEmployee.checkProfil() // check profil
    AddEmployee.checkFirstName() // check value txtfield first name
    AddEmployee.checkLastName() // check value textfield last name
  })

  // it('Add Employee Create User Invalid Username', () => {
  //   cy.login()
  //   cy.get(':nth-child(2) > .oxd-main-menu-item').click() //menu pim
  //   cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click() //menu add employee
  //   cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Iris') //firtname
  //   cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('Jasmine') //middleName
  //   cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Rose') //lastname
  //   cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('058881') //id 
  //   cy.get('.oxd-switch-input').click() //switchbutton
  //   cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Iris') //username
  //   cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('12345Iris') //password
  //   cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('12345Iris') // confirm pass
  //   cy.get('.oxd-button--secondary').click() //save
  //   cy.get('.oxd-input-group > .oxd-text').should('have.text','Should be at least 5 characters')
  //   cy.url().should('include','/web/index.php/pim/addEmployee') //url form add employee
  // })

  // it('Add Employee Create User Invalid Password', () => {
  //   cy.login()
  //   cy.get(':nth-child(2) > .oxd-main-menu-item').click() //menu pim
  //   cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click() //menu add employee
  //   cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Iris') //firtname
  //   cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('Jasmine') //middleName
  //   cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Rose') //lastname
  //   cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('058881') //id 
  //   cy.get('.oxd-switch-input').click() //switchbutton
  //   cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username) //username
  //   cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('123') //password
  //   cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('123') // confirm pass
  //   cy.get('.oxd-button--secondary').click() //save
  //   cy.get('.user-password-cell > .oxd-input-group > .oxd-text').should('have.text','Should have at least 7 characters')
  //   cy.url().should('include','/web/index.php/pim/addEmployee') //url form add employee
  // })

  // it ('Add Employee Create User Empty Username', () => {
  //   cy.login()
  //   cy.get(':nth-child(2) > .oxd-main-menu-item').click() //menu pim
  //   cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click() //menu add employee
  //   cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Iris') //firtname
  //   cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('Jasmine') //middleName
  //   cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Rose') //lastname
  //   cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('058881') //id 
  //   cy.get('.oxd-switch-input').click() //switchbutton
  //   cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type(' ') //username
  //   cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('12345Iris') //password
  //   cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('12345Iris') // confirm pass
  //   cy.get('.oxd-button--secondary').click() //save
  //   // cy.get('.user-password-cell > .oxd-input-group > .oxd-text').should('have.text','Should have at least 7 characters')
  //   cy.url().should('include','/web/index.php/pim/addEmployee') //url form add employee
  //   cy.get('.oxd-input-group > .oxd-text').should('have.text','Required')
  // })

  // it ('Add Employee Create User Empty Password', () => {
  //   cy.login()
  //   cy.get(':nth-child(2) > .oxd-main-menu-item').click() //menu pim
  //   cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click() //menu add employee
  //   cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Iris') //firtname
  //   cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('Jasmine') //middleName
  //   cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Rose') //lastname
  //   cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('058881') //id 
  //   cy.get('.oxd-switch-input').click() //switchbutton
  //   cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username) //username
  //   cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type(' ') //password
  //   cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(' ') // confirm pass
  //   cy.get('.oxd-button--secondary').click() //save
  //   // cy.get('.user-password-cell > .oxd-input-group > .oxd-text').should('have.text','Should have at least 7 characters')
  //   cy.url().should('include','/web/index.php/pim/addEmployee') //url form add employee
  //   cy.get('.user-password-cell > .oxd-input-group > .oxd-text').should('have.text','Required')
  //   cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('have.text','Required')
  // })

  // it ('Add Employee Create User Diferent Password and Confirm Password', () => {
  //   cy.login()
  //   cy.get(':nth-child(2) > .oxd-main-menu-item').click() //menu pim
  //   cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click() //menu add employee
  //   cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Iris') //firtname
  //   cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('Jasmine') //middleName
  //   cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Rose') //lastname
  //   cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('058881') //id 
  //   cy.get('.oxd-switch-input').click() //switchbutton
  //   cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username) //username
  //   cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('54321Iris') //password
  //   cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('12345Iris') // confirm pass
  //   cy.get('.oxd-button--secondary').click() //save
  //   // cy.get('.user-password-cell > .oxd-input-group > .oxd-text').should('have.text','Should have at least 7 characters')
  //   cy.url().should('include','/web/index.php/pim/addEmployee') //url form add employee
  //   cy.get('.oxd-input-group > .oxd-text').should('be.visible')
  // })
})