import React from 'react';
import { AboutLink, AboutWrapper, DescriptionDiv } from './styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import SendIcon from '@material-ui/icons/Send';

const AboutBody = () => {

    return (
        <AboutWrapper>
            <DescriptionDiv>
                <span>Hi, I'm Eve!</span>
                <span>I am an motivated front-end developer located in Switzerland. I am currently learning more about UX design. </span>
                {/* <span>I am an motivated front-end developer located in Switzerland and have big interest in UX design. </span>
                <span>I am an motivated front-end developer located in Switzerland and have big interest in UX design. </span>
                <span>I am an motivated front-end developer located in Switzerland and have big interest in UX design. </span> */}
            </DescriptionDiv>
            
            <div>
                <span>Let's get in touch!</span>
                <div>
                    <AboutLink href='https://www.linkedin.com/in/kanoknuch-klopfenstein' target='_blank'>
                        <LinkedInIcon className='icon'/>
                    </AboutLink>
                    <AboutLink href='https://github.com/eve-klopfenstein' target='_blank'>
                        <GitHubIcon className='icon'/>
                    </AboutLink>
                    <AboutLink href='mailto: eve.klopfenstein@gmail.com' target='_blank'>
                        <SendIcon className='icon'/>
                    </AboutLink>
                </div>
            </div>
        </AboutWrapper>
    )
}

export default AboutBody