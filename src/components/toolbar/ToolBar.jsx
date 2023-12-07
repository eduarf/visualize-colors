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

export default function ToolBar() {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  const primaryColor = useSelector((state) => state.theme.primaryColor);
  

  const handleSetColor = (e) => {
    setColor(e.target.value);
    dispatch(changePrimary((e.target.value)));
  };

  return (
    <StyledToolBar>
      <input value={primaryColor} type="color" onChange={(e) => handleSetColor(e)} />
    </StyledToolBar>
  );
}