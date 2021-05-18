import React from 'react';
import { GreetingWrapper, HomeBodyWrapper } from './styles';
import EvePic from '../../assets/pics/mypic.png';
import {EveImg} from './styles'

const HomeBody = () => {

    return (
        <HomeBodyWrapper>
            <GreetingWrapper>
                <div>
                    <span className='greeting'>Hello</span>
                    <span className='greeting'>Guten Tag</span>
                    <span className='greeting'>สวัสดีค่ะ</span>
                    <span className='waving-emoji'>👋</span>
                </div>
                <span id='personal-statement'>I am Eve! I am a front-end developer with interest in UX design.</span>
            </GreetingWrapper>
            <EveImg src={EvePic} alt="Eve's Picture" />

        </HomeBodyWrapper>
    )
}

export default HomeBody