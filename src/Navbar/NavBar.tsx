import React from 'react'
import { Navbar, NavbarContainer, NavbarItem, NavbarMenuContainer } from './NavBarElements';

export default function NavBar() {
  return (
    <NavbarContainer>
      <h1>My Site</h1>
      <NavbarMenuContainer>
        <NavbarItem>
          <a href="#">Header</a>
        </NavbarItem>
        <NavbarItem>
          <a href="#">About Me</a>
        </NavbarItem>
        <NavbarItem>
          <a href="#">Projects</a>
        </NavbarItem>
        <NavbarItem>
          <a href="#">Contact</a>
        </NavbarItem>
      </NavbarMenuContainer>
    </NavbarContainer>
  );
}
