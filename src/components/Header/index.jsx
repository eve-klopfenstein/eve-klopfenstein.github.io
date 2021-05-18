import React, { useState, useEffect } from 'react';
import { HeaderWrapper, LogoImg, NavWrapper, NavigationLink, HamburgerWrapper } from './styles';
import LogoWithName from '../../assets/logo/with-name2.png';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import SideNav from '../SideNav/index.jsx';


const Header = () => {

    const [sideNavOpened, setSideNavOpened] = useState(false);

    return (

        <HeaderWrapper>
            <Link to='/'>
                <LogoImg src={LogoWithName} alt='Logo' />
            </Link>
            <NavWrapper>
                <NavigationLink to='/about'>About</NavigationLink>
                <NavigationLink to='/portfolio'>Portfolio</NavigationLink>
                {/* <NavigationLink to='/contact'>Contact</NavigationLink> */}
            </NavWrapper>
            <div id='side-nav-wrapper'>
                <HamburgerWrapper>
                    <MenuIcon onClick={() => setSideNavOpened(true)} />
                </HamburgerWrapper>
                <SideNav sideNavOpened={sideNavOpened} onClick={() => setSideNavOpened(false)} />
            </div>
        </HeaderWrapper>
    )
}

export default Header