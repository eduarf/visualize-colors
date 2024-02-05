import { nanoid } from "nanoid";
import styled from "styled-components";

const StyledFeatured = styled.section``;

const StyledHeader = styled.h2``;
const StyledSubtitle = styled.h5``;

export default function Featured() {
  const data = [
    {
      id: nanoid(),
      content: "Examples of Colors from Popular Sites",
    },
    {
      id: nanoid(),
      content: "How to Select Colors",
    },
    {
      id: nanoid(),
      content: "Learn More about the Releases",
    },
  ];
  console.log(data);
  return (
    <StyledFeatured>
      <StyledHeader>Featured Articles</StyledHeader>
      <StyledSubtitle>Just some interesting guides and posts.</StyledSubtitle>
    </StyledFeatured>
  );
}
