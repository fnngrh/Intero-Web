
describe('NowShowing', function(){
    it('nowshowing', function(){
        cy.visit('http://localhost:3000/')
    })
    
    it('GET - read', function(){
        cy.request('GET', 'https://intero-web-uts.firebaseio.com')
        .then((response) => {
            expect(response).to.have.property('status',200)
        })
    })
    
})
