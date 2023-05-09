import React from 'react'
import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 1rem;
`;


export const Navbar = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  margin: 0;
  padding: 1rem;

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin-left: 1rem;
    }

    a {
      color: white;
      text-decoration: none;
      font-weight: bold;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: #f1c40f;
      }
    }
  }
`;

export const NavbarMenuContainer = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavbarItem = styled.li`
  margin-left: 1rem;

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #f1c40f;
    }
  }
`;
