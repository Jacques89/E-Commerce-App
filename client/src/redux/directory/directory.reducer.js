export const INITIAL_STATE = {
    sections: [
        {
            title: 'turntables',
            imageUrl: 'https://i.ibb.co/5jRKRDr/silver-vinyl.png',
            id: 1,
            linkUrl: 'shop/turntables'
        },
        {
            title: 'CDJs',
            imageUrl: 'https://i.ibb.co/L0JHBgd/CDJ-crop.jpg',
            id: 2,
            linkUrl: 'shop/cdj'
        },
        {
            title: 'mixers',
            imageUrl: 'https://i.ibb.co/BzmzcH0/DJ-mixer.png',
            id: 3,
            linkUrl: 'shop/mixers'
        },
        {
            title: 'speakers',
            imageUrl: 'https://i.ibb.co/1nM1VvS/speaker.png',
            size: 'large',
            id: 4,
            linkUrl: 'shop/speakers'
        },
        {
            title: 'vinyl',
            imageUrl: 'https://i.ibb.co/5YDRsPJ/vinyl.png',
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
