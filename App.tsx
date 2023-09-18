import React from 'react';
import { ExampleComponents } from './src/components/example';
import { Animation } from './src/animation';
import { StyledComponents } from './src/styledComponents';
import theme from './src/global/styles/theme';
import { ThemeProvider } from 'styled-components/native';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* // <ExampleComponents />
      // <Animation /> */}
      <StyledComponents />
    </ThemeProvider>
);
}
