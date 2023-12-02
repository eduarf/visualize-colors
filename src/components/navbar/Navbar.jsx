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
`;
const StyledLogo = styled.p`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.5px;
`;

const StyledMenu = styled.div`
  font-weight: 400;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  gap: 5rem;
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
  }
`;

const Navbar = () => {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  return (
    <StyledNavbar>
      <StyledLogo>Color Selector</StyledLogo>
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
