import styled from "styled-components";
import SubMenu from "./SubMenu";
import { useSelector } from "react-redux";
import Values from "values.js";
import { nanoid } from "nanoid";

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
  // const backgroundColor = useSelector((state) => state.theme.backgroundColor);
  const primaryColor = useSelector((state) => state.theme.primaryColor);
  const secondaryColor = useSelector((state) => state.theme.secondaryColor);
  const accentColor = useSelector((state) => state.theme.accentColor);
  const textColorShades = new Values(primaryComplement).all(13).reverse();
  const backgroundColorShades = new Values(primaryColor).all(13).reverse();
  const primarycolorShades = new Values(primaryColor).all(13).reverse();
  const secondaryColorShades = new Values(secondaryColor).all(13).reverse();
  const accentColorShades = new Values(accentColor).all(13).reverse();
  console.log(primarycolorShades);
  return (
    <StyledShadesContent>
      <SubMenu />
      <StyledShadeContainer>
        <StyledShades>
          {textColorShades.map((item) => {
            return <StyledColor key={nanoid()} $color={item.hex}></StyledColor>;
          })}
        </StyledShades>
        <StyledShades>
          {backgroundColorShades.map((item) => {
            return <StyledColor key={nanoid()} $color={item.hex}></StyledColor>;
          })}
        </StyledShades>
        <StyledShades>
          {primarycolorShades.map((item) => {
            return <StyledColor key={nanoid()} $color={item.hex}></StyledColor>;
          })}
        </StyledShades>
        <StyledShades>
          {secondaryColorShades.map((item) => {
            return <StyledColor key={nanoid()} $color={item.hex}></StyledColor>;
          })}
        </StyledShades>
        <StyledShades>
          {accentColorShades.map((item) => {
            return <StyledColor key={nanoid()} $color={item.hex}></StyledColor>;
          })}
        </StyledShades>
      </StyledShadeContainer>
    </StyledShadesContent>
  );
}

const StyledColor = styled.div.attrs(props => ({
  style: {
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
}))``;