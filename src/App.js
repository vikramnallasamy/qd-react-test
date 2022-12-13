import './fonts.scss'
import AppLayout from "./layouts/AppLayout/AppLayout";
import ThemeProviderExt from "./themes/ThemeProvider";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
  * {
    text-transform: capitalize;
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
