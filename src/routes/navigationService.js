import { NavigationActions, StackActions } from 'react-navigation';

let navigator;

const setTopLevelNavigator = navigatorRef => {
  navigator = navigatorRef;
};

const navigate = (routeName, params = {}) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
};

const reset = route => {
  const resetAction = StackActions.reset({
    index: 0,
    key: null,
    actions: [NavigationActions.navigate({ routeName: route })],
  });
  navigator.dispatch(resetAction);
};

const push = (routeName, params = {}) => {
  navigator.dispatch(
    StackActions.push({
      routeName,
      params,
    })
  );
};

const pop = (index = 1) => {
  const popAction = StackActions.pop({
    n: index,
  });

  navigator.dispatch(popAction);
};

export default {
  navigate,
  pop,
  push,
  reset,
  setTopLevelNavigator,
};
