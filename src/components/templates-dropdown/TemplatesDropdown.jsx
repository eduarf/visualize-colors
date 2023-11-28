import styled from "styled-components";

const StyledTemplatesDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: var(--color-background);
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 0.5px solid gray;
  border-radius: 1rem;
  overflow: hidden;
`;

const StyledDropdownLink = styled.a`
    width: 95%;
    margin: .35rem;
    padding: 1.1rem;
    border-radius: 1rem;
    &:hover {
        background-color: #e6e6e5;
    }
`;

const TemplatesDropdown = () => {
  return (
    <StyledTemplatesDropdown>
      <StyledDropdownLink>Dashboard</StyledDropdownLink>
      <StyledDropdownLink>Blog Post</StyledDropdownLink>
    </StyledTemplatesDropdown>
  );
};

export default TemplatesDropdown;
