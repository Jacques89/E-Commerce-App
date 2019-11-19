import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Collection  from '../collections-preview/collections-preview';

import { selectCollectionsForPreview } from '../../redux/shop/shop-selectors';

import './collections-overview.scss';

const CollectionsOverview = ({ collections }) => (
    <div className='collection-overview'>
        {collections.map(({id, ...otherCollectionProps}) => (
                <Collection key={id}
                {...otherCollectionProps} />
            ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);