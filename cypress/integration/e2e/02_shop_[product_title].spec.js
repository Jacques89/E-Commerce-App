/**
 * Shop/turntable page
 */
describe('shop/[product_title]', () => {
    beforeEach(() => {
        cy.intercept({ url: /https:\/\/.*google.*/, method: 'POST' }).as('postItems')
    })
    describe('/shop/turntables', () => {
        it('successfully loads the page', () => {
            cy.visit('/shop/turntables')
            cy.wait('@postItems')
        })
        describe('Turntable collection', () => {
            it('fetches turntable items with correct information from the state', () => {
                cy.wait('@postItems')
                cy.window()
                    .its('store')
                    .invoke('getState')
                    .then((state) => {
                        const shopTurntables = state.shop.collections.turntables.items
                        console.log(shopTurntables)
                        expect(shopTurntables).to.be.an('array').and.to.have.length(9)
                        cy.fixture('turntables')
                            .as('turntable')
                            .then((turntable) => {
                                expect(turntable[0].id).equal(shopTurntables[0].id)
                                expect(turntable[0].imageUrl).equal(shopTurntables[0].imageUrl)
                                expect(turntable[0].name).equal(shopTurntables[0].name)
                                expect(turntable[0].price).equal(shopTurntables[0].price)

                                expect(turntable[1].id).equal(shopTurntables[1].id)
                                expect(turntable[1].imageUrl).equal(shopTurntables[1].imageUrl)
                                expect(turntable[1].name).equal(shopTurntables[1].name)
                                expect(turntable[1].price).equal(shopTurntables[1].price)

                                expect(turntable[2].id).equal(shopTurntables[2].id)
                                expect(turntable[2].imageUrl).equal(shopTurntables[2].imageUrl)
                                expect(turntable[2].name).equal(shopTurntables[2].name)
                                expect(turntable[2].price).equal(shopTurntables[2].price)

                                expect(turntable[3].id).equal(shopTurntables[3].id)
                                expect(turntable[3].imageUrl).equal(shopTurntables[3].imageUrl)
                                expect(turntable[3].name).equal(shopTurntables[3].name)
                                expect(turntable[3].price).equal(shopTurntables[3].price)

                                expect(turntable[4].id).equal(shopTurntables[4].id)
                                expect(turntable[4].imageUrl).equal(shopTurntables[4].imageUrl)
                                expect(turntable[4].name).equal(shopTurntables[4].name)
                                expect(turntable[4].price).equal(shopTurntables[4].price)

                                expect(turntable[5].id).equal(shopTurntables[5].id)
                                expect(turntable[5].imageUrl).equal(shopTurntables[5].imageUrl)
                                expect(turntable[5].name).equal(shopTurntables[5].name)
                                expect(turntable[5].price).equal(shopTurntables[5].price)

                                expect(turntable[6].id).equal(shopTurntables[6].id)
                                expect(turntable[6].imageUrl).equal(shopTurntables[6].imageUrl)
                                expect(turntable[6].name).equal(shopTurntables[6].name)
                                expect(turntable[6].price).equal(shopTurntables[6].price)

                                expect(turntable[7].id).equal(shopTurntables[7].id)
                                expect(turntable[7].imageUrl).equal(shopTurntables[7].imageUrl)
                                expect(turntable[7].name).equal(shopTurntables[7].name)
                                expect(turntable[7].price).equal(shopTurntables[7].price)

                                expect(turntable[8].id).equal(shopTurntables[8].id)
                                expect(turntable[8].imageUrl).equal(shopTurntables[8].imageUrl)
                                expect(turntable[8].name).equal(shopTurntables[8].name)
                                expect(turntable[8].price).equal(shopTurntables[8].price)
                            })
                    })
            })
        })
        describe('CDJ collection', () => {
            it('successfully loads the page', () => {
                cy.visit('/shop/cdj')
                cy.wait('@postItems')
            })
            it('fetches CDJ items with correct information from the state', () => {
                cy.wait('@postItems')
                cy.window()
                    .its('store')
                    .invoke('getState')
                    .then((state) => {
                        const shopCDJs = state.shop.collections.cdj.items
                        console.log(shopCDJs)
                        expect(shopCDJs).to.be.an('array').and.to.have.length(5)
                        cy.fixture('cdjs')
                            .as('cdj')
                            .then((cdj) => {
                                expect(cdj[0].id).equal(shopCDJs[0].id)
                                expect(cdj[0].imageUrl).equal(shopCDJs[0].imageUrl)
                                expect(cdj[0].name).equal(shopCDJs[0].name)
                                expect(cdj[0].price).equal(shopCDJs[0].price)

                                expect(cdj[1].id).equal(shopCDJs[1].id)
                                expect(cdj[1].imageUrl).equal(shopCDJs[1].imageUrl)
                                expect(cdj[1].name).equal(shopCDJs[1].name)
                                expect(cdj[1].price).equal(shopCDJs[1].price)

                                expect(cdj[2].id).equal(shopCDJs[2].id)
                                expect(cdj[2].imageUrl).equal(shopCDJs[2].imageUrl)
                                expect(cdj[2].name).equal(shopCDJs[2].name)
                                expect(cdj[2].price).equal(shopCDJs[2].price)

                                expect(cdj[3].id).equal(shopCDJs[3].id)
                                expect(cdj[3].imageUrl).equal(shopCDJs[3].imageUrl)
                                expect(cdj[3].name).equal(shopCDJs[3].name)
                                expect(cdj[3].price).equal(shopCDJs[3].price)

                                expect(cdj[4].id).equal(shopCDJs[4].id)
                                expect(cdj[4].imageUrl).equal(shopCDJs[4].imageUrl)
                                expect(cdj[4].name).equal(shopCDJs[4].name)
                                expect(cdj[4].price).equal(shopCDJs[4].price)
                            })
                    })
            })
        })
    })
})
