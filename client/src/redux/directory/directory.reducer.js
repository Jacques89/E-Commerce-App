const INITIAL_STATE = {
    sections: [
        {
            title: 'turntables',
            imageUrl: 'https://i.ibb.co/7zmydWg/technics.jpg',
            id: 1,
            linkUrl: 'shop/turntables'
        },
        {
            title: 'CDJs',
            imageUrl: 'https://i.ibb.co/B3RXrTt/CDJ.jpg',
            id: 2,
            linkUrl: 'shop/cdj'
        },
        {
            title: 'mixers',
            imageUrl: 'https://i.ibb.co/ch3QKqN/DJ-mixer.jpg',
            id: 3,
            linkUrl: 'shop/mixers'
        },
        {
            title: 'CDs',
            imageUrl: 'https://i.ibb.co/jH99K30/CD-black.jpg',
            size: 'large',
            id: 4,
            linkUrl: 'shop/cd'
        },
        {
            title: 'vinyl',
            imageUrl: 'https://i.ibb.co/Njtr9Xt/alberto-bigoni-4-De-S5a-h-AM-unsplash.jpg',
            size: 'large',
            id: 5,
            linkUrl: 'shop/vinyl'
        }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default: return state;
    }
};

export default directoryReducer;
