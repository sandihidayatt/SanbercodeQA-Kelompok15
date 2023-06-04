class PageEditEmployee {
    search = ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input' // locator text field searc
    btnSearch = '.oxd-form-actions > .oxd-button--secondary' // locator button search
    btnList = ':nth-child(1) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon' // locator button list table
    btnEdit = ':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon' // locator btn edit
    firstname = '.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input' //locator textField firstname
    lastname = ':nth-child(3) > :nth-child(2) > .oxd-input' // locator lastname
    nickname = ':nth-child(1) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input' // locator nikname
    otherId = ':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input' // locator other ID
    save = ':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button' // locator btn save
    required = '.--name-grouped-field > :nth-child(1) > .oxd-text'
    requiredLastName = '.--name-grouped-field > :nth-child(3) > .oxd-text'
    menuContact = ':nth-child(2) > .orangehrm-tabs-item'
    kota = ':nth-child(3) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    hp = ':nth-child(6) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    email = ':nth-child(9) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'
    saveContact = '.oxd-form-actions > .oxd-button'
    msgSucces = '.oxd-text--toast-message'
    

    inputSearch(search) {
        cy.input(this.search,search) 
    }

    clickSearch(){
        cy.get(this.btnSearch).click({force:true})
    }
    
    clickBtnList() {
        cy.get(this.btnList).click({force:true})
    }

    clickBtnEdit() {
        cy.get(this.btnEdit).click({force:true})
    }

    inputFirstname(firstname) {
        cy.get(this.firstname).clear()
        cy.input(this.firstname,firstname)
    }

    inputLastname(lastname) {
        cy.get(this.lastname).clear()
        cy.input(this.lastname,lastname)
    }

    inputNickname(nickname) {
        cy.get(this.nickname).clear()
        cy.input(this.nickname,nickname)
    }

    inputOtherId(otherId) {
        cy.get(this.otherId).clear()
        cy.input(this.otherId,otherId)
    }

    clickSave(){
        cy.get(this.save).click({force:true})
    }

    checkRequired(){
        cy.get(this.required).should('be.visible')
    }

    checkRequired2(){
        cy.get(this.requiredLastName).should('be.visible')
    }

    clickMenuContact(){
        cy.get(this.menuContact).click({force:true})
    }

    inputKota(kota){
        cy.get(this.kota).clear()
        cy.input(this.kota,kota)
    }

    inputEmail(email){
        cy.get(this.email).clear()
        cy.input(this.email,email)
    }

    inputHp(hp){
        cy.get(this.hp).clear()
        cy.input(this.hp,hp)
    } 

    clickSaveContact(){
        cy.get(this.saveContact).click({force:true})
    }

    checkMesage(){
        cy.get(this.msgSucces).should('be.visible')
    }

    checkValueCity(){
        cy.get(this.kota).should('have.value','Bandung')
    }

    checkSucces(){
        cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').should('be.visible')
    }

    checkValueFirst() {
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').should('have.value','Bunga')
    }

    checkValueLast() {
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').should('have.value','Mawar')
    }

}
export default PageEditEmployee