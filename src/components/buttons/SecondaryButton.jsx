import styled from "styled-components";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { isColorDark } from "../utils/helpers";

const StyledSecondaryButton = styled.a`
  padding: 0.5em 2em;
  background-color: var(--color-secondary);
  color: ${(props) => {
    if (props.$isDark && props.$isThemeDark) {
      return "#fff";
    } else if (props.$isDark && !props.$isThemeDark) {
      return "#fff";
    } else if (!props.$isDark && props.$isThemeDark) {
      return "#000";
    } else {
      return "#000";
    }
  }};
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
  const secondaryColor = useSelector((state) => state.theme.secondaryColor);
  const isThemeDark = useSelector((state) => state.theme.isDark);
  const isSecondaryColorDark = isColorDark(secondaryColor);
  return (
    <StyledSecondaryButton
      $isDark={isSecondaryColorDark}
      $isThemeDark={isThemeDark}
    >
      {name}
    </StyledSecondaryButton>
  );
}

SecondaryButton.propTypes = {
  name: PropTypes.string.isRequired,
};
