import React from 'react';
import { Provider } from 'react-redux';
import { Root, StyleProvider, getTheme } from 'native-base';
import { ThemeProvider } from 'styled-components';

import configureStore from './redux/store';
import variables from './theme/variables/commonColor';
import pallete from './theme/variables/pallete';
import NavigationService from './routes/navigationService';
import { changeRoute } from './redux/actions/app.action';
import { AppNavigator } from './routes';

const store = configureStore();

export default class App extends React.Component<{}> {
  getActiveRouteName = navigationState => {
    if (!navigationState) {
      return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
      return this.getActiveRouteName(route);
    }
    return route.routeName;
  };

  render() {
    return (
      <Provider store={store}>
        <StyleProvider style={getTheme(variables)}>
          <Root>
            <ThemeProvider theme={pallete}>
              <AppNavigator
                ref={navigatorRef => {
                  NavigationService.setTopLevelNavigator(navigatorRef);
                }}
                onNavigationStateChange={(prevState, currentState) => {
                  const currentScreen = this.getActiveRouteName(currentState);
                  const prevScreen = this.getActiveRouteName(prevState);

                  if (prevScreen !== currentScreen) {
                    // the line below uses the Google Analytics tracker
                    // change the tracker here to use other Mobile analytics SDK.
                    store.dispatch(changeRoute(currentScreen));
                  }
                }}
              />
            </ThemeProvider>
          </Root>
        </StyleProvider>
      </Provider>
    );
  }
}
