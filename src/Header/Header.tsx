import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';

interface HeaderProps {
  sections: { id: string; label: string }[];
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
  transition: background-color 0.3s ease;

  &.scrolled {
    background-color: rgba(255, 255, 255, 0.8);
  }

  nav {
    max-width: 1200px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin: 0 auto 0 0;
    padding: 0;
    margin-left: auto; /* Pushes the menu items to the left edge of the container */
  }

  li {
    margin: 0 10px;
  }

  a {
    display: block;
    padding: 10px;
    font-size: 14px;
    color: #333;
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    color: #000;
  }

  .active a {
    font-weight: bold;
  }

  button {
    position: absolute;
    top: 0;
    right: 20px; /* Keeps the button in the rightmost position */
    height: 100%;
    padding: 10px;
    font-size: 14px;
    color: #333;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

const Header = ({ sections }: HeaderProps) => {
  const [currentSection, setCurrentSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  useEffect(() => {
    const headerHeight = 60; // replace with the actual height of your header

    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const scrollPosition = window.pageYOffset + headerHeight;

      sections.forEach((section) => {
        const sectionTop = (document.getElementById(section.id)?.offsetTop || 0) - headerHeight;
        const sectionBottom = sectionTop + (document.getElementById(section.id)?.offsetHeight || 0);

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setCurrentSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  return (
    <>
    {!isMobile &&
    <StyledHeader className={scrolled ? 'scrolled' : ''}>
      <nav>
        <ul>
          {sections.map((section) => (
            <li key={section.id} className={currentSection === section.id ? 'active' : ''}>
              <Link
                to={section.id}
                smooth={true}
                duration={500}
                offset={-60} // adjust this value based on your header height
              >
                {section.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </StyledHeader>
    }
    </>
  );
};

export default Header;