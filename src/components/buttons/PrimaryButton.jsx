import styled from "styled-components";
import PropTypes from "prop-types";

const StyledPrimaryButton = styled.a`
  padding: 0.5em 2em;
  background-color: var(--color-primary);
  color: var(--color-background);
  border-radius: 1rem;
  transition: transform ease 0.2s, box-shadow ease 0.2s;
  display: inline-block;
  font-size: 1.8rem;
  z-index: 2;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    transform: translate(0, -3px);
    box-shadow: var(--color-primary) 0px 30px 90px;
  }
`;

export default function PrimaryButton({ name }) {
  return <StyledPrimaryButton>{name}</StyledPrimaryButton>;
}

PrimaryButton.propTypes = {
  name: PropTypes.string.isRequired,
};
