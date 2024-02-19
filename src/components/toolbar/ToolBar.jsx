import styled from "styled-components";
import Text from "./components/Text";
import Background from "./components/Background";
import Primary from "./components/Primary";
import Secondary from "./components/Secondary";
import Accent from "./components/Accent";
import { BsDice5Fill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import {
  changeTheme,
  darkTheme,
  returnToLight,
  onExport,
} from "../../features/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { GrSun } from "react-icons/gr";
import { CiExport } from "react-icons/ci";
import { GrUndo, GrRedo } from "react-icons/gr";
import { loadPreviousTheme, loadNextTheme } from "../../features/themeSlice";
import TooltipComp from "../tooltip/TooltipComp";
import { useEffect, useState } from "react";

const StyledToolBar = styled.div`
  position: fixed;
  height: 6.5rem;
  width: 85%;
  background-color: #f0eee6;
  left: 50%;
  bottom: 2rem;
  transform: translateX(-50%);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  z-index: 999998;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    bottom: 6.5rem;
    transform: translateX(0);
    left: 0;
    padding-top: 5.5rem;
    min-height: 80vh;
    max-height: 80vh;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
      rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    display: ${(props) => (props.$isToolbarOpen ? "flex" : "none")};
  }
`;

const StyledDice = styled(BsDice5Fill)`
  font-size: 5.4rem;
  cursor: pointer;
  background-color: #fff;
  margin: 0.5rem;
`;

const StyledDarkMode = styled(MdDarkMode)`
  font-size: 5.6rem;
  cursor: pointer;
  background-color: #fff;
  margin: 0.5rem;
  border-radius: 5px;
`;

const StyledLightMode = styled(GrSun)`
  font-size: 5.6rem;
  cursor: pointer;
  background-color: #fff;
  margin: 0.5rem;
  border-radius: 5px;
`;

const StyledExportIcon = styled(CiExport)`
  font-size: 5.6rem;
  cursor: pointer;
  background-color: #fff;
  margin: 0.5rem;
  display: inline-block;
  position: relative;
  border-radius: 5px;
`;

const StyledUndoIcon = styled(GrUndo)`
  font-size: 5.6rem;
  cursor: pointer;
  background-color: #fff;
  margin: 0.5rem;
  border-radius: 5px;
`;
const StyledRedoIcon = styled(GrRedo)`
  font-size: 5.6rem;
  cursor: pointer;
  background-color: #fff;
  margin: 0.5rem;
  border-radius: 5px;
`;

const StyledTooltipContainer = styled.div`
  opacity: 0;
  visibility: hidden;
`;

const StyledIconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    ${StyledTooltipContainer} {
      opacity: 1;
      visibility: visible;
    }
  }
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
    background-color: #fff;
  }
`;

const StyledColorsContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  align-items: center;
  @media only screen and (max-width: 1000px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    width: 100%;
  }
`;

export default function ToolBar() {
  const isDark = useSelector((state) => state.theme.isDark);
  const isToolbarOpen = useSelector((state) => state.theme.isToolbarOpen);
  const [isMobile, setIsMobile] = useState(false);
  const screen = window.matchMedia(
    "only screen and (max-width: 760px)"
  ).matches;
  const dispatch = useDispatch();

  useEffect(() => {
    if (screen) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [screen]);
  return (
    <StyledToolBar id="toolbar" $isToolbarOpen={isToolbarOpen}>
      <StyledColorsContainer>
        <Text />
        <Background />
        <Primary />
        <Secondary />
        <Accent />
        <StyledContainer>
          <StyledIconContainer>
            {isDark ? (
              <StyledLightMode
                id="toolbar"
                onClick={() => dispatch(returnToLight())}
              />
            ) : (
              <StyledDarkMode
                id="toolbar"
                onClick={() => dispatch(darkTheme())}
              />
            )}
            <StyledTooltipContainer>
              {isMobile ? null : (
                <TooltipComp title="Dark/Light" subtitle="(Alt + T)" />
              )}
            </StyledTooltipContainer>
          </StyledIconContainer>

          <StyledIconContainer>
            <StyledDice onClick={() => dispatch(changeTheme())} />
            <StyledTooltipContainer>
              {isMobile ? null : (
                <TooltipComp title="Randomize Colors" subtitle="(Spacebar)" />
              )}
            </StyledTooltipContainer>
          </StyledIconContainer>

          <StyledIconContainer>
            <StyledUndoIcon onClick={() => dispatch(loadPreviousTheme())} />
            <StyledTooltipContainer>
              {isMobile ? null : (
                <TooltipComp title="Undo" subtitle="(← Left arrow)" />
              )}
            </StyledTooltipContainer>
          </StyledIconContainer>

          <StyledIconContainer>
            <StyledRedoIcon onClick={() => dispatch(loadNextTheme())} />
            <StyledTooltipContainer>
              {isMobile ? null : (
                <TooltipComp title="Redo" subtitle="(Right arrow →)" />
              )}
            </StyledTooltipContainer>
          </StyledIconContainer>

          <StyledIconContainer>
            <StyledExportIcon onClick={() => dispatch(onExport())} />
            <StyledTooltipContainer>
              {isMobile ? null : (
                <TooltipComp title="Export" subtitle="(CTRL + E)"></TooltipComp>
              )}
            </StyledTooltipContainer>
          </StyledIconContainer>
        </StyledContainer>
      </StyledColorsContainer>
    </StyledToolBar>
  );
}
