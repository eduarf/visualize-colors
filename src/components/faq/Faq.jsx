import { useState } from "react";
import styled from "styled-components";
import { accordionItems } from "../../../data";
import { FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { isColorDark } from "../utils/helpers";

const StyledFaq = styled.section`
  padding: 10vh 8vw;
  display: grid;
  grid-template-columns: 45% 55%;
  gap: 2rem;
  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding: 4vh 6vw;
  }
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
  @media only screen and (max-width: 1200px) {
    font-size: 2.2rem;
  }
  @media only screen and (max-width: 1000px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.8rem;
    font-weight: 700;
  }
`;

const AccordionContent = styled.div`
  padding: ${(props) => (props.isOpen ? "10px" : "0")};
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.2s ease-in-out;
  max-height: ${(props) => (props.isOpen ? "500px" : "0")};
  background-color: var(--color-primaryComp);
`;
const AccordionPara = styled.p`
  width: 90%;
  font-size: 1.8rem;
  line-height: 2;
  font-weight: 400;
  white-space: pre-wrap;
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
  @media only screen and (max-width: 768px) {
    font-size: 1.6rem;
    width: 100%;
  }
`;

const StyledIcon = styled(FaPlus)`
  transition: all 0.2s ease-in-out;
  transform: ${(props) => (props.isOpen ? "rotate(45deg)" : "rotate(0)")};
  color: var(--color-accent);
  font-size: 2.8rem;
  @media only screen and (max-width: 1000px) {
    font-size: 2.4rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StyledHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const StyledHeader = styled.h2`
  font-size: 5rem;
  font-weight: 800;
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
  font-size: 2.4rem;
  font-weight: 500;
  width: 70%;
  color: var(--color-text);
  @media only screen and (max-width: 1200px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 1000px) {
    font-size: 1.8rem;
  }
`;

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const primaryComp = useSelector((state) => state.theme.primaryComplement);
  const isThemeDark = useSelector((state) => state.theme.isDark);
  const isPrimaryCompDark = isColorDark(primaryComp);

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
            <AccordionHeader
              $isDark={isPrimaryCompDark}
              $isThemeDark={isThemeDark}
              onClick={() => handleToggle(index)}
            >
              {item.title}
              <StyledIcon isOpen={openIndex === index} />
            </AccordionHeader>
            <AccordionContent isOpen={openIndex === index}>
              <AccordionPara
                $isDark={isPrimaryCompDark}
                $isThemeDark={isThemeDark}
              >
                {openIndex === index ? item.content : null}
              </AccordionPara>
            </AccordionContent>
          </AccordionItem>
        ))}
      </AccordionContainer>
    </StyledFaq>
  );
}
