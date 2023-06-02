class PageAddEmployee {
    firstName = '.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input'
    middleName = ':nth-child(2) > :nth-child(2) > .oxd-input'
    lastName = ':nth-child(3) > :nth-child(2) > .oxd-input'
    idEmployee = '.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input'
    btnSave = '.oxd-button--secondary'
    msgSucces = '.oxd-text--toast-message'
    profil = '.orangehrm-edit-employee-name > .oxd-text'
    valueFirstName = '.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input'
    valueLastName = ':nth-child(3) > :nth-child(2) > .oxd-input'

    inputFirstName(firstName) {
        cy.input(this.firstName,firstName)
    }
    inputMiddleName(middleName) {
        cy.input(this.middleName,middleName)
    }
    inputLastName(lastName) {
        cy.input(this.lastName,lastName)
    }
    inputidEmployee(idEmployee) {
        cy.input(this.idEmployee,idEmployee)
    }



}

export default PageAddEmployee