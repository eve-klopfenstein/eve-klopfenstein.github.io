import styled from 'styled-components';
import { screenSizes } from '../../styles/screenSizes';


export const AboutWrapper = styled.div`
    padding: 3rem;
    margin-top: 8vh;
`

export const DescriptionDiv = styled.div`
    width: 50%;

    @media ${screenSizes.mobile} {
        width: 100%;
    }
`

export const AboutLink = styled.a`
    /* border: solid 2px gray; */

    :hover {
        cursor: pointer;
    }
`