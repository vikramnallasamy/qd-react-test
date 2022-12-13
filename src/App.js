import './fonts.scss'
import AppLayout from "./layouts/AppLayout/AppLayout";
import ThemeProviderExt from "./themes/ThemeProvider";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
  * {
    text-transform: capitalize;
    --border-radius-common: 6px;
  }
  html {
    @media only screen and (max-width: 700px) {
      font-size: 0.75rem;
    }
    @media only screen and (max-width: 500px) {
      font-size: 0.6rem;
    }
  }
`

function App() {
  return (
    <ThemeProviderExt>
      <GlobalStyle/>
      <AppLayout/>
    </ThemeProviderExt>
  );
}


export default App;
