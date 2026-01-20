// app/MuiSetup.tsx
"use client"; // This component must be a Client Component

import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter"; // Note the v16-appRouter import
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

export default function MuiSetup({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
