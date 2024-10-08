import Header1 from "./Component/header/Header1";
import Header2 from "./Component/header/Header2";
import Header3 from "./Component/header/Header3";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Hero } from "./Component/hero/Hero";
import Main from "./Component/main/Main";
import Footer from "./Component/footer/Footer";
import Scroll from "./Component/scroll/Scroll";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Header1 />
          <Header2 />
          <Header3 />
          <Box bgcolor={theme.palette.bg.main}>
            <Hero />
            <Main />
          </Box>
          <Footer />

          <Scroll />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
