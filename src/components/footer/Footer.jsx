import styled from "styled-components";
import LogoSite from "../logo/LogoSite";
import { nanoid } from "nanoid";

const StyledFooter = styled.footer`
  margin-bottom: 5rem;
  padding: 10vh 8vw;
`;

const StyledFooterContainer = styled.div`
  background-color: var(--color-primaryComp);
  border-radius: 1rem;
  padding: 3em 5em;
`;

const StyledFooterCols = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 3rem;
  margin-top: 5rem;
`;
const StyledFooterCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  span {
    padding: 1rem;
    background-color: black;
    width: 70%;
    color: white;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.7rem;
    font-weight: 800;
    border-radius: 1rem;
    cursor: pointer;
    img {
      height: 3rem;
      animation: shake-anim 3s infinite;
    }
  }
  @keyframes shake-anim {
    0% {
      transform: rotate(0) scale(1);
    }
    60% {
      transform: rotate(0) scale(1);
    }
    75% {
      transform: rotate(0) scale(1.12);
    }
    80% {
      transform: rotate(0) scale(1.1);
    }
    84% {
      transform: rotate(-10deg) scale(1.1);
    }
    88% {
      transform: rotate(10deg) scale(1.1);
    }
    92% {
      transform: rotate(-10deg) scale(1.1);
    }
    96% {
      transform: rotate(10deg) scale(1.1);
    }
    100% {
      transform: rotate(0) scale(1);
    }
  }
`;

const StyledFooterMenu = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledLinkHeader = styled.div`
  font-size: 2rem;
  text-transform: uppercase;
  color: gray;
`;

const StyledLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  a {
    font-size: 1.8rem;
    color: var(--color-text);
    cursor: pointer;
  }
`;

const StyledBottomContent = styled.div`
  margin-top: 4rem;
  font-size: 1.6rem;
  p {
    a {
      color: var(--color-text);
      font-weight: 800;
      margin-left: 0.2rem;
      text-decoration: underline;
    }
  }
`;

export default function Footer() {
  const footerData = [
    {
      id: nanoid(),
      header: "Explore",
      items: [
        "Docs",
        "Figma Plugin",
        "Dashboard Template",
        "Blog post template",
        "Color Game",
      ],
    },
    {
      id: nanoid(),
      header: "Let's Connnect",
      items: ["Contact me", "Become a Sponsor", "Youtube", "GitHub", "Codepen"],
    },
  ];
  return (
    <StyledFooter>
      <StyledFooterContainer>
        <LogoSite />
        <StyledFooterCols>
          <StyledFooterCol>
            <p>Visualize your color choices.</p>
            <a href="#">
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=390080&theme=dark"
                alt="product-hunt"
              />
            </a>
            <span>
              <img
                src="https://storage.ko-fi.com/cdn/cup-border.png"
                alt="kofi-logo"
              />
              Support Me on Ko-fi
            </span>
          </StyledFooterCol>
          {footerData.map((item) => {
            return (
              <StyledFooterMenu key={item.id}>
                <StyledLinkHeader>{item.header}</StyledLinkHeader>
                <StyledLinksContainer>
                  {item.items.map((item) => {
                    return <a key={nanoid()}>{item}</a>;
                  })}
                </StyledLinksContainer>
              </StyledFooterMenu>
            );
          })}
        </StyledFooterCols>
        <hr />
        <StyledBottomContent>
          <p>
            Made with ❤ by <a href="#">The Great B</a>
          </p>
          <p>No cookies 🍪 Just colors 🎨 and fonts 🔡</p>
        </StyledBottomContent>
      </StyledFooterContainer>
    </StyledFooter>
  );
}
