import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { isColorDark } from "../utils/helpers";

const StyledFeatured = styled.section`
  padding: 10vh 8vw;
  @media only screen and (max-width: 1000px) {
    padding: 4vh 4vw;
  }
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
  @media only screen and (max-width: 500px) {
    padding: 3rem;
  }
`;

const StyledLink = styled.a`
  font-size: 1.8rem;
  text-align: center;
  color: ${(props) => {
    if (props.$isDark && props.$isThemeDark) {
      return "#fff";
    } else if (props.$isDark && !props.$isThemeDark) {
      return "#fff";
    } else if (!props.$isDark && props.$isThemeDark) {
      return "#000";
    } else {
      return "#000";
    }
  }};
`;

const StyledCardContainer = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 6rem;
  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1rem;
    margin-top: 3rem;
  }
`;
export default function Featured() {
  const primaryComp = useSelector((state) => state.theme.primaryComplement);
  const isThemeDark = useSelector((state) => state.theme.isDark);
  const isPrimaryCompDark = isColorDark(primaryComp);
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
              <StyledLink
                $isDark={isPrimaryCompDark}
                $isThemeDark={isThemeDark}
              >
                {item.link}
              </StyledLink>
            </StyledCard>
          );
        })}
      </StyledCardContainer>
    </StyledFeatured>
  );
}
