import styled from "styled-components"
import { subMenuItems } from "../../../../data"
// import { useSelector } from "react-redux";

const StyledSubMenu = styled.div`
display: flex;
gap: 3rem;
`;

const StyledSubMenuItem = styled.div`
  font-size: 1.8rem;
  padding: .2rem 1.3rem;
  border: 1px solid var(--color-lightgray);
  border-radius: 5px;
  &:hover {
    background-color: #ebeaea;
    cursor: pointer;
  }
`;

export default function SubMenu() {
  // const popupName = useSelector(state => state.popup.popupContent);
  // console.log(popupName);
  return (
    <StyledSubMenu>
      {subMenuItems.map((item) => {
        return <StyledSubMenuItem key={item.id}>
            {item.name}
        </StyledSubMenuItem>
      })}
    </StyledSubMenu>
  )
}
