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
  background-color: orange;
  grid-column: 1 / 5;
  h2 {
  }
  span {
  }
`;
const StyledFreeCard = styled.div`
  padding: 8rem 1.6rem;
  background-color: #e1e1e1;
  grid-column: 5 / 6;
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
          100%<br></br>Free
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
