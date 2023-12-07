/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { changePrimary } from "../../features/ThemeSlice";

const StyledToolBar = styled.div`
  position: fixed;
  height: 8rem;
  width: 90%;
  background-color: var(--color-lightgray);
  left: 50%;
  transform: translateX(-50%);
  border-radius: 1rem;
`;

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
`;

const StyledContainer = styled.div`
  position: relative;
  height: 95%;
  width: 8%;
`;

export default function ToolBar() {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  const textColor = useSelector((state) => state.theme.textColor);

  const handleSetColor = (e) => {
    setColor(e.target.value);
    dispatch(changePrimary(e.target.value));
  };

  return (
    <StyledToolBar>
      <StyledContainer>
        <StyledLabel htmlFor="text">Deneme</StyledLabel>
        <StyledColorInput
          value={textColor}
          id="text"
          onChange={(e) => handleSetColor(e)}
        />
      </StyledContainer>
    </StyledToolBar>
  );
}
