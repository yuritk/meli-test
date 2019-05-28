import React from "react";
import { ThemeProvider } from "styled-components";

import defaultTheme from "./default";

export default function({ children }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      {children}
    </ThemeProvider>
  );
}
