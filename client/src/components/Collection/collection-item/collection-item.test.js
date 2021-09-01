import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'

import { BrowserRouter as Router } from 'react-router-dom'

import { CollectionItem } from './collection-item.component'

describe('CollectionItem component', () => {
    let wrapper
    let mockAddItem
    const imageUrl = 'www.testImage.com'
    const mockName = 'blackCDJ'
    const mockPrice = 10

    const mockStore = configureMockStore()
    const store = mockStore({})

    beforeEach(() => {
        mockAddItem = jest.fn()

        const mockProps = {
            item: {
                imageUrl: imageUrl,
                price: mockPrice,
                name: mockName
            },
            addItem: mockAddItem
        }

        wrapper = mount(
            <Provider store={store}>
                <Router>
                    <CollectionItem item={mockProps.item} addItem={mockProps.addItem} />
                </Router>
            </Provider>
        )
    })

    it('should render CollectionItem component', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should call addItem when AddButton clicked', () => {
        wrapper.find('AddButtonStyles').simulate('click')
        expect(mockAddItem).toHaveBeenCalled()
    })

    it('should render imageUrl as a prop on BackgroundImage', () => {
        expect(wrapper.find('BackgroundImageStyles').prop('imageUrl')).toBe(imageUrl)
    })

    it('should render name prop in NameSpan', () => {
        expect(wrapper.find('NameSpanStyles').text()).toBe(mockName)
    })

    it('should render price prop in PriceSpan', () => {
        const price = parseInt(wrapper.find('PriceSpanStyles').text())
        expect(price).toBe(mockPrice)
    })
})
