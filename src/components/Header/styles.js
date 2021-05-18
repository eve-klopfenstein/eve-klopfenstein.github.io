import styled from 'styled-components';
import { colors } from '../../styles/color';
import { Link } from 'react-router-dom';
import { screenSizes } from '../../styles/screenSizes';

export const HeaderWrapper = styled.div`
    width: 100vw;
    height: 8vh;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${colors.headerBg};

    #side-nav-wrapper {
        display: none;

        @media ${screenSizes.mobile} {
            display: inline;
        }
    }

    @media ${screenSizes.mobile} {
        height: 10vh;
    }

    @media ${screenSizes.mobileLandscape} {
        height: 20vh;
    }
`

export const LogoImg = styled.img`
    height: 85px;
    margin: 0 2em 0 2em;

    @media ${screenSizes.mobile} {
        height: 9vh;
        margin: 0 0 0 0.5em;
    }

    @media ${screenSizes.mobileLandscape} {
        height: 18vh;
        margin: 0 1em 0 1em;
    }
`

export const NavWrapper = styled.nav`
    width: 25%;
    min-width: 235px;
    margin: 0 2em 0 2em;
    display: flex;
    justify-content: space-between;

    @media ${screenSizes.mobile} {
        display: none;
    }
`

export const NavigationLink = styled(Link)`
    color: ${colors.mainText};
    text-decoration: line-through;
    font-size: 1.2rem;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }

    :hover {
        cursor: pointer;
        color: ${colors.hoverLink};
    }

`

export const HamburgerWrapper = styled.div`
    display: none;
    
    @media ${screenSizes.mobile} {
        display:inline;
        margin-right: 1em;
    }
`