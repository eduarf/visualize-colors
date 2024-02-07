import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { changePrimary } from "../../../features/ThemeSlice";
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
  width: 12%;
  border-radius: 1rem;
  border: none;
  overflow: hidden;
  @media only screen and (max-width: 1000px) {
    width: 100%;
    min-height: 6rem;
  }
`;

export default function Primary() {
  const dispatch = useDispatch();
  const primaryColor = useSelector((state) => state.theme.primaryColor);
  const isThemeDark = useSelector((state) => state.theme.isDark);
  const isPrimaryColorDark = isColorDark(primaryColor);

  const handleSetColor = (e) => {
    dispatch(changePrimary(e.target.value));
  };
  return (
    <StyledContainer>
      <StyledLabel
        $isDark={isPrimaryColorDark}
        $isThemeDark={isThemeDark}
        htmlFor="primary"
      >
        Primary
      </StyledLabel>
      <StyledColorInput
        value={primaryColor}
        id="primary"
        onChange={(e) => handleSetColor(e)}
      />
    </StyledContainer>
  );
}
