import styled from 'styled-components'

const StyledInfoBoxLeft = styled.div`
    padding: 3rem 5rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
`
const StyledHeader = styled.h3`
    font-size: 3.8rem;
    font-weight: 800;
    width: 70%;
`;
const StyledSubtitle = styled.h5`
    font-size: 2.4rem;
    font-weight: 500;
    width: 75%;
`;

export default function InfoBoxLeft() {
  return (
    <StyledInfoBoxLeft>
      <StyledHeader>How Does it Work?</StyledHeader>
      <StyledSubtitle>Get your personalized color palette in 4 steps.</StyledSubtitle>
    </StyledInfoBoxLeft>
  )
}
