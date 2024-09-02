// import React from "react";
// import { createContext, useState, useMemo } from "react";
// import { createTheme } from "@mui/material/styles";
// import { grey } from "@mui/material/colors";

// export const getDesignTokens = (mode) => ({
//   palette: {
//     mode,
//     ...(mode === "light"
//       ? {
//           // palette values for light mode
//           text: {
//             primary: "#2B3445",
//           },
//           neutral: {
//             main: "#64748B",
//           },

//           favColor: {
//             main: grey[300],
//           },
//         }
//       : {
//           // palette values for dark mode
//           neutral: {
//             main: "#64748B",
//           },

//           favColor: {
//             main: grey[800],
//           },
//           text: {
//             primary: "#fff",
//           },
//         }),
//   },
// });

// // context for color mode
// export const ColorModeContext = createContext({
//   toggleColorMode: () => {},
// });

// export const useMode = () => {
//   const [mode, setMode] = useState(
//     localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
//   );

//   const colorMode = useMemo(
//     () => ({
//       toggleColorMode: () =>
//         setMode((prev) => (prev === "light" ? "dark" : "light")),
//     }),
//     []
//   );

//   const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
//   return [theme, colorMode];
// };


import { createContext, useState, useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Create a context for color mode
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const useMode = () => {
  // Retrieve mode from localStorage or default to 'light'
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");

  // Function to toggle between light and dark mode
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === "light" ? "dark" : "light";
          localStorage.setItem("mode", newMode);
          return newMode;
        });
      },
    }),
    []
  );

  // Create a theme object based on the current mode
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return [theme, colorMode];
};
