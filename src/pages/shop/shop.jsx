import React, { Component } from 'react';

import SHOP_DATA from './shop.data';
import Collection from '../../components/collection/collection';

class ShopPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        };
    }

    render() {
        const {collections} = this.state
        return(
            <div className='shop-page'>
                {collections.map(({id, ...otherCollectionProps}) => (
                    <Collection key={id}
                    {...otherCollectionProps} />
                ))}
            </div>
        );
    }
}

export default ShopPage;