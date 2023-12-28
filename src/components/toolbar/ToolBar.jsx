import styled from "styled-components";
import Text from "./components/Text";
import Background from "./components/Background";
import Primary from "./components/Primary";
import Secondary from "./components/Secondary";
import Accent from "./components/Accent";
import { BsDice5Fill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { changeTheme, darkTheme, returnToLight, onExport } from "../../features/ThemeSlice";
import { useDispatch, useSelector } from "react-redux";
import { GrSun } from "react-icons/gr";
import { CiExport } from "react-icons/ci";

const StyledToolBar = styled.div`
  position: fixed;
  height: 6.5rem;
  width: 85%;
  background-color: var(--color-lightgray);
  background-color: #f0eee6;
  left: 50%;
  bottom: 2rem;
  transform: translateX(-50%);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  z-index: 999999;
`;

const StyledDice = styled(BsDice5Fill)`
  font-size: 5.6rem;
  cursor: pointer;
  background-color: #fff;
  margin: .5rem;
`;

const StyledDarkMode = styled(MdDarkMode)`
  font-size: 5.6rem;
  cursor: pointer;
  background-color: #fff;
  margin: .5rem;
`;

const StyledLightMode = styled(GrSun)`
  font-size: 5.6rem;
  cursor: pointer;
  background-color: #fff;
  margin: .5rem;
`;

const StyledExportIcon = styled(CiExport)`
  font-size: 5.6rem;
  cursor: pointer;
  background-color: #fff;
  margin: .5rem;
`;


export default function ToolBar() {
  const isDark = useSelector((state) => state.theme.isDark);
  const dispatch = useDispatch();
  return (
    <StyledToolBar id='toolbar'>
      <Text />
      <Background />
      <Primary />
      <Secondary />
      <Accent />
      <StyledDice onClick={() => dispatch(changeTheme())} />
      { isDark ? <StyledLightMode id="toolbar" onClick={() => dispatch(returnToLight())} /> : <StyledDarkMode id='toolbar' onClick={() => dispatch(darkTheme())} /> }
      <StyledExportIcon onClick={() => dispatch(onExport())} />
    </StyledToolBar>
  );
}
