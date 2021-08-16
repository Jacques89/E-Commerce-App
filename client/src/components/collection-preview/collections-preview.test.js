import React from 'react'
import { shallow } from 'enzyme'
import CollectionPreviewDiv from './collection-preview.component'

describe('CollectionPreview Component Tests', () => {
    let wrapper
    let mockHistory
    let mockMatch
    let mockRouteName = 'vinyl'
    let mockItem

    beforeEach(() => {
        mockHistory = {
            push: jest.fn()
        }

        mockMatch = {
            path: '/shop'
        }

        mockItem = {
            id: 1,
            imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
            price: 220,
            name: 'Adidas NMD'
        }

        const mockProps = {
            title: 'vinyl',
            items: [mockItem],
            history: mockHistory,
            match: mockMatch,
            routeName: 'vinyl'
        }

        wrapper = shallow(<CollectionPreviewDiv.WrappedComponent {...mockProps} />)
    })

    it('should render and match snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should fire history.push onClick of title', () => {
        wrapper.find('TitleStyles').simulate('click')
        expect(mockHistory.push).toHaveBeenCalledWith(`${mockMatch.path}/${mockRouteName}`)
    })
})
