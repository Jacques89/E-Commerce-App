/**
 * Shop/turntable page
 */

describe('/shop/[turntables]', () => {
    it('successfully loads the page', () => {
        cy.visit('/shop/turntables')
    })
    describe('Turntable collection', () => {
        it('fetches turntable items with correct information from the state', () => {
            // TODO intercept the firebase path before checking the state
            cy.window()
                .its('store')
                .invoke('getState')
                .then((state) => {
                    const turntableFetch = state.shop.isFetching
                    console.log(state)
                    expect(turntableFetch).equal(true)
                }).then((state) => {
                    const turntables = state.shop.collections.turntables
                    console.log(turntables)
                })
        })      
    })
})
