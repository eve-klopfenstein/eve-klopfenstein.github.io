import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../../styles/color';

export const SideNavWrapper = styled.div`

    .side-nav {
        width: 70%;
        height: 100vh;
        position: fixed;
        background: ${colors.pinkYellowGradient};
        transition: 1s;
        top: 0;
        right: -100%;
        padding-left: 2rem;
    }

    .side-nav.active {
        right: 0;
        transition: 1s;
    }

     #close-icon {
         position: absolute;
         right: 1rem;
         top: 1rem;
         :hover {
             cursor: pointer;
         }
    }
`

const wavingAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    10% {
        transform: rotate(14deg);
    }
    20% {
        transform: rotate(-10deg);
    }
    30% {
        transform: rotate(14deg);
    }
    40% {
        transform:rotate(-4deg);
    }
    50% {
        transform: rotate(14deg);
    }
    60% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(0deg);
    }
`

export const GreetingDiv = styled.div`
    margin-top: 3rem;
    display: flex;
    align-items: center;
    width: 75%;
    justify-content: space-between;

    #waving-emoji {
        font-size: 2rem;
        animation: ${wavingAnimation} 2.5s infinite;
        transform-origin: 70% 70%;
    }
`

export const LinkWrapperNav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 60%;
`

export const SideNavLink = styled(Link)`
    color: ${colors.mainText};
    text-decoration: none;
    display: flex;
    align-items: center;

    .icon {
        padding-right: 0.8rem;
    }

`