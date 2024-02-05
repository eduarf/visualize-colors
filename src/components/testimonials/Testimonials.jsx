import styled from "styled-components";
import { testimonialsItems } from "../../../data";
import { LiaStarSolid } from "react-icons/lia";

const StyledTestimonials = styled.section`
  padding: 10vh 8vw;
  @media only screen and (max-width: 768px) {
    padding: 2vh 6vw;
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

const StyledTestimonialsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  margin-top: 5rem;
  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const StyledTestimonial = styled.div`
  background-color: var(--color-primaryComp);
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 2rem;
`;

const StyledReviewer = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.8rem;
  @media only screen and (max-width: 1200px) {
    font-size: 1.6rem;
  }
`;

const StyledReviewerImage = styled.div`
  height: 8rem;
  width: 8rem;
  border-radius: 50%;
  background-image: ${(props) =>
    props.$isIndexEven
      ? "linear-gradient(var(--color-primary), var(--color-secondary))"
      : "linear-gradient(var(--color-accent), var(--color-primaryComp))"};
  border: 2px solid var(--color-text);
`;

const StyledReviewerName = styled.div`
  span {
    color: gray;
    font-size: 1.6rem;
    @media only screen and (max-width: 1200px) {
      font-size: 1.4rem;
    }
  }
`;

const StyledIconContainer = styled.div``;

const StyledIcon = styled(LiaStarSolid)`
  font-size: 3.4rem;
  color: var(--color-accent);
`;

const StyledReview = styled.p`
  font-size: 1.8rem;
  line-height: 2;
  width: 80%;
  @media only screen and (max-width: 1200px) {
    width: 100%;
    font-size: 1.6rem;
  }
  @media only screen and (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

export default function Testimonials() {
  return (
    <StyledTestimonials>
      <StyledHeader>Testimonials</StyledHeader>
      <StyledSubtitle>
        What (imaginary) people are saying about this site.
      </StyledSubtitle>
      <StyledTestimonialsContainer>
        {testimonialsItems.map((item, index) => {
          return (
            <StyledTestimonial key={item.id}>
              <StyledReviewer>
                <StyledReviewerImage $isIndexEven={(index + 1) % 2 === 0} />
                <StyledReviewerName>
                  {item.userName}
                  <br></br>
                  <span>{item.profession}</span>
                </StyledReviewerName>
              </StyledReviewer>
              <StyledIconContainer>
                <StyledIcon />
                <StyledIcon />
                <StyledIcon />
                <StyledIcon />
                <StyledIcon />
              </StyledIconContainer>
              <StyledReview>{item.comment}</StyledReview>
            </StyledTestimonial>
          );
        })}
      </StyledTestimonialsContainer>
    </StyledTestimonials>
  );
}
