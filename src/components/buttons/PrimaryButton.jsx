import styled from "styled-components";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { isColorDark } from "../utils/helpers";

const StyledPrimaryButton = styled.a`
  padding: 0.5em 2em;
  background-color: var(--color-primary);
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
  transition: transform ease 0.2s, box-shadow ease 0.2s;
  display: block;
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
  const primaryColor = useSelector((state) => state.theme.primaryColor);
  const isThemeDark = useSelector((state) => state.theme.isDark);
  const isPrimaryColorDark = isColorDark(primaryColor);
  return (
    <StyledPrimaryButton
      $isDark={isPrimaryColorDark}
      $isThemeDark={isThemeDark}
    >
      {name}
    </StyledPrimaryButton>
  );
}

PrimaryButton.propTypes = {
  name: PropTypes.string.isRequired,
};
