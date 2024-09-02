import Header1 from "./Component/header/Header1";
import Header2 from "./Component/header/Header2";
import Header3 from "./Component/header/Header3";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div >
          <Header1 />
          <Header2 />
          <Header3 />

        </div>
       </ThemeProvider>
     </ColorModeContext.Provider>
  );
}

export default App;

