import styled from "styled-components"

const StyledWhyColorSelector = styled.div`
      padding: 10vh 8vw;
`;
const StyledHeading = styled.h2`
    font-size: 6rem;
    font-weight: 700;
    letter-spacing: -.5px;
`;

export default function WhyColorSelector() {
  return (
    <StyledWhyColorSelector>
      <StyledHeading>Why Realtime Colors?</StyledHeading>
    </StyledWhyColorSelector>
  )
}
