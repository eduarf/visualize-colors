import { useState } from "react";
import styled from "styled-components";
import TemplatesDropdown from "../templates-dropdown/TemplatesDropdown";
import { IoChevronDownOutline } from "react-icons/io5";

const StyledNavbar = styled.div`
  background-color: var(--color-background);
  padding: 1.6rem 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
  @media only screen and (max-width: 1200px){
    padding: 1.6rem 6rem;
  }
  @media only screen and (max-width: 1000px){
    padding: 1.6rem 4rem; 
  }
  @media only screen and (max-width: 768px){
    padding: 1.6rem;
  }
`;
const StyledLogo = styled.span`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  color: var(--color-text);
  span {
    animation: sway 2s linear 0s infinite;
    display: inline-block;
  }
  span:nth-child(1) {
    animation-delay: 0.1s;
  }
  span:nth-child(2) {
    animation-delay: 0.2s;
  }
  span:nth-child(3) {
    animation-delay: 0.3s;
  }
  span:nth-child(4) {
    animation-delay: 0.4s;
  }
  span:nth-child(5) {
    animation-delay: 0.5s;
  }
  span:nth-child(6) {
    animation-delay: 0.6s;
  }
  span:nth-child(7) {
    animation-delay: 0.7s;
  }
  span:nth-child(8) {
    animation-delay: 0.8s;
  }
  span:nth-child(9) {
    animation-delay: 0.9s;
  }
  span:nth-child(10) {
    animation-delay: 1s;
  }
  span:nth-child(11) {
    animation-delay: 1.1s;
  }
  span:nth-child(12) {
    animation-delay: 1.2s;
  }
  span:nth-child(13) {
    animation-delay: 1.3s;
  }
  @media only screen and (max-width: 1200px){
    font-size: 1.8rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
  @keyframes sway {
    0% {
      color: var(--color-primary);
      transform: translateY(0);
    }
    33% {
      color: var(--color-secondary);
      transform: translateY(30%);
    }
    66% {
      color: var(--color-accent);
      transform: translateY(-30%);
    }
    100% {
      color: var(--color-primaryComp);
      transform: translateY(0);
    }
  }
`;

const StyledMenu = styled.div`
  font-weight: 400;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  gap: 5rem;
  color: var(--color-text);
  @media only screen and (max-width: 1200px){
    gap: 4rem;
  }
  @media only screen and (max-width: 1000px){
    gap: 3rem;
    font-size: 1.6rem;
  }
  @media only screen and (max-width: 768px){
    gap: 1rem;
    font-size: 1.5rem;
  }
`;

const StyledMenuItem = styled.a`
  cursor: pointer;
  &:hover {
    color: #787474;
  }
`;

const StyledDropdown = styled.div`
  cursor: pointer;
  span {
    position: relative;
    padding: 0.5rem 2rem;
    border: 0.5px solid gray;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    @media only screen and (max-width: 1200px){
      padding: 0.5rem 1.6rem;
    }
    @media only screen and (max-width: 1000px){
      padding: 0.5rem 1.4rem;
    }
    @media only screen and (max-width: 768px){
      padding: 0.4rem 1.1rem;
    }
  }
`;

const Navbar = () => {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  return (
    <StyledNavbar>
      <StyledLogo>
                  <span>C</span>
                  <span>O</span>
                  <span>L</span>
                  <span>O</span>
                  <span>R</span>
                  &nbsp;&nbsp;
                  <span>S</span>
                  <span>E</span>
                  <span>L</span>
                  <span>E</span>
                  <span>C</span>
                  <span>T</span>
                  <span>O</span>
                  <span>R</span>
      </StyledLogo>
      <StyledMenu>
        <StyledMenuItem>Figma Plugin</StyledMenuItem>
        <StyledMenuItem>Docs</StyledMenuItem>
        <StyledDropdown>
          <span
            onMouseEnter={() => setDropdownVisibility(true)}
            onMouseLeave={() => setDropdownVisibility(false)}
          >
            Templates <IoChevronDownOutline />
            {dropdownVisibility ? <TemplatesDropdown /> : null}
          </span>
        </StyledDropdown>
      </StyledMenu>
    </StyledNavbar>
  );
};

export default Navbar;
