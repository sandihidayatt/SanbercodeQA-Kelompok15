describe('Edit Locations', () => {
    it('Succes_Add_Location', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click()
    cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
    cy.get('.orangehrm-header-container > div > .oxd-button').click()
    cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('Bang Palem')
    cy.get(':nth-child(2) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Palembang')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('South Sumatra')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Indonesian')    
    cy.get('.oxd-select-text-input').type('G')
    cy.get('.oxd-select-wrapper div').each(($el, index, $list) => {
            if($el.text()==='Gabon'){
                cy.wrap($el).click()
            }
            })  
    cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input').type('6281234567891')
    cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-input').type('6281234567891')
    cy.get(':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('Jln. Melati')
    cy.get(':nth-child(8) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('Abcde')
    cy.get('.oxd-button--secondary').click()

    })

    it('Failed_Add_Location', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click()
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
        cy.get('.orangehrm-header-container > div > .oxd-button').click()
        cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear()
        cy.get(':nth-child(2) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Palembang')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('South Sumatra')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Indonesian')    
        cy.get('.oxd-select-text-input').type('G')
        // cy.get('.oxd-select-wrapper div').each(($el, index, $list) => {
        //         if($el.text()==='Gabon'){
        //             cy.wrap($el).click()
        //         }
        //         })  
        cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input').type('6281234567891')
        cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-input').type('6281234567891')
        cy.get(':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('Jln. Melati')
        cy.get(':nth-child(8) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('Abcde')
        cy.get('.oxd-button--secondary').click()
        cy.get('.oxd-input-group > .oxd-text').should('be.visible')
        cy.get(':nth-child(4) > .oxd-input-group > .oxd-text').should('be.visible')
        })

})