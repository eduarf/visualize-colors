import styled from "styled-components";
import Home from "./pages/Home/Home";
import { useSelector } from "react-redux";

const StyledAppContainer = styled.div`
  --color-primary: ${(props) => props.$primary};
  --color-secondary: ${(props) => props.$secondary};
  --color-accent: ${(props) => props.$accent};
  --color-background: ${(props) => props.$background};
  --color-text: ${(props) => props.$text};
  --color-primaryComp: ${(props) => props.$primaryComp};
  --color-lightgray: rgb(244,233,233);
`;

function App() {
  const primaryColor = useSelector((state) => state.theme.primaryColor);
  const secondaryColor = useSelector((state) => state.theme.secondaryColor);
  const accentColor = useSelector((state) => state.theme.accentColor);
  const backgroundColor = useSelector((state) => state.theme.backgroundColor);
  const textColor = useSelector((state) => state.theme.textColor);
  const primaryComplement = useSelector(
    (state) => state.theme.primaryComplement
  );

  return (
    <StyledAppContainer
      $primary={primaryColor}
      $secondary={secondaryColor}
      $accent={accentColor}
      $background={backgroundColor}
      $text={textColor}
      $primaryComp={primaryComplement}
    >
      <Home />
    </StyledAppContainer>
  );
}

export default App;
