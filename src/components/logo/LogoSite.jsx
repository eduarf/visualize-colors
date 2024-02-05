import styled from "styled-components";

const StyledLogo = styled.span`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  color: var(--color-text);
  span {
    animation: sway 2s linear 0s infinite;
    display: inline-block;
  }
  span:nth-child(1) {
    animation-delay: 0.1s;
  }
  span:nth-child(2) {
    animation-delay: 0.2s;
  }
  span:nth-child(3) {
    animation-delay: 0.3s;
  }
  span:nth-child(4) {
    animation-delay: 0.4s;
  }
  span:nth-child(5) {
    animation-delay: 0.5s;
  }
  span:nth-child(6) {
    animation-delay: 0.6s;
  }
  span:nth-child(7) {
    animation-delay: 0.7s;
  }
  span:nth-child(8) {
    animation-delay: 0.8s;
  }
  span:nth-child(9) {
    animation-delay: 0.9s;
  }
  span:nth-child(10) {
    animation-delay: 1s;
  }
  span:nth-child(11) {
    animation-delay: 1.1s;
  }
  span:nth-child(12) {
    animation-delay: 1.2s;
  }
  span:nth-child(13) {
    animation-delay: 1.3s;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 1.8rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
  @keyframes sway {
    0% {
      color: var(--color-primary);
      transform: translateY(0);
    }
    33% {
      color: var(--color-secondary);
      transform: translateY(30%);
    }
    66% {
      color: var(--color-accent);
      transform: translateY(-30%);
    }
    100% {
      color: var(--color-primaryComp);
      transform: translateY(0);
    }
  }
`;

export default function LogoSite() {
  return (
    <StyledLogo>
      <span>C</span>
      <span>O</span>
      <span>L</span>
      <span>O</span>
      <span>R</span>
      &nbsp;&nbsp;
      <span>S</span>
      <span>E</span>
      <span>L</span>
      <span>E</span>
      <span>C</span>
      <span>T</span>
      <span>O</span>
      <span>R</span>
    </StyledLogo>
  );
}
