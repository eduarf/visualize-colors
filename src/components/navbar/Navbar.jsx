import { useState } from "react";
import styled from "styled-components";
import TemplatesDropdown from "../templates-dropdown/TemplatesDropdown";
import { IoChevronDownOutline } from "react-icons/io5";
import LogoSite from "../logo/LogoSite";

const StyledNavbar = styled.div`
  background-color: var(--color-background);
  padding: 1.6rem 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
  @media only screen and (max-width: 1200px) {
    padding: 1.6rem 6rem;
  }
  @media only screen and (max-width: 1000px) {
    padding: 1.6rem 4rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 1.6rem;
  }
`;

const StyledMenu = styled.div`
  font-weight: 400;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  gap: 5rem;
  color: var(--color-text);
  @media only screen and (max-width: 1200px) {
    gap: 4rem;
  }
  @media only screen and (max-width: 1000px) {
    gap: 3rem;
    font-size: 1.6rem;
  }
  @media only screen and (max-width: 768px) {
    gap: 1rem;
    font-size: 1.5rem;
  }
`;

const StyledMenuItem = styled.a`
  cursor: pointer;
  &:hover {
    color: #787474;
  }
  @media only screen and (max-width: 450px) {
    display: none;
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
    @media only screen and (max-width: 1200px) {
      padding: 0.5rem 1.6rem;
    }
    @media only screen and (max-width: 1000px) {
      padding: 0.5rem 1.4rem;
    }
    @media only screen and (max-width: 768px) {
      padding: 0.4rem 1.1rem;
    }
  }
`;

const Navbar = () => {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  return (
    <StyledNavbar>
      <LogoSite />
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
