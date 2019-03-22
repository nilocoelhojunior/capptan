// @flow

export const backToIndex = ({ navigation, defaultHandler }) => {
  if (navigation.state.index > 0) {
    navigation.popToTop();
  } else {
    defaultHandler();
  }
};
