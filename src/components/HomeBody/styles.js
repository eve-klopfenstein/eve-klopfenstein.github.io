import styled from 'styled-components';
import { wavingAnimation } from '../../styles/keyframes';
import {screenSizes} from '../../styles/screenSizes';

export const HomeBodyWrapper = styled.div`
    display: flex;
    margin-top: 8vh;
    padding: 3rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;

    @media ${screenSizes.mobile} {
        padding: 1rem;
    }
`

export const EveImg = styled.img`
    width: 35%;

    @media ${screenSizes.mobile} {
        width: 70%;
    }
`

export const GreetingWrapper = styled.div`
    width: 50%;
    height: 15vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        .greeting {
            font-size: 2rem;
            white-space: nowrap;
        }

        .waving-emoji {
            font-size: 2rem;
            animation: ${wavingAnimation} 2.5s infinite;
            transform-origin: 70% 70%;
            z-index: -1;
        }
    }

    #personal-statement {
        font-size: 1.25rem;
        line-height: 2rem;
    }

    @media ${screenSizes.mobile} {
        width: 90%;
        height: 30vh;

        div {
            .greeting {
                font-size: 1.5rem;
            }
        }

        #personal-statement {
            font-size: 1rem;
            line-height: 1.7rem;
        }
    }
` 