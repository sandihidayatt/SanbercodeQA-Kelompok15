class EmployeeCreateUser {

    switchButton = '.oxd-switch-input'
    username = ':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'
    password = '.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input'
    confirmPasssword = '.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    messageInvalidUsername = '.oxd-input-group > .oxd-text'
    messageInvalidPass = '.user-password-cell > .oxd-input-group > .oxd-text'
    urlFormAddEmployee = '/web/index.php/pim/addEmployee'
    required = '.oxd-input-group > .oxd-text'

    clickSwitch() { //fungsi click save
        cy.get(this.switchButton).click()
    }

    inputUsername(username) {
        cy.input(this.username, username)
    }

    inputPasword(password) {
        cy.input(this.password, password)
    }

    inputConfirmPass(confirmPasssword){
        cy.input(this.confirmPasssword, confirmPasssword)
    }

    checkMessageInvalid(){
        cy.get(this.messageInvalidUsername).should('have.text','Should be at least 5 characters')
    }
    checkMessageInvalidPass(){
        cy.get(this.messageInvalidUsername).should('be.visible')
    }

    checkUrlAddEmployee() {
        cy.url().should('include',this.urlFormAddEmployee)
    }

    checkRequired() {
        cy.get(this.required).should('have.text','Required')
    }

}

export default EmployeeCreateUser