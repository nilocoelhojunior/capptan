// @flow
import React, { Component } from 'react';

import { Wrapper, Spinner } from './style';

type Props = {
  header?: boolean,
};

export default class Loading extends Component<Props> {
  static defaultProps = {
    header: true,
  };

  render() {
    return (
      <Wrapper {...this.props}>
        <Spinner />
      </Wrapper>
    );
  }
}
