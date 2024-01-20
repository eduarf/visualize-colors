import styled from "styled-components";

const StyledBentoComp = styled.div`
  padding: 6vh 8vw;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 60% 40%;
  max-width: 1920px;
  margin-bottom: 50rem;
  height: 70rem;
`;

const StyledUsersCard = styled.div`
  padding: 8rem 1.6rem;
  background-color: var(--color-primary);
  grid-column: 1 / 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  border-radius: 2rem;
  h2 {
    font-size: 6rem;
    font-weight: 800;
    letter-spacing: -1px;
  }
  span {
    font-size: 1.8rem;
  }
`;
const StyledFreeCard = styled.div`
  padding: 8rem 1.6rem;
  background-color: var(--color-secondary);
  grid-column: 5 / 6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  gap: 2rem;
  h2 {
    font-size: 4rem;
    font-weight: 800;
    line-height: 1.2;
  }
  span {
    font-size: 1.8rem;
  }
`;

const StyledProductHuntCard = styled.div`
  grid-column: 4 / 6;
  padding: 8rem 1.6rem;
  background-color: red;
`;

const StyledPluginCard = styled.div`
  grid-column: 1 / 4;
  padding: 8rem 1.6rem;
  background-color: black;
`;

export default function BentoComp() {
  return (
    <StyledBentoComp>
      <StyledUsersCard>
        <h2>200K+ Users</h2>
        <span>and counting...</span>
      </StyledUsersCard>
      <StyledFreeCard>
        <h2>
          100%<br></br>Free!
        </h2>
        <span>Forever.</span>
      </StyledFreeCard>
      <StyledPluginCard>
        <h2>11K+ Plugin Users</h2>
        <a href="#">Check it out on Figma</a>
      </StyledPluginCard>
      <StyledProductHuntCard>
        <h2>
          200+ ProductHunt <br /> Upvotes
        </h2>
        <a href="#">Leave a review</a>
      </StyledProductHuntCard>
    </StyledBentoComp>
  );
}
