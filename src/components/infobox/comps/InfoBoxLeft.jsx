import styled from 'styled-components'

const StyledInfoBoxLeft = styled.div`
    padding: 3rem 5rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    @media only screen and (max-width: 1200px){
        gap: 2;
    }
    @media only screen and (max-width: 1000px){
        gap: 1rem;
        padding: 2rem 3rem;
    }
`
const StyledHeader = styled.h3`
    font-size: 3.8rem;
    font-weight: 800;
    width: 70%;
    @media only screen and (max-width: 1200px){
        font-size: 3.4rem;
    }
    @media only screen and (max-width: 1000px){
        font-size: 3rem;
    }
    @media only screen and (max-width: 500px){
        font-size: 2.4rem;
    }
`;
const StyledSubtitle = styled.h5`
    font-size: 2.4rem;
    font-weight: 500;
    width: 75%;
    @media only screen and (max-width: 1200px){
        font-size: 2.2rem;
    }
    @media only screen and (max-width: 1000px){
        font-size: 2rem;
    }
    @media only screen and (max-width: 500px){
        font-size: 1.8rem;
    }
`;

export default function InfoBoxLeft() {
  return (
    <StyledInfoBoxLeft>
      <StyledHeader>How Does it Work?</StyledHeader>
      <StyledSubtitle>Get your personalized color palette in 4 steps.</StyledSubtitle>
    </StyledInfoBoxLeft>
  )
}
