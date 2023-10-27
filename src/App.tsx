import { ThemeProvider } from 'styled-components';
import Router from './Router';
import { theme } from '@styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );

}

export default App
