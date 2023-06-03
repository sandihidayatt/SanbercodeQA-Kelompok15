class EmployeeCreateUser {

    switchButton = '.oxd-switch-input'
    username = ':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'
    password = '.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input'
    confirmPasssword = '.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'

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
}

export default EmployeeCreateUser