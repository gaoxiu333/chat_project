/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {Router} from './router';
import {ThemeProvider} from './theme';

// SafeAreaProvider、KeyboardAvoidingView
function App(): JSX.Element {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
