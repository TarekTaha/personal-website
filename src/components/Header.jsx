import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  text-decoration: none;
  
  &:hover {
    color: ${({ theme }) => theme.colors.light};
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 70%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.primary};
    flex-direction: column;
    padding: 2rem;
    transition: right 0.3s ease;
    z-index: 1000;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: ${({ active }) => (active ? '600' : '400')};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${({ active }) => (active ? '100%' : '0')};
    height: 2px;
    background-color: ${({ theme }) => theme.colors.accent};
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <HeaderContainer>
      <NavContainer>
        <Logo to="/">Dr. Tarek Taha</Logo>
        
        <MenuButton onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MenuButton>
        
        <NavLinks isOpen={isMenuOpen}>
          <NavLink to="/" active={location.pathname === '/' ? 1 : 0}>
            Home
          </NavLink>
          <NavLink to="/about" active={location.pathname === '/about' ? 1 : 0}>
            About
          </NavLink>
          <NavLink to="/publications" active={location.pathname === '/publications' ? 1 : 0}>
            Publications
          </NavLink>
          <NavLink to="/projects" active={location.pathname === '/projects' ? 1 : 0}>
            Research
          </NavLink>
          <NavLink to="/contact" active={location.pathname === '/contact' ? 1 : 0}>
            Contact
          </NavLink>
        </NavLinks>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header; 