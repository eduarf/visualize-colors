import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { changeSecondary } from "../../../features/ThemeSlice";

const StyledLabel = styled.label`
  cursor: pointer;
  text-align: center;
  margin: 0;
  position: absolute;
  z-index: 10;
  color: var(--color-text);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
`;

export default function Secondary() {
  const dispatch = useDispatch();
  const secondaryColor = useSelector((state) => state.theme.secondaryColor);

  const handleSetColor = (e) => {
    dispatch(changeSecondary(e.target.value));
  };
  return (
    <StyledContainer>
      <StyledLabel htmlFor="secondary">Secondary</StyledLabel>
      <StyledColorInput
        value={secondaryColor}
        id="secondary"
        onChange={(e) => handleSetColor(e)}
      />
    </StyledContainer>
  );
}
