import styled from "styled-components";
import PropTypes from "prop-types";

const StyledSecondaryButton = styled.a`
  padding: 0.5em 2em;
  background-color: var(--color-secondary);
  color: var(--color-text);
  border-radius: 1rem;
  display: inline-block;
  font-size: 1.8rem;
  z-index: 1;
  cursor: pointer;
  transition: transform ease 0.2s;
  white-space: nowrap;
  &:hover {
    transform: translate(0, -3px);
  }
`;

export default function SecondaryButton({ name }) {
  return <StyledSecondaryButton>{name}</StyledSecondaryButton>;
}

SecondaryButton.propTypes = {
    name: PropTypes.string.isRequired,
  };
