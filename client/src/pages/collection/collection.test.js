import React from 'react'
import { mount } from 'enzyme'
import configureMockStore from 'redux-mock-store'

import { CollectionPage } from './collection.component'
import CollectionItem from '../../components/Collection/collection-item/collection-item.component'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

describe('CollectionPage', () => {
    let wrapper
    let mockItems = [{ id: 1 }, { id: 2 }, { id: 3 }]

    const mockStore = configureMockStore()
    const store = mockStore({})

    beforeEach(() => {
        const mockCollection = {
            items: mockItems,
            title: 'Test'
        }

        wrapper = mount(
            <Provider store={store}>
                <Router>
                    <CollectionPage collection={mockCollection} />
                </Router>
            </Provider>
        )
    })

    it('should render the CollectionPage component', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should render the same number of CollectionItems as collection array', () => {
        expect(wrapper.find(CollectionItem).length).toBe(mockItems.length)
    })
})
