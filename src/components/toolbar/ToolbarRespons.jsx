import styled from "styled-components";
import { RxDoubleArrowUp, RxDoubleArrowDown } from "react-icons/rx";
import { toolbarController } from "../../features/ThemeSlice";
import { useDispatch, useSelector } from "react-redux";

const StyledToolbarRespons = styled.div`
  position: fixed;
  height: 6.5rem;
  width: 50%;
  background-color: #e1e1e1;
  left: 50%;
  bottom: 0.0001rem;
  transform: translateX(-50%);
  border-radius: 0.5rem;
  z-index: 999999;
  padding: 0.75rem;
  display: none;
  span {
    font-size: 2rem;
  }
  @media only screen and (max-width: 1000px) {
    display: block;
  }
`;

const StyledArrowUp = styled(RxDoubleArrowUp)`
  font-size: 2rem;
`;
const StyledArrowDown = styled(RxDoubleArrowDown)`
  font-size: 2rem;
`;

const StyledContainer = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
`;

export default function ToolbarRespons() {
  const dispatch = useDispatch();
  const isToolbarOpen = useSelector((state) => state.theme.isToolbarOpen);
  return (
    <StyledToolbarRespons>
      <StyledContainer onClick={() => dispatch(toolbarController())}>
        <span>Colors</span>
        {!isToolbarOpen ? <StyledArrowUp /> : <StyledArrowDown />}
      </StyledContainer>
    </StyledToolbarRespons>
  );
}
