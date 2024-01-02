import styled from "styled-components";
import SubMenu from "./SubMenu";
import { useSelector } from "react-redux";
import Values from "values.js";
import { nanoid } from "nanoid";
import HoverColor from "./hoverColor";

const StyledShadesContent = styled.div`
  padding: 2.2rem 1.6rem;
`;

const StyledShadeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  gap: 5px;
  margin-top: 2rem;
`;
const StyledShades = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 5px;
  flex-wrap: wrap;
`;

export default function ShadesContent() {
  const primaryComplement = useSelector((state) => state.theme.primaryComplement);
  const primaryColor = useSelector((state) => state.theme.primaryColor);
  const secondaryColor = useSelector((state) => state.theme.secondaryColor);
  const accentColor = useSelector((state) => state.theme.accentColor);
  const textColorShades = new Values(primaryComplement).all(13).reverse();
  const primarycolorShades = new Values(primaryColor).all(13).reverse();
  const secondaryColorShades = new Values(secondaryColor).all(13).reverse();
  const accentColorShades = new Values(accentColor).all(13).reverse();
  return (
    <StyledShadesContent>
      <SubMenu />
      <StyledShadeContainer>
        <StyledShades>
          {textColorShades.map((item) => {
            return <StyledColor  key={nanoid()} $color={item.hex}>
                <HoverColor item={item} />
            </StyledColor>;
          })}
        </StyledShades>
        <StyledShades>
          {primarycolorShades.map((item) => {
            return <StyledColor key={nanoid()} $color={item.hex}>
              <HoverColor item={item} />
            </StyledColor>;
          })}
        </StyledShades>
        <StyledShades>
          {primarycolorShades.map((item) => {
            return <StyledColor key={nanoid()} $color={item.hex}>
              <HoverColor item={item} />
            </StyledColor>;
          })}
        </StyledShades>
        <StyledShades>
          {secondaryColorShades.map((item) => {
            return <StyledColor key={nanoid()} $color={item.hex}>
              <HoverColor item={item} />
            </StyledColor>;
          })}
        </StyledShades>
        <StyledShades>
          {accentColorShades.map((item) => {
            return <StyledColor key={nanoid()} $color={item.hex}>
              <HoverColor item={item} />
            </StyledColor>;
          })}
        </StyledShades>
      </StyledShadeContainer>
    </StyledShadesContent>
  );
}

const StyledColor = styled.div.attrs(props => ({
  style: {
    position: 'relative',
    height: '40px',
    borderRadius: '5px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '45%',
    cursor: 'pointer',
    background: `#${props.$color}`,
  },
}))`
    div {
      position: absolute;
    padding: 5px 5px;
    background-color: rgba(255, 255, 255);
    color: black;
    border-radius: 5px;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 1;
    user-select: none;
    visibility: hidden;
  }
  &:hover div {
    visibility: visible;
  }
`;