import styled from "styled-components";
import { subMenuItems } from "../../../../data";
import { useDispatch, useSelector } from "react-redux";
import { popupSubController } from "../../../features/popupSlice";

const StyledSubMenu = styled.div`
  display: flex;
  gap: 1.2rem;
  @media only screen and (max-width: 1000px) {
    gap: 1rem;
  }
  @media only screen and (max-width: 768px) {
    gap: 0.7rem;
  }
`;

const StyledSubMenuItem = styled.div`
  font-size: 1.8rem;
  padding: 0.2rem 1.3rem;
  border: 1px solid var(--color-lightgray);
  border-radius: 5px;
  color: ${(props) => (props.$isSelected ? "#fff" : "#000")};
  background-color: ${(props) => (props.$isSelected ? "#000" : "transparent")};
  @media only screen and (max-width: 768px) {
    font-size: 1.6rem;
    padding: 0.2rem 1rem;
  }
  &:hover {
    background-color: ${(props) => (props.$isSelected ? null : "#ebeaea")};
    cursor: pointer;
  }
`;

export default function SubMenu() {
  const popupName = useSelector((state) => state.popup.popupSub);
  const dispatch = useDispatch();
  return (
    <StyledSubMenu>
      {subMenuItems.map((item) => {
        return (
          <StyledSubMenuItem
            key={item.id}
            $isSelected={
              item.name === popupName ||
              (popupName === null && item.name === "HEX")
            }
            onClick={() => dispatch(popupSubController(item.name))}
          >
            {item.name}
          </StyledSubMenuItem>
        );
      })}
    </StyledSubMenu>
  );
}
