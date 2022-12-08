import './fonts.scss'
import AppLayout from "./layouts/AppLayout/AppLayout";
import ThemeProviderExt from "./themes/ThemeProvider";

function App() {
  return (
    <ThemeProviderExt>
      <AppLayout/>
      {/* { <IconsPalette/> } */}
    </ThemeProviderExt>
  );
}


export default App;
