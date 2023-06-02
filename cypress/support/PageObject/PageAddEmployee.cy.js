const dataEmployee = require("../../fixtures/OrangeHrm/employee.json")

class PageAddEmployee {
    firstName = '.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input' // locator firstname
    middleName = ':nth-child(2) > :nth-child(2) > .oxd-input' // locator middle name
    lastName = ':nth-child(3) > :nth-child(2) > .oxd-input' // locator lastname
    idEmployee = '.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input' // locator id employee
    btnSave = '.oxd-button--secondary' //locator btn save
    msgSuccess = '.oxd-text--toast-message' // locator message success
    profil = '.orangehrm-edit-employee-name > .oxd-text' //locator profil
    requiredFirstName = '.--name-grouped-field > :nth-child(1) > .oxd-text' //locator required first name
    requiredLastName = '.--name-grouped-field > :nth-child(3) > .oxd-text' // locator last name
    urlAddEmployee = '/web/index.php/pim/addEmployee' // url halaman add employee
    btnCancle = '.oxd-button--ghost' // locator btn cancle
    urlCancle = '/web/index.php/pim/viewEmployeeList' // locator url menu pim jika cancle

    inputFirstName(firstName) { //fungsi input textfield firstname
        cy.input(this.firstName,firstName)
    }
    inputMiddleName(middleName) { //fungsi input textfield middle name
        cy.input(this.middleName,middleName)
    }
    inputLastName(lastName) { //fungsi input textfield last name
        cy.input(this.lastName,lastName)
    }
    inputidEmployee(idEmployee) { //fungsi input textfield id employee
        cy.input(this.idEmployee,idEmployee)
    }
    clickSave() { //fungsi click save
        cy.get(this.btnSave).click()
    }
    messageSuccess() { //fungsi cek message success
        cy.get(this.msgSuccess).should('be.visible')
    }
    checkProfil() { //fungsi cek profil
        cy.get(this.profil).should('be.visible')
    }
    checkFirstName() { //fungsi check value txtfield firstname
        cy.get(this.firstName).should('have.value',dataEmployee.firstName)
    }
    checkLastName() { //fungsi check value txtfield lastname
        cy.get(this.lastName).should('have.value',dataEmployee.lastName)
    }
    checkRequiredFirstName() { // fungsi check pesan required firstname
        cy.get(this.requiredFirstName).should('be.visible')
    }
    checkRequiredLastName() { // fungsi check pesan required lastname
        cy.get(this.requiredLastName).should('be.visible')
    }
    checkUrl() { // fungsi check url add employee
        cy.url().should('include',this.urlAddEmployee)
    }
    clickCancle() { //fungsi click cancle
        cy.get(this.btnCancle).click()
    }
    checkUrlCancle() { // fungsi check url cancle
        cy.url().should('include',this.urlCancle)
    }
}

export default PageAddEmployee // supaya bisa dipanggil ke hlmn/file lain