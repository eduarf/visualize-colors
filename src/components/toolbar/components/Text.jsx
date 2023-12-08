import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { changeText } from "../../../features/ThemeSlice";

const StyledLabel = styled.label`
  cursor: pointer;
  text-align: center;
  padding: 1.3em 1.8em;
  margin: 0;
  position: absolute;
  z-index: 10;
  color: #fff;
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
`;

const StyledContainer = styled.div`
  position: relative;
  height: 95%;
  width: 8%;
  border-radius: 1rem;
  overflow: hidden;
`;

export default function Text() {
  const dispatch = useDispatch();
  const textColor = useSelector((state) => state.theme.textColor);

  const handleSetColor = (e) => {
    dispatch(changeText(e.target.value));
  };
  return (
    <StyledContainer>
      <StyledLabel htmlFor="text">Text</StyledLabel>
      <StyledColorInput
        value={textColor}
        id="text"
        onChange={(e) => handleSetColor(e)}
      />
    </StyledContainer>
  );
}
