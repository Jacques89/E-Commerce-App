import React from 'react'
import { mount, shallow } from 'enzyme'
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

        wrapper = shallow(
            <Provider store={store}>
                <Router>
                    <CollectionItem {...mockProps} />
                </Router>
            </Provider>
        )
    })

    it('should render CollectionItem component', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should call addItem when AddButton clicked', () => {
        wrapper.find('AddButton').simulate('click')
        console.log(wrapper.html())
        expect(mockAddItem).toHaveBeenCalled()
    })

    it('should render imageUrl as a prop on BackgroundImage', () => {
        expect(wrapper.find('BackgroundImage').prop('imageUrl')).toBe(imageUrl)
    })

    it('should render name prop in NameSpan', () => {
        expect(wrapper.find('NameSpan').dive().text()).toBe(mockName)
    })

    it('should render price prop in PriceSpan', () => {
        const price = parseInt(wrapper.find('PriceSpan').dive().text())
        expect(price).toBe(mockPrice)
    })
})
