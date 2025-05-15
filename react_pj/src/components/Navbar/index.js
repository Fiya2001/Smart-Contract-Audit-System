import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  // State variable to track scroll position
  const [scrollNav, setScrollNav] = useState(false);

  // Function to update scrollNav state based on scroll position
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  // Add scroll event listener to update scrollNav state
  useEffect(() => {
    window.addEventListener('scroll', changeNav);

    // Cleanup: Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', changeNav);
    };
  }, []);

  // Function to scroll to the top of the page when clicking the logo
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        {/* Navigation bar with scrollNav state */}
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            {/* Logo with click event to scroll to top */}
            <NavLogo onClick={toggleHome} to='/'>
              SmartSystem
            </NavLogo>
            {/* Mobile menu icon with click event to toggle the menu */}
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            {/* Navigation menu */}
            <NavMenu>
              {/* Individual navigation items with smooth scrolling */}
              <NavItem>
                <NavLinks
                  to='uplondfiles'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Quickscan
                </NavLinks>
              </NavItem>
              <NavBtn>
                <NavBtnLink style={{ background: 'white' }} to='/auditlist'>History</NavBtnLink>
              </NavBtn>
              <NavItem>
                <NavLinks
                  to='services'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Services
                </NavLinks>
              </NavItem>
              {/* <NavItem>
                <NavLinks
                  to='signup'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Sign Up
                </NavLinks>
              </NavItem> */}
            </NavMenu>
            {/* Sign In button */}
            {/* <NavBtn>
              <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn> */}
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
