import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { changeBackground } from "../../../features/ThemeSlice";

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
  @media only screen and (max-width: 1000px) {
    width: 100%;
    min-height: 6rem;
  }
`;

export default function Background() {
  const dispatch = useDispatch();
  const backgroundColor = useSelector((state) => state.theme.backgroundColor);

  const handleSetColor = (e) => {
    dispatch(changeBackground(e.target.value));
  };
  return (
    <StyledContainer>
      <StyledLabel htmlFor="background">Background</StyledLabel>
      <StyledColorInput
        value={backgroundColor}
        id="background"
        onChange={(e) => handleSetColor(e)}
      />
    </StyledContainer>
  );
}
