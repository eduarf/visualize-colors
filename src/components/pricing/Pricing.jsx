import styled from 'styled-components'

const StyledPricing = styled.section`
    margin-bottom: 100rem;
    padding: 10vh 8vw;
`;

const StyledHeader = styled.h2`
    font-size: 5.2rem;
    font-weight: 800;
    text-align: center;
`;
const StyledSubtitle = styled.h5`
    font-size: 2.2rem;
    font-weight: 500;
    text-align: center;
`;

export default function Pricing() {
  return (
    <StyledPricing>
      <StyledHeader>Plans & Pricing</StyledHeader>
      <StyledSubtitle>The tool is 100% free! This is just a generic section.</StyledSubtitle>
    </StyledPricing>
  )
}
