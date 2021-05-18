import styled from 'styled-components';
import { colors } from '../../styles/color';
import { screenSizes } from '../../styles/screenSizes';


export const AboutWrapper = styled.div`
    padding: 3rem;
    margin-top: 8vh;
`

export const DescriptionImgDiv = styled.div`
    img {
        width: 30%;
    }
`   

export const DescriptionDiv = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;

    @media ${screenSizes.mobile} {
        width: 100%;
    }
`

export const LineDiv = styled.div`
    border-bottom: solid 2px ${colors.brightYellow};
`

export const AboutLink = styled.a`
    /* border: solid 2px gray; */

    :hover {
        cursor: pointer;
    }
`