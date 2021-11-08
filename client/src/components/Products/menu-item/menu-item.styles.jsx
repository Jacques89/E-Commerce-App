import styled from 'styled-components'

export const MenuItemContainer = styled.div`
	min-width: 30%;
	overflow: hidden;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 0.063rem solid black;
	margin: 0 0.469rem 0.938rem;
	overflow: hidden;

	&:hover {
		cursor: pointer;

		& .background-image {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}

		& .content {
			opacity: 0.9;
		}
	}

    &:first-child {
        margin-right: 0.469rem;
    }

    &:last-child {
        margin-left: 0.469rem;
    }
    
    @media screen and (min-width: 50px) {
        height: 15rem;
    }

    @media screen and (min-width: 470px) {
        height: 21rem;
    }    
`

MenuItemContainer.displayName = 'MenuItemContainer'

export const BackgroundImageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`

BackgroundImageContainer.displayName = 'BackgroundImageContainer'

export const ContentContainer = styled.div`
    height: 6rem;
    padding: 0 1.5625rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 0.063rem solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;

    @media screen and (max-width: 563px) {
        padding: 0 0.625rem;
    }

    @media screen and (max-width: 350px) {
        padding: 0 	0.9375rem;
    }
`

export const ContentTitle = styled.span`
    font-weight: bold;
    margin-bottom: 0.375rem;
    font-size: 1.375rem;
    color: #4a4a4a;
`

export const ContentSubtitle = styled.span`
    font-weight: lighter;
    font-size: 1rem;
`
