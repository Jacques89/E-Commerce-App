/**
 * Homepage tests
 */

describe('Homepage', () => {
    beforeEach(() => {
        cy.intercept({ url: /https:\/\/.*google.*/, method: 'POST' }).as('dataFetch')
    })
    it('successfully loads the page', () => {
        cy.visit('/')
    })
    describe('Menu Items', () => {
        it('displays 5 categories with correct information from the state', () => {
            cy.window()
                .its('store')
                .invoke('getState')
                .then((state) => {
                    const directory = state.directory?.sections
                    expect(directory).to.be.an('array').and.to.have.length(5)
                    cy.fixture('menuItems')
                        .as('menuItem')
                        .then((menuItem) => {
                            // Turntables
                            expect(menuItem[0].title).equal(directory[0].title)
                            expect(menuItem[0].imageUrl).equal(directory[0].imageUrl)
                            expect(menuItem[0].linkUrl).equal(directory[0].linkUrl)
                            expect(menuItem[0].id).equal(directory[0].id)
                            // CDJS
                            expect(menuItem[1].title).equal(directory[1].title)
                            expect(menuItem[1].imageUrl).equal(directory[1].imageUrl)
                            expect(menuItem[1].linkUrl).equal(directory[1].linkUrl)
                            expect(menuItem[1].id).equal(directory[1].id)
                            // Mixers
                            expect(menuItem[2].title).equal(directory[2].title)
                            expect(menuItem[2].imageUrl).equal(directory[2].imageUrl)
                            expect(menuItem[2].linkUrl).equal(directory[2].linkUrl)
                            expect(menuItem[2].id).equal(directory[2].id)
                            // Speakers
                            expect(menuItem[3].title).equal(directory[3].title)
                            expect(menuItem[3].imageUrl).equal(directory[3].imageUrl)
                            expect(menuItem[3].linkUrl).equal(directory[3].linkUrl)
                            expect(menuItem[3].id).equal(directory[3].id)
                            // Vinyl
                            expect(menuItem[4].title).equal(directory[4].title)
                            expect(menuItem[4].imageUrl).equal(directory[4].imageUrl)
                            expect(menuItem[4].linkUrl).equal(directory[4].linkUrl)
                            expect(menuItem[4].id).equal(directory[4].id)
                        })
                })
        })
        it('can navigate to each menu item page', () => {
            // Turntables
            cy.get('[data-cy=menu-item-shop-button]').eq(0).click()
            cy.wait('@dataFetch')
            cy.url().should('include', 'shop/turntables')
            cy.go('back')
            // CDJS
            cy.get('[data-cy=menu-item-shop-button]').eq(1).click()
            cy.wait('@dataFetch')
            cy.url().should('include', 'shop/cdj')
            cy.go('back')
            // Mixers
            cy.get('[data-cy=menu-item-shop-button]').eq(2).click()
            cy.wait('@dataFetch')
            cy.url().should('include', 'shop/mixers')
            cy.go('back')
            // Speakers
            cy.get('[data-cy=menu-item-shop-button]').eq(3).click()
            cy.wait('@dataFetch')
            cy.url().should('include', 'shop/speakers')
            cy.go('back')
            // Vinyl
            cy.get('[data-cy=menu-item-shop-button]').eq(4).click()
            cy.wait('@dataFetch')
            cy.url().should('include', 'shop/vinyl')
            cy.go('back')
        })
    })
    describe('Navigation bar', () => {
        it('directs to the shop page', () => {
            cy.get('[data-cy=shop-button]').click()
            cy.wait('@dataFetch')
            cy.url().should('include', '/shop')
        })
        it('directs to the contact page', () => {
            cy.get('[data-cy=contact-button]').click()
            cy.url().should('include', '/contact')
        })
        it('directs to the sign-in/sign-up page', () => {
            cy.get('[data-cy=sign-in-button]').click()
            cy.url().should('include', '/signin')
        })
        it('navigates back to homepage', () => {
            cy.get('[data-cy=logo]').click()
            cy.url().should('include', '/')
        })
    })
})
