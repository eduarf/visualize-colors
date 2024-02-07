import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { changeSecondary } from "../../../features/ThemeSlice";
import { isColorDark } from "../../utils/helpers";

const StyledLabel = styled.label`
  cursor: pointer;
  text-align: center;
  margin: 0;
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
`;
const StyledColorInput = styled.input.attrs({
  type: "color",
})`
  appearance: none;
  height: 100%;
  width: 100%;
  border: none;
  cursor: pointer;
`;

const StyledContainer = styled.div`
  position: relative;
  height: 95%;
  width: 14%;
  border-radius: 1rem;
  border: none;
  overflow: hidden;
  @media only screen and (max-width: 1000px) {
    width: 100%;
    min-height: 6rem;
  }
`;

export default function Secondary() {
  const dispatch = useDispatch();
  const secondaryColor = useSelector((state) => state.theme.secondaryColor);
  const isThemeDark = useSelector((state) => state.theme.isDark);
  const isSecondaryColorDark = isColorDark(secondaryColor);

  const handleSetColor = (e) => {
    dispatch(changeSecondary(e.target.value));
  };
  return (
    <StyledContainer>
      <StyledLabel
        $isDark={isSecondaryColorDark}
        $isThemeDark={isThemeDark}
        htmlFor="secondary"
      >
        Secondary
      </StyledLabel>
      <StyledColorInput
        value={secondaryColor}
        id="secondary"
        onChange={(e) => handleSetColor(e)}
      />
    </StyledContainer>
  );
}
