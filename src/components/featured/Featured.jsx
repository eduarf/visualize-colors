import { nanoid } from "nanoid";
import styled from "styled-components";

const StyledFeatured = styled.section`
  margin-bottom: 100rem;
  padding: 10vh 8vw;
`;

const StyledHeader = styled.h2`
  font-size: 5rem;
  font-weight: 800;
  text-align: center;
  color: var(--color-text);
  @media only screen and (max-width: 1200px) {
    font-size: 4.4rem;
  }
  @media only screen and (max-width: 1000px) {
    font-size: 4rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 3.6rem;
  }
`;
const StyledSubtitle = styled.h5`
  font-size: 2.2rem;
  font-weight: 500;
  text-align: center;
  color: var(--color-text);
  @media only screen and (max-width: 1200px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 1000px) {
    font-size: 1.8rem;
  }
`;

const StyledCard = styled.div`
  background-color: var(--color-primaryComp);
  padding: 4rem;
  border-radius: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: var(--color-primary);
  }
`;

const StyledLink = styled.a`
  font-size: 1.8rem;
  color: var(--color-text);
  text-align: center;
`;

const StyledCardContainer = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 6rem;
`;
export default function Featured() {
  const data = [
    {
      id: nanoid(),
      link: "Examples of Colors from Popular Sites",
    },
    {
      id: nanoid(),
      link: "How to Select Colors",
    },
    {
      id: nanoid(),
      link: "Learn More about the Releases",
    },
  ];
  return (
    <StyledFeatured>
      <StyledHeader>Featured Articles</StyledHeader>
      <StyledSubtitle>Just some interesting guides and posts.</StyledSubtitle>
      <StyledCardContainer>
        {data.map((item) => {
          return (
            <StyledCard key={item.id}>
              <StyledLink>{item.link}</StyledLink>
            </StyledCard>
          );
        })}
      </StyledCardContainer>
    </StyledFeatured>
  );
}
