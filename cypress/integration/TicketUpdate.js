describe('TicketUpdate', function(){
    it('update', function(){
        cy.visit('http://localhost:3000/history')
        cy.get('input[id="name"]').type('Rifaal')
        cy.get('input[id="email"]').type('AhmaadRifal@gmail.com')
        cy.get('input[id="choosenmovie"]').type('Temaan Tapi Menikah 2')
        cy.get('input[id="jmltiket"]').type('1a')
        // cy.pause()
        
        cy.get('span').contains('Update').should('be.visible').click({ force: true })
        cy.reload()
    
    })
    
})