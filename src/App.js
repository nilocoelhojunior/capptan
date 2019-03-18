import React from 'react';
import { Provider } from 'react-redux';
import { Root, StyleProvider, getTheme } from 'native-base';
import { ThemeProvider } from 'styled-components';

import configureStore from './redux/store';
import variables from './theme/variables/commonColor';
import pallete from './theme/variables/pallete';

import { AppNavigator } from './routes';

const store = configureStore();

export default () => (
  <Provider store={store}>
    <StyleProvider style={getTheme(variables)}>
      <Root>
        <ThemeProvider theme={pallete}>
          <AppNavigator />
        </ThemeProvider>
      </Root>
    </StyleProvider>
  </Provider>
);
