import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import SignUpScreen from './screens/sign-up/SignUpScreen';
import LoginScreen from './screens/login/LoginScreen';
import { routes } from './screens/routes';
import { theme } from './style/theme';
import ErrorBoundary from './common/components/error-loading/ErrorBoundary';
import { authTokenKey, persistStore } from './persistStore/persistStore';

const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const isLoggedIn = !!persistStore.get(authTokenKey);

  return (
    <Container>
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <Router>
            <Routes>
              {isLoggedIn ? (
                <>
                </>
              ) : (
                <>
                  <Route path={routes.home} element={<LoginScreen />} />
                  <Route path={routes.join} element={<SignUpScreen />} />
                </>
              )}
            </Routes>
          </Router>
        </ThemeProvider>
      </ErrorBoundary>
    </Container>
  );
}

export default App;
