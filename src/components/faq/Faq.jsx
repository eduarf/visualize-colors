import { useState } from "react";
import styled from "styled-components";
import { accordionItems } from "../../../data";
import { FaPlus } from "react-icons/fa";

const StyledFaq = styled.section`
  padding: 10vh 8vw;
  margin-bottom: 100rem;
  display: grid;
  grid-template-columns: 45% 55%;
  gap: 2rem;
`;
const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const AccordionItem = styled.div`
  border: none;
  outline: none;
  margin-bottom: 5px;
  position: relative;
`;

const AccordionHeader = styled.div`
  background-color: var(--color-primaryComp);
  padding: 1.2rem;
  cursor: pointer;
  font-size: 2.5rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AccordionContent = styled.div`
  padding: ${(props) => (props.isOpen ? "10px" : "0")};
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.2s ease-in-out;
  max-height: ${(props) => (props.isOpen ? "500px" : "0")};
  background-color: var(--color-primaryComp);
  p {
    width: 90%;
    font-size: 1.8rem;
    line-height: 2;
    font-weight: 400;
    white-space: pre-wrap;
  }
`;

const StyledIcon = styled(FaPlus)`
  transition: all 0.2s ease-in-out;
  transform: ${(props) => (props.isOpen ? "rotate(45deg)" : "rotate(0)")};
  color: var(--color-accent);
  font-size: 2.8rem;
`;

const StyledHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const StyledHeader = styled.h2`
  font-size: 5rem;
  font-weight: 800;
  letter-spacing: 2px;
`;
const StyledSubtitle = styled.h5`
  font-size: 2.4rem;
  font-weight: 500;
  width: 70%;
`;

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <StyledFaq>
      <StyledHeaderContainer>
        <StyledHeader>FAQ</StyledHeader>
        <StyledSubtitle>
          Answers to some questions you might have.
        </StyledSubtitle>
      </StyledHeaderContainer>
      <AccordionContainer>
        {accordionItems.map((item, index) => (
          <AccordionItem key={index}>
            <AccordionHeader onClick={() => handleToggle(index)}>
              {item.title}
              <StyledIcon isOpen={openIndex === index} />
            </AccordionHeader>
            <AccordionContent isOpen={openIndex === index}>
              <p>{openIndex === index ? item.content : null}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </AccordionContainer>
    </StyledFaq>
  );
}
