import styled from "styled-components";
import Text from "./components/Text";
import Background from "./components/Background";
import Primary from "./components/Primary";
import Secondary from "./components/Secondary";
import Accent from "./components/Accent";
import { BsDice5Fill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { changeTheme, darkTheme, returnToLight } from "../../features/ThemeSlice";
import { useDispatch, useSelector } from "react-redux";
import { GrSun } from "react-icons/gr";

const StyledToolBar = styled.div`
  position: fixed;
  height: 6.5rem;
  width: 80%;
  background-color: var(--color-lightgray);
  background-color: #f0eee6;
  left: 50%;
  bottom: 2rem;
  transform: translateX(-50%);
  border-radius: 0.5rem;
  display: flex;
`;

const StyledDice = styled(BsDice5Fill)`
  font-size: 5.8rem;
  cursor: pointer;
`;

const StyledDarkMode = styled(MdDarkMode)`
  font-size: 5.8rem;
  cursor: pointer;
`;

const StyledLightMode = styled(GrSun)`
  font-size: 5.8rem;
  cursor: pointer;
`;


export default function ToolBar() {
  const isDark = useSelector((state) => state.theme.isDark);
  const dispatch = useDispatch();
  return (
    <StyledToolBar>
      <Text />
      <Background />
      <Primary />
      <Secondary />
      <Accent />
      <StyledDice onClick={() => dispatch(changeTheme())} />
      { isDark ? <StyledLightMode onClick={() => dispatch(returnToLight())} /> : <StyledDarkMode onClick={() => dispatch(darkTheme())} /> }
    </StyledToolBar>
  );
}
