"use client";

import { ChakraProvider, defaultSystem, Theme } from "@chakra-ui/react";
import { ColorModeProvider } from "./color-mode";
import { ThemeProvider } from "@emotion/react";

export function Provider({ children }) {
  return (
    <>
      <ColorModeProvider>
        <ChakraProvider value={defaultSystem}>
          <ThemeProvider theme={Theme} />
          {children}
        </ChakraProvider>
      </ColorModeProvider>
    </>
  );
}
