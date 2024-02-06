import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { changePrimary } from "../../../features/ThemeSlice";

const StyledLabel = styled.label`
  cursor: pointer;
  text-align: center;
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

  const handleSetColor = (e) => {
    dispatch(changePrimary(e.target.value));
  };
  return (
    <StyledContainer>
      <StyledLabel htmlFor="primary">Primary</StyledLabel>
      <StyledColorInput
        value={primaryColor}
        id="primary"
        onChange={(e) => handleSetColor(e)}
      />
    </StyledContainer>
  );
}
