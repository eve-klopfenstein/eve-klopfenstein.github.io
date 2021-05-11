import React from 'react';
import { GreetingDiv, LinkWrapperNav, SideNavLink, SideNavWrapper } from './styles';
import CloseIcon from '@material-ui/icons/Close';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import MailIcon from '@material-ui/icons/Mail';
import { Home } from '@material-ui/icons';

const SideNav = ({sideNavOpened, onClick}) => {

    const timeNow = () => {
        const today = new Date;      
        return today.getHours()
    }

    return (
        <SideNavWrapper>
            <div className={sideNavOpened ? 'side-nav active' : 'side-nav'}>
                <CloseIcon id='close-icon' onClick={onClick} />
                <GreetingDiv>
                    <h2>{timeNow() < 12 ? 'Good Morning' : timeNow() < 18 ? 'Good Afternoon' : 'Good Evening'} </h2>
                    <span id='waving-emoji'>👋</span>
                </GreetingDiv>
                <LinkWrapperNav>
                    <SideNavLink to='/'>
                        <HomeIcon className='icon'/>
                        Home
                    </SideNavLink>
                    <SideNavLink to='/about'>
                        <InfoIcon className='icon' />
                        About
                    </SideNavLink>
                    <SideNavLink to='/portfolio'>
                        <FolderSpecialIcon className='icon' />
                        Portfolio
                    </SideNavLink>
                    <SideNavLink to='/contact'>
                        <MailIcon className='icon' />
                        Contact
                    </SideNavLink>
                </LinkWrapperNav>
            </div>
        </SideNavWrapper>
    )
}

export default SideNav