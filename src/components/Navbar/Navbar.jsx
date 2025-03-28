import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  background: rgba(26, 26, 26, 0.8);
  backdrop-filter: blur(10px);
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem calc((100vw - 1200px) / 2);
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
`;

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.5rem;
  height: 100%;
  cursor: pointer;
  position: relative;
  font-weight: 500;
  transition: all 0.3s ease;

  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    width: 0;
    height: 2px;
    background: #01bf71;
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover {
    color: #01bf71;
    transform: translateY(-2px);
    
    &:after {
      width: 70%;
    }
  }
`;

const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileNav = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(26, 26, 26, 0.95);
    backdrop-filter: blur(10px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 999;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    transition: opacity 0.3s ease;

    ${NavLink} {
      margin: 1rem 0;
      font-size: 1.5rem;
      opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
      transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(20px)')};
      transition: all 0.3s ease;
    }
  }
`;

const CloseIcon = styled(FaTimes)`
  color: #fff;
  font-size: 2rem;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
`;

const Logo = styled(Link)`
  color: #fff;
  font-size: 1.8rem;
  font-weight: bold;
  text-decoration: none;
  padding: 0 1.5rem;
  letter-spacing: 1px;
  background: linear-gradient(120deg, #fff, #01bf71);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Logo to="/">Ninja Portfolio</Logo>
      <Bars onClick={toggleMenu} />
      <NavMenu>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavMenu>
      <MobileNav isOpen={isOpen}>
        <CloseIcon onClick={toggleMenu} />
        <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
        <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
        <NavLink to="/projects" onClick={toggleMenu}>Projects</NavLink>
        <NavLink to="/skills" onClick={toggleMenu}>Skills</NavLink>
        <NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink>
      </MobileNav>
    </Nav>
  );
};

export default Navbar;