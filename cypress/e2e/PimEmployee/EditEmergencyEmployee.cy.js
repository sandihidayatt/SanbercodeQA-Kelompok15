import 'cypress-mochawesome-reporter/register';

describe('Edit Contact Emengency Employee Functionality', () => { // test suite
    it('Edit Emergency Employee', () => {
        cy.login()
        cy.menuPim()
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('al') //Search name
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({force:true}) //click search
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click({force:true})
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({force:true})

        cy.get(':nth-child(3) > .orangehrm-tabs-item').click({force:true}) // menu emergancy contact
        cy.get(':nth-child(1) > .orangehrm-action-header > .oxd-button').click({force:true}) // add button
        cy.get(':nth-child(1) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Lion') //name contact
        cy.get(':nth-child(1) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Brother') //relationship
        cy.get(':nth-child(2) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('0573838')// telepon
        cy.get('.oxd-button--secondary').click({force:true}) //save
        cy.get('.oxd-toast').should('be.visible')
        cy.get('.oxd-table-row > :nth-child(2) > div').should('be.visible')
        cy.get('.oxd-table-row > :nth-child(4) > div').should('be.visible')

    })

    it('Edit Emergency Contact Employee Empty Name', () => {
      cy.login()
      cy.menuPim()
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('al') //Search name
      cy.get('.oxd-form-actions > .oxd-button--secondary').click({force:true}) //click search
      cy.get(':nth-child(1) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click({force:true})
      cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({force:true})
      // cy.get('.orangehrm-edit-employee-name > .oxd-text').should('have.text','Iris Rose')
      // cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').should('have.value','Iris')
      // cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').should('have.value','Rose')
      cy.get(':nth-child(3) > .orangehrm-tabs-item').click({force:true}) // menu emergancy contact
      cy.get(':nth-child(1) > .orangehrm-action-header > .oxd-button').click({force:true}) // add button
      cy.get(':nth-child(1) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type(' ') //name contact
      cy.get(':nth-child(1) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Brother') //relationship
      cy.get(':nth-child(2) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('0573838')// telepon
      cy.get('.oxd-button--secondary').click({force:true}) //save
      cy.get('.oxd-input-group > .oxd-text').should('be.visible')

    })

    it('Edit Emergency Contact Employee Empty Relationship', () => {
      cy.login()
      cy.menuPim()
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('al') //Search name
      cy.get('.oxd-form-actions > .oxd-button--secondary').click({force:true}) //click search
      cy.get(':nth-child(1) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click({force:true})
      cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({force:true})
      // cy.get('.orangehrm-edit-employee-name > .oxd-text').should('have.text','Iris Rose')
      // cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').should('have.value','Iris')
      // cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').should('have.value','Rose')
      cy.get(':nth-child(3) > .orangehrm-tabs-item').click({force:true}) // menu emergancy contact
      cy.get(':nth-child(1) > .orangehrm-action-header > .oxd-button').click({force:true}) // add button
      cy.get(':nth-child(1) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Lion') //name contact
      cy.get(':nth-child(1) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(' ') //relationship
      cy.get(':nth-child(2) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('0573838')// telepon
      cy.get('.oxd-button--secondary').click({force:true}) //save
      cy.get('.oxd-input-group > .oxd-text').should('be.visible')

    })

    it('Edit Emergency Contact Employee Empty Telphone', () => {
      cy.login()
      cy.menuPim()
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('al') //Search name
      cy.get('.oxd-form-actions > .oxd-button--secondary').click({force:true}) //click search
      cy.get(':nth-child(1) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click({force:true})
      cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({force:true})
      // cy.get('.orangehrm-edit-employee-name > .oxd-text').should('have.text','Iris Rose')
      // cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').should('have.value','Iris')
      // cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').should('have.value','Rose')
      cy.get(':nth-child(3) > .orangehrm-tabs-item').click({force:true}) // menu emergancy contact
      cy.get(':nth-child(1) > .orangehrm-action-header > .oxd-button').click({force:true}) // add button
      cy.get(':nth-child(1) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Lion') //name contact
      cy.get(':nth-child(1) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Brother') //relationship
      cy.get(':nth-child(2) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type(' ')// telepon
      cy.get('.oxd-button--secondary').click({force:true}) //save
      cy.get('.oxd-input-group > .oxd-text').should('be.visible')
        
    })

    it('Edit Emergency Contact Employee Invalid Telphone', () => {
      cy.login()
      cy.menuPim()
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('al') //Search name
      cy.get('.oxd-form-actions > .oxd-button--secondary').click({force:true}) //click search
      cy.get(':nth-child(1) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click({force:true})
      cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({force:true})
      // cy.get('.orangehrm-edit-employee-name > .oxd-text').should('have.text','Iris Rose')
      // cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').should('have.value','Iris')
      // cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').should('have.value','Rose')
      cy.get(':nth-child(3) > .orangehrm-tabs-item').click({force:true}) // menu emergancy contact
      cy.get(':nth-child(1) > .orangehrm-action-header > .oxd-button').click({force:true}) // add button
      cy.get(':nth-child(1) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Lion') //name contact
      cy.get(':nth-child(1) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Brother') //relationship
      cy.get(':nth-child(2) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('no 123')// telepon
      cy.get('.oxd-button--secondary').click({force:true}) //save
      cy.get('.oxd-input-group > .oxd-text').should('be.visible')
        
    })
})
