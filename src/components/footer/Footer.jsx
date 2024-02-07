import styled from "styled-components";
import LogoSite from "../logo/LogoSite";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import { isColorDark } from "../utils/helpers";

const StyledFooter = styled.footer`
  margin-bottom: 5rem;
  padding: 10vh 8vw;
  @media only screen and (max-width: 1000px) {
    padding: 6vh 4vw;
  }
`;

const StyledFooterContainer = styled.div`
  background-color: var(--color-primaryComp);
  border-radius: 1rem;
  padding: 3em 5em;
  @media only screen and (max-width: 1000px) {
    padding: 2em;
  }
`;

const StyledFooterCols = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 3rem;
  margin-top: 5rem;
  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1rem;
  }
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
    @media only screen and (max-width: 1200px) {
      width: 100%;
    }
    @media only screen and (max-width: 1000px) {
      max-width: max-content;
    }
    img {
      height: 3rem;
      animation: shake-anim 3s infinite;
      @media only screen and (max-width: 1200px) {
        height: 2rem;
      }
      @media only screen and (max-width: 1000px) {
        height: 3rem;
      }
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
  text-decoration: underline;
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

const StyledLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;
const StyledMenuLink = styled.a`
  font-size: 1.8rem;
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
  cursor: pointer;
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
  const primaryComp = useSelector((state) => state.theme.primaryComplement);
  const isThemeDark = useSelector((state) => state.theme.isDark);
  const isPrimaryCompDark = isColorDark(primaryComp);
  console.log(isPrimaryCompDark);

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
                <StyledLinkHeader
                  $isDark={isPrimaryCompDark}
                  $isThemeDark={isThemeDark}
                >
                  {item.header}
                </StyledLinkHeader>
                <StyledLinksContainer>
                  {item.items.map((item) => {
                    return (
                      <StyledMenuLink
                        $isDark={isPrimaryCompDark}
                        $isThemeDark={isThemeDark}
                        key={nanoid()}
                      >
                        {item}
                      </StyledMenuLink>
                    );
                  })}
                </StyledLinksContainer>
              </StyledFooterMenu>
            );
          })}
        </StyledFooterCols>
        <hr />
        <StyledBottomContent>
          <p>
            Made with ❤ by <a href="#">Love</a>
          </p>
          <p>No cookies 🍪 Just colors 🎨 and fonts 🔡</p>
          <p>Coded by The Great B</p>
        </StyledBottomContent>
      </StyledFooterContainer>
    </StyledFooter>
  );
}
