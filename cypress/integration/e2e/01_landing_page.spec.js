describe('Homepage', () => {
    it('successfully visits website', () => {
        cy.visit('http://localhost:3000')
    })
    describe('Menu Items', () => {
        it('displays 5 menu categories', () => {
            cy.window()
                .its('store')
                .invoke('getState')
                .then((state) => {
                    const directory = state.directory.sections
                    expect(directory).to.be.an('array')
                    expect(directory).to.have.length(5)
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
    })
})
