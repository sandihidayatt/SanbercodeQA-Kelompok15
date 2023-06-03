class PageDeleteEmployee {
    search = ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input' // locator search by name
    btnSearch = '.oxd-form-actions > .oxd-button--secondary' // locator button list
    btnList = ':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon' // locator button list
    btnCancle = '.oxd-button--text' // locator cancle button 
    search = ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input'
    msgNotFound = '.orangehrm-horizontal-padding > .oxd-text' // locator message not found
    deleteBtn = '.orangehrm-modal-footer > .oxd-button--label-danger' // locator delete button
    msgSuccesDelete = '.oxd-text--toast-message' // locator message succes delete

    inputSearch(firstName) {
        cy.input(this.search, firstName)
    }

    clickSearch() { //fungsi click search
        cy.get(this.btnSearch).click({force:true})
    }

    clickList() { //fungsi click data in list
        cy.get(this.btnList).click({force:true})
    }

    clickCancle() { //fungsi click cancle button
        cy.get(this.btnCancle).click({force:true})
    }

    checkNotFound() { // fungsi check not found
        cy.get(this.msgNotFound).should('be.visible')
    }

    clickDeleteBtn() { //fungsi click cancle button
        cy.get(this.deleteBtn).click()
    }

    checkMessage() { // fungsi check pesan required lastname
        cy.get(this.msgSuccesDelete).should('be.visible')
    }
}

export default PageDeleteEmployee