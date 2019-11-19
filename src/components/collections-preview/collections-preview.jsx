import React from 'react';

import CollectionItem from '../collection-item/collection-item';
import './collections-preview.scss';

const Collection = ({title, items}) => (
    <div className='collections-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items.filter((item, index) => index < 4).map((item) => (
                <CollectionItem 
                    key={item.id}
                    item={item}
                />
            ))}
        </div>
    </div>
);

export default Collection;