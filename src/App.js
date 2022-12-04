import AppLayout from "./layouts/AppLayout/AppLayout";
import ThemeProviderExt from "./themes/ThemeProvider";

function App() {
  return (
    <ThemeProviderExt>
      <AppLayout/>
    </ThemeProviderExt>
  );
}


export default App;
