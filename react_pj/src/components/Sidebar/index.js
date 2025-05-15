import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    // SidebarContainer is the main container for the sidebar and accepts an 'isOpen' prop.
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      {/* Icon for closing the sidebar. */}
      <Icon onClick={toggle}>
        {/* CloseIcon is the 'X' icon for closing. */}
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        {/* SidebarMenu is a container for the sidebar links. */}
        <SidebarMenu>
          {/* SidebarLink represents a navigation link. */}
          <SidebarLink
            to='about'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            About
          </SidebarLink>
          {/* Repeat similar structure for other navigation links. */}
          <SidebarLink
            to='discover'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Discover
          </SidebarLink>
          <SidebarLink
            to='services'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Services
          </SidebarLink>
          {/* <SidebarLink
            to='signup'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Sign Up
          </SidebarLink> */}
        </SidebarMenu>
        {/* SideBtnWrap is a container for additional buttons or links. */}
        <SideBtnWrap>
          {/* SidebarRoute represents a route or link (e.g., "Sign In"). */}
          {/*   <SidebarRoute to='/signin'>Sign In</SidebarRoute> */}
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
